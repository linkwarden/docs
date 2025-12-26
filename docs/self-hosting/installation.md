---
sidebar_position: 1
---

# Installation

:::tip

Our official [Cloud](https://linkwarden.app/#pricing) offering is the easiest way to start using Linkwarden and is typically more affordable than renting a VPS.

Plus, your subscription supports both the development and the continuous improvement of the app for everyone!

Alternatively, if you prefer self-hosting Linkwarden, no problem! You still have access to all the core features.

:::

Here you can find everything you need to setup a fully fledged Linkwarden instance on your own server.

## Installation

### Hardware Requirements

Linkwarden has pretty minimal hardware requirements - it was tested on a VPS with 4gb of memory and it ran pretty smoothly, the most intense part is when you build the app, but once it's running it's relatively lightweight.

### Docker 🐋

**Requirements:**

- Docker
- Curl
- Nano

##### 1. Download the required files

```bash
mkdir linkwarden && cd linkwarden
curl -O https://raw.githubusercontent.com/linkwarden/linkwarden/refs/heads/main/docker-compose.yml
curl -L https://raw.githubusercontent.com/linkwarden/linkwarden/refs/heads/main/.env.sample -o ".env"
```

##### 2. Configure the Environment Variables

```bash
nano .env
```

The required environment variables are:

```bash
NEXTAUTH_URL=http://localhost:3000/api/v1/auth
NEXTAUTH_SECRET=VERY_SENSITIVE_SECRET
MEILI_MASTER_KEY=VERY_SENSITIVE_MEILI_MASTER_KEY
POSTGRES_PASSWORD=CUSTOM_POSTGRES_PASSWORD
```

The only thing you MUST change here is `NEXTAUTH_SECRET`, `POSTGRES_PASSWORD`, and `MEILI_MASTER_KEY`, they all should be different secret phrases. The phrase should be wrapped in single or double quotes if any special characters are used.

The `NEXTAUTH_URL` should be changed to your domain name _only if you are hosting it somewhere else_.

##### 3. Run it!

In the main folder (where you created the .env file) simply run the following:

```bash
docker compose up
```

After a few minutes (depending on your internet connection) you can access Linkwarden via [http://localhost:3000](http://localhost:3000) (or whichever hostname you deployed Linkwarden on).

**Enjoy!**

### Manual Installation

:::note

The Manual Installation is targeted towards a more technical audience, to take an easier path, go for installation using [Docker](/self-hosting/installation#docker-).

:::

**Requirements:**

- Git
- Node (20 and up)
- Yarn (with Corepack enabled)
- Postgres (16 and up)
- Nano
- [Monolith](https://github.com/Y2Z/monolith)

#### 1. Clone the Linkwarden repository

```bash
git clone https://github.com/linkwarden/linkwarden.git
cd linkwarden
```

#### 2. Install the necessary dependancies

```bash
yarn workspaces focus linkwarden @linkwarden/web @linkwarden/worker
```

#### 3. Configure the Environment Variables

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

#### 4. Build the app and setup the database:

```bash
yarn prisma:generate
yarn web:build
yarn prisma:deploy
```

#### 5. Setup Meilisearch (optional):

If you want to take advantage of the [advanced search options](https://docs.linkwarden.app/Usage/advanced-search), you need to first follow the [Meilisearch installation guide](https://docs.meilisearch.com/learn/getting_started/installation.html) to install Meilisearch.

And then add the following environment variable to your `.env` file:

```
MEILI_HOST=http://localhost:7700
MEILI_MASTER_KEY=VERY_SENSITIVE_MEILI_MASTER_KEY
```

Keep in mind that you need to have Meilisearch running in the background before you start Linkwarden.

#### 6. Start the app:

```bash
yarn concurrently:start
```

### Troubleshooting

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
