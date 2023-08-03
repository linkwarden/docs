---
sidebar_position: 1
---

# Self Hosting

Here you can find everything you need to setup a fully fledged Linkwarden instance on your own server.

## Requirements

Here are all the requirements to hook up your own instance:

### Hardware

Linkwarden has a pretty minimal hardware requirements - it was tested on a 2gb VPS and it ran pretty smoothly, the most intense part is when you build the app, but once it's running it's relatively lightweight.

### Operating System

Linkwarden supports all major desktop OS's (Linux, MacOS, Windows), but note that Linux is preferred.

### Software

To setup Linkwarden, you'll first need to install a few things:

#### If you're installing using Docker

- docker
- git

#### If you're taking the manual approach

- git
- node.js
- yarn
- postgres

## Installation

### Docker 🐋

#### 1. Start by cloning the repository with the following command:

```
git clone https://github.com/linkwarden/linkwarden.git
```

#### 2. Change directory to the cloned repo using the following command:

```
cd linkwarden
```

#### 3. Create a file named `.env`:

```
touch .env
```

And open it:

```
nano .env
```

#### 4. Copy and paste the following and define the values:

```
NEXTAUTH_SECRET=VERY_SENSITIVE_SECRET
NEXTAUTH_URL=http://localhost:3000
POSTGRES_PASSWORD=YOUR_POSTGRES_PASSWORD
```

The only thing you need to change here is `YOUR_POSTGRES_PASSWORD` and `VERY_SENSITIVE_SECRET`, they both should be different secret phrases.

The `NEXTAUTH_URL` should be changed to you're domain name _only if you are hosting it somewhere else_.

#### 5. Run it!

In the main folder (where you create the .env file) simply run `docker compose up`.

After a few minutes (depending on your internet connection) you can access Linkwarden via [http://localhost:3000](http://localhost:3000).

Enjoy!

### Manual Installation

:::note

The commands may vary by which OS you use.

:::

#### 1. Start by cloning the repository with the following command:

```
git clone https://github.com/linkwarden/linkwarden.git
```

#### 2. Change directory to the cloned repo using the following command:

```
cd linkwarden
```

And run:

```
yarn
```

And also run:

```
npx playwright install-deps
```

To install the dependencies.

#### 3. Create a file named `.env`:

```
touch .env
```

And open it:

```
nano .env
```

#### 4. Copy and paste the following and define the values:

```
NEXTAUTH_SECRET=
NEXTAUTH_URL=
DATABASE_URL=
```

So basically:

- `NEXTAUTH_SECRET`: A **SUPER** sensitive secret that you should keep it safe, you don't need to memorize it like a password.
- `NEXTAUTH_URL`: The domain (or IP) where Linkwarden is hosted on, for instance if you're running it on your local network it would be `http://localhost:3000`.
- `DATABASE_URL`: This is your database connection string, which has a format like this:

```
postgresql://[USERNAME]:[PASSWORD]@localhost:[PORT]/[DATABASE]
```

Where `[USERNAME]` is your postgres username, `[PASSWORD]` is your postgres password, `[PORT]` is the port that postgres is running on (usually `5432`) and `[DATABASE]` is the postgres database.

#### 5. Build the app using the following command:

```
yarn build
```

#### 6. Setup the database using the Prisma schema:

```
yarn prisma migrate deploy
```

#### 7. Start the app:

```
yarn start
```
