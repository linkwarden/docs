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

Linkwarden has a pretty minimal hardware requirements - it was tested on a 2gb VPS and it ran pretty smoothly, the most intense part is when you build the app, but once it's running it's relatively lightweight.

### Docker 🐋

**Requirements:**

- Docker
- Git

#### 1. Clone the Linkwarden repository

```bash
$ git clone https://github.com/linkwarden/linkwarden.git
$ cd linkwarden
```

#### 2. Configure the Environment Variables

Inside the `/linkwarden` folder, create a file named `.env`, open it and paste the following text inside it:

```
NEXTAUTH_SECRET=VERY_SENSITIVE_SECRET
NEXTAUTH_URL=http://localhost:3000/api/v1/auth
POSTGRES_PASSWORD=YOUR_POSTGRES_PASSWORD
```

The only thing you **MUST** change here is `YOUR_POSTGRES_PASSWORD` and `VERY_SENSITIVE_SECRET`, they both should be different secret phrases.

The `NEXTAUTH_URL` should be changed to your domain name _only if you are hosting it somewhere else_.

#### 3. Run it!

In the main folder (where you create the .env file) simply run the following:

```bash
$ docker compose up
```

After a few minutes (depending on your internet connection) you can access Linkwarden via [http://localhost:3000](http://localhost:3000) (or whichever hostname you deployed Linkwarden on).

**Enjoy!**

### Manual Installation

:::note

The Manual Installation is targeted towards a more technical audience, to take an easier path, go for installation using [Docker](/self-hosting/installation#docker-).

:::

**Requirements:**

- Git
- Node.js
- Yarn
- Postgres
- [Monolith](https://github.com/Y2Z/monolith)

#### 1. Clone the Linkwarden repository

```bash
$ git clone https://github.com/linkwarden/linkwarden.git
$ cd linkwarden
```

#### 2. Install the necessary dependancies

```bash
$ yarn
$ npx playwright install-deps
```

#### 3. Configure the Environment Variables

Inside the `/linkwarden` folder, create a file named `.env`, open it and paste the following text inside it:

```
NEXTAUTH_SECRET=VERY_SENSITIVE_SECRET
NEXTAUTH_URL=http://localhost:3000/api/v1/auth
DATABASE_URL=postgresql://[USERNAME]:[PASSWORD]@localhost:[PORT]/[DATABASE]
```

The only thing you **MUST** change here is `VERY_SENSITIVE_SECRET` and `DATABASE_URL`.

The `NEXTAUTH_URL` should be changed to your domain name _only if you are hosting it somewhere else_.

#### 4. Build and setup the database:

```bash
$ yarn build
$ yarn prisma migrate deploy
```

#### 5. Start the app:

```bash
$ yarn start
```
