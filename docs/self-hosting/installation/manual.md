---
sidebar_position: 3
---

# Manual Installation

:::tip

Our official [Cloud](https://linkwarden.app/#pricing) offering is the easiest way to start using Linkwarden and is typically more affordable than renting a VPS.

Plus, your subscription supports both the development and the continuous improvement of the app for everyone!

Alternatively, if you prefer self-hosting Linkwarden, no problem! You still have access to all the core features.

:::

:::note

The Manual Installation is targeted towards a more technical audience, to take an easier path, go for installation using [Docker](/self-hosting/installation#docker-).

:::

## Requirements

### Software

- [Git](https://git-scm.com/install/)
- [Node.js](https://nodejs.org/en) we recommend using [nvm](https://github.com/nvm-sh/nvm) to manage your [Node.js](https://nodejs.org/en) versions
- [Yarn](https://yarnpkg.com/getting-started/install)
- [Postgres](https://www.postgresql.org/)
- [Nano](https://www.nano-editor.org/)
- [Monolith](https://github.com/Y2Z/monolith)

## Installation Steps

### 1. Clone the Linkwarden repository

```bash
git clone https://github.com/linkwarden/linkwarden.git
cd linkwarden
```

### 2. Install the necessary dependancies

```bash
yarn
```

### 3. Configure the Environment Variables

```bash
cd linkwarden
cp .env.sample .env
nano .env
```

The required environment variables are:

```
NEXTAUTH_SECRET=VERY_SENSITIVE_SECRET
NEXTAUTH_URL=http://localhost:3000/api/v1/auth
DATABASE_URL=postgresql://[USERNAME]:[PASSWORD]@localhost:[PORT]/[DATABASE]
```

The only thing you MUST change here is `NEXTAUTH_SECRET` and `DATABASE_URL`.

The `NEXTAUTH_URL` should be changed to your domain name _only if you are hosting it somewhere else_.

### 4. Build the app and setup the database:

```bash
yarn prisma:generate
yarn web:build
yarn prisma:deploy
```

### 5. Setup Meilisearch (optional):

If you want to take advantage of the [advanced search options](https://docs.linkwarden.app/Usage/advanced-search), you need to first follow the [Meilisearch installation guide](https://docs.meilisearch.com/learn/getting_started/installation.html) to install Meilisearch.

And then add the following environment variable to your `.env` file:

```
MEILI_HOST=http://localhost:7700
MEILI_MASTER_KEY=VERY_SENSITIVE_MEILI_MASTER_KEY
```

Keep in mind that you need to have Meilisearch running in the background before you start Linkwarden.

### 6. Start the app:

```bash
yarn concurrently:start
```

## Troubleshooting

There are a few common issues that you might encounter when setting up Linkwarden, here are some of them:

<details>
    <summary>`[0] upstream image response failed for https://t2.gstatic.com/faviconV2...`</summary>

    This error is caused by the favicon (the website's logo) not being found, it's really not a big deal, but if you want to fix it, you can set an icon to the links that don't have a favicon, or you can just hide the icons. The favicon is the only part that isn't actually stored and is being fetched from the internet every time you load the page.

</details>

<details>
    <summary>`Type error: Module '"@prisma/client"' has no exported member...`</summary>

    This error is caused by the `@prisma/client` package not being installed correctly, to fix it, simply run:

    ```bash
    yarn prisma:generate
    ```

</details>
