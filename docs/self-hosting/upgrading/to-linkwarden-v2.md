---
sidebar_label: To Linkwarden v2
---

# Upgrading to Linkwarden v2

This documentation will help you upgrade your Linkwarden self-hosted instance from v1 to v2.

Linkwarden v2 is a new **major** version including **breaking changes** requiring you to adjust your self-hosted instance accordingly. We will guide you during this process.

## How to upgrade

After pulling the latest changes, here are the steps to address the breaking changes:

1. The `NEXTAUTH_URL` needs to be edited.
2. A migration script needs to be executed.
3. The browser extension needs to be updated to the latest version. (1.2.0 and above)

:::info

We tried to keep things as simple as possible but if you still have any questions, feel free to open an [issue](https://github.com/linkwarden/linkwarden/issues/new/choose) in our main repository.

:::

### 1. Edit the `NEXTAUTH_URL`

Basically you need to append a `/api/v1/auth` to your `NEXTAUTH_URL` in the environment variables (.env file).

So for example this is probably what your current `NEXTAUTH_URL` looks like if you took the default installation variables:

```
NEXTAUTH_URL=http://localhost:3000
```

You just need to append `/api/v1/auth` to it, so change it to this:

```
NEXTAUTH_URL=http://localhost:3000/api/v1/auth
```

### 2. Run the migration script

[This script](https://github.com/linkwarden/linkwarden/blob/main/scripts/migration/migrateToV2.js) checks if a file (screenshot/pdf/profile photo) exists, it then stores it in the database. So there's no need to make unnecessary API calls to figure out if a file exists or not...

**How to run it?**

If you did the [Manual installation](/self-hosting/installation#manual-installation), simply run the following:

```
node scripts/migration/migrateToV2.js
```

For [Docker](/self-hosting/installation#docker-compose) users, replace `CONTAINER_ID` with your running Linkwarden container's ID and execute the following command:

```
docker exec -it CONTAINER_ID /bin/bash -c 'node scripts/migration/migrateToV2.js'
```

Based on the amount of data you have, this _may_ take a few minutes.

**How to know if it's running properly?**

If you're seeing a bunch of numbers, you're good. It's the ID of each entity that's being checked in each format.

### 3. Update the browser extension

Whether you built the extension from source or downloaded it from the browser, make sure you are using the latest available extension (1.2.0 and above).

:::note

At the time of writing, the extension hasn't been verified by the [Chrome Web Store](https://chrome.google.com/webstore/detail/linkwarden/pnidmkljnhbjfffciajlcpeldoljnidn) yet.

But Firefox is [ready](https://addons.mozilla.org/en-CA/firefox/addon/linkwarden/).

:::

## New API structure

Here are the updated API routes:

```
POST                  /api/v1/user
GET | PUT | DELETE    /api/v1/user/:id
GET                   /api/v1/tags
PUT                   /api/v1/tags/:id
GET | POST            /api/v1/collections
PUT | DELETE          /api/v1/collections/:id
GET | POST            /api/v1/links
GET | PUT | DELETE    /api/v1/links/:id
PUT                   /api/v1/links/:id/archive
GET                   /api/v1/dashboard
GET                   /api/v1/public/collections
GET                   /api/v1/public/users/:id
```
