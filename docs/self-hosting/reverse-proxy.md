---
sidebar_position: 5
---

# Reverse Proxy

This guide shows how to put Linkwarden behind an NGINX reverse proxy with HTTPS.

It assumes:

- Linkwarden is already running on the same server
- Linkwarden is reachable locally at `http://127.0.0.1:3000`
- you want to publish it at `https://app.example.com`
- you are using Ubuntu

If Linkwarden is running on a different host or port, replace `127.0.0.1:3000` everywhere below.

:::note

If you have not installed Linkwarden yet, follow the [Installation](/self-hosting/installation) guide first and confirm that the app works locally before adding a reverse proxy.

:::

## What You Will End Up With

After finishing this guide:

- `https://app.example.com` will open Linkwarden
- NGINX will proxy requests to your local Linkwarden app
- Certbot will manage the TLS certificate for you

## Prerequisites

You will need:

- a server with Linkwarden already running
- a domain or subdomain such as `app.example.com`
- access to your DNS provider
- ports `80` and `443` open on the server

## 1. Create a DNS Record

Create an `A` record for your app hostname and point it at your server's public IP address.

Example:

- Type: `A`
- Name: `app`
- Value: `203.0.113.10`

Wait for the record to resolve before continuing.

You can verify it with:

```bash
dig app.example.com +short
```

## 2. Install NGINX and Certbot

```bash
sudo apt update
sudo apt install -y nginx certbot python3-certbot-nginx
```

## 3. Allow Web Traffic Through the Firewall

If you use UFW:

```bash
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
```

You can verify the firewall status with:

```bash
sudo ufw status
```

## 4. Create an NGINX Site

Create a new site file:

```bash
sudo nano /etc/nginx/sites-available/linkwarden
```

Paste this configuration and replace `app.example.com` with your own hostname:

```nginx
server {
  listen 80;
  listen [::]:80;
  server_name app.example.com;

  location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-Host $host;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_set_header Forwarded "";
    proxy_cache_bypass $http_upgrade;
  }
}
```

Enable the site:

```bash
sudo ln -s /etc/nginx/sites-available/linkwarden /etc/nginx/sites-enabled/linkwarden
```

Test the config:

```bash
sudo nginx -t
```

Reload NGINX:

```bash
sudo systemctl reload nginx
```

At this point, visiting `http://app.example.com` should already open Linkwarden.

## 5. Issue a TLS Certificate

Run Certbot:

```bash
sudo certbot --nginx -d app.example.com
```

Certbot will:

- request a certificate
- update the NGINX config
- redirect HTTP traffic to HTTPS

After it finishes, your site should be available at:

```text
https://app.example.com
```

You can test automatic renewal with:

```bash
sudo certbot renew --dry-run
```

## 6. Update Linkwarden's Environment Variables

Edit your `.env` file and set:

```bash
NEXTAUTH_URL=https://app.example.com/api/v1/auth
BASE_URL=https://app.example.com
```

`BASE_URL` is especially useful if you use email features such as password reset or verification emails.

After changing the environment variables, restart Linkwarden.

For Docker users:

```bash
docker compose down
docker compose up -d
```

For manual installs, restart the processes you use to run Linkwarden.

## 7. Verify Everything

Check the following:

- `https://app.example.com` loads correctly
- you can sign in
- links, collections, and settings pages load normally
- the browser shows a valid TLS certificate

## Optional: Cloudflare

If you use Cloudflare:

- point the DNS record at your server
- once the origin certificate is working, enable proxying if you want to hide the origin IP
- set SSL/TLS mode to `Full (strict)`

If you later add a dedicated user content host for preserved HTML, continue with the [User Content Domain](/self-hosting/user-content-domain) guide.
