---
sidebar_position: 6
---

# User Content Domain

This guide shows how to serve preserved HTML archives from a separate public hostname so untrusted archived pages are isolated from your main Linkwarden app.

The goal is simple:

- your main Linkwarden app stays on `https://app.example.com`
- preserved HTML is served from `https://usercontent.example.com`
- both hostnames can still point to the same Linkwarden server and the same Linkwarden app process

This reduces the impact of malicious or untrusted preserved HTML by keeping it off the main app origin.

:::tip

You do **not** need to run a second Linkwarden server for this. In most setups, both hostnames can proxy to the same local app on `http://127.0.0.1:3000`.

:::

:::note

This guide assumes your main app is already working behind a reverse proxy. If not, finish the [Reverse Proxy](/self-hosting/reverse-proxy) guide first.

:::

## Choosing a Domain

You can use either:

- a separate subdomain such as `usercontent.example.com`
- or a completely separate domain such as `exampleusercontent.com`

Both are better than serving preserved HTML from the main app origin.

For the strongest isolation, use a completely separate site or domain if possible.

## 1. Create a DNS Record

Create a new DNS record for the hostname you want to use for preserved content.

Example:

- Type: `A`
- Name: `usercontent`
- Value: `203.0.113.10`

This can point to the same server as your main Linkwarden app.

## 2. Configure Linkwarden

Edit your `.env` file and set:

```bash
NEXT_PUBLIC_USER_CONTENT_DOMAIN=https://usercontent.example.com
```

Restart Linkwarden after saving the change.

For Docker users:

```bash
docker compose down
docker compose up -d
```

## 3. Add a Dedicated NGINX Site for Preserved Content

Create a new site file:

```bash
sudo nano /etc/nginx/sites-available/linkwarden-user-content
```

Paste this configuration and replace `usercontent.example.com` with your own hostname:

```nginx
server {
  listen 80;
  listen [::]:80;
  server_name usercontent.example.com;

  location = /api/v1/preserved/view {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-Host $host;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header Forwarded "";
    add_header Referrer-Policy "no-referrer" always;
    add_header X-Content-Type-Options "nosniff" always;
  }

  location / {
    return 404;
  }
}
```

Enable the site:

```bash
sudo ln -s /etc/nginx/sites-available/linkwarden-user-content /etc/nginx/sites-enabled/linkwarden-user-content
```

## 4. Block the Preserved View Route on Your Main App Host

Edit your main Linkwarden NGINX site:

```bash
sudo nano /etc/nginx/sites-available/linkwarden
```

Inside the `server` block for `app.example.com`, add:

```nginx
location = /api/v1/preserved/view {
  return 404;
}
```

This prevents the preserved route from being served on the main app hostname.

## 5. Test and Reload NGINX

```bash
sudo nginx -t
sudo systemctl reload nginx
```

## 6. Issue a TLS Certificate for the New Hostname

```bash
sudo certbot --nginx -d usercontent.example.com
```

After that, both of these should work:

- `https://app.example.com`
- `https://usercontent.example.com`

But the user content hostname should only serve `/api/v1/preserved/view`.

## 7. Verify the Setup

Check the following:

### Main app configuration

Open:

```text
https://app.example.com/api/v1/config
```

You should see `USER_CONTENT_DOMAIN` set to your configured hostname.

### Main host should not serve preserved content

Visiting the preserved view route on the main host should not work:

```text
https://app.example.com/api/v1/preserved/view
```

### Preserved HTML should load from the user content host

Open a preserved webpage archive in Linkwarden and confirm that the browser loads the archived HTML from:

```text
https://usercontent.example.com/api/v1/preserved/view?token=...
```

### Main host should reject browser-style monolith requests

When the feature is enabled, browser requests for monolith HTML on the main app host should no longer be served inline:

```text
https://app.example.com/api/v1/archives/<id>?format=4
```

## Optional: Cloudflare

If you use Cloudflare:

- create proxied DNS records for both hostnames
- set SSL/TLS mode to `Full (strict)`
- do not add a `Cache Everything` rule for the user content hostname

For additional hardening, you can also restrict ports `80` and `443` on the origin so only Cloudflare IP ranges can reach them.

## Summary

The important parts are:

- `NEXT_PUBLIC_USER_CONTENT_DOMAIN` points to the dedicated hostname
- the dedicated hostname proxies only `/api/v1/preserved/view`
- the main app hostname does **not** serve `/api/v1/preserved/view`

That gives you a separate public origin for preserved HTML without adding a second Linkwarden deployment.
