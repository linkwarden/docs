---
sidebar_position: 1
---

# Docker

:::tip

Our official [Cloud](https://linkwarden.app/#pricing) offering is the easiest way to start using Linkwarden and is typically more affordable than renting a VPS.

Plus, your subscription supports both the development and the continuous improvement of the app for everyone!

Alternatively, if you prefer self-hosting Linkwarden, no problem! You still have access to all the core features.

:::

Here you can find everything you need to setup a fully fledged Linkwarden instance on your own server.

## Requirements

### Hardware

Linkwarden has pretty minimal hardware requirements - it was tested on a VPS with 4gb of memory and it ran pretty smoothly, the most intense part is when you build the app, but once it's running it's relatively lightweight.

### Software

- [Docker](https://docs.docker.com/engine/install/)
- [curl](https://curl.se/)
- [nano](https://www.nano-editor.org/) (or any other text editor)

### 1. Download the required files

```bash
mkdir linkwarden && cd linkwarden
curl -O https://raw.githubusercontent.com/linkwarden/linkwarden/refs/heads/main/docker-compose.yml
curl -L https://raw.githubusercontent.com/linkwarden/linkwarden/refs/heads/main/.env.sample -o ".env"
```

### 2. Configure the Environment Variables

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

### 3. Run it!

In the main folder (where you created the .env file) simply run the following:

```bash
docker compose up
```

After a few minutes (depending on your internet connection) you can access Linkwarden via [http://localhost:3000](http://localhost:3000) (or whichever hostname you deployed Linkwarden on).

**Enjoy!**
