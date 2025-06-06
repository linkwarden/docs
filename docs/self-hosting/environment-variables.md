---
sidebar_position: 3
---

# Environment Variables

Here are all the additional variables you can define in the `.env` file for setting up a self-hosted instance.

:::note For Docker Users

After changing your .env file, a `$ docker compose restart` won't suffice, you'll need to do a `$ docker compose down` and `$ docker compose up -d` to have the new .env variables propagate.

:::

| Environment Variable  | Default | Description                                                                    |
| --------------------- | ------- | ------------------------------------------------------------------------------ |
| PAGINATION_TAKE_COUNT | 50      | The numbers of Links to fetch every time you reach the bottom of the webpage   |
| STORAGE_FOLDER        | /data   | The folder to store your Screenshots, PDFs, and profile photos.                |
| AUTOSCROLL_TIMEOUT    | 30      | The amount of time to wait for the website to be archived (in seconds).        |
| RE_ARCHIVE_LIMIT      | 5       | Adjusts how often a user can trigger a new archive for each link (in minutes). |

## Authentication Settings

| Environment Variable             | Default | Description                                                             |
| -------------------------------- | ------- | ----------------------------------------------------------------------- |
| NEXT_PUBLIC_DISABLE_REGISTRATION | false   | If set to true, registration will be disabled.                          |
| NEXT_PUBLIC_CREDENTIALS_ENABLED  | true    | If set to true, users will be able to login with username and password. |
| DISABLE_NEW_SSO_USERS            | false   | If set to true, new users will not be able to login with SSO.           |

## Digital Ocean Spaces/AWS S3 Settings

Digital Ocean Spaces uses AWS S3 behind the scenes, so you can also choose to store your `STORAGE_FOLDER` files in Digital Ocean Spaces or Amazon S3:

| Environment Variable    | Default | Description |
| ----------------------- | ------- | ----------- |
| SPACES_KEY              | -       | -           |
| SPACES_SECRET           | -       | -           |
| SPACES_ENDPOINT         | -       | -           |
| SPACES_BUCKET_NAME      | -       | -           |
| SPACES_REGION           | -       | -           |
| SPACES_FORCE_PATH_STYLE | -       | -           |

## SMTP Settings

The variables you need to configure to enable password recovery without the admin interfering, email verification, etc.

Make sure to define the correct protocol depending on the port you want to use:

- `smtp://` with port 587 (STARTTLS)
- `smtps://` with port 465 (Implicit SSL/TLS)

| Environment Variable       | Default | Description                                                                                        |
| -------------------------- | ------- | -------------------------------------------------------------------------------------------------- |
| NEXT_PUBLIC_EMAIL_PROVIDER | -       | If set to true, email will be enabled and you'll need to define the next two variables below.      |
| EMAIL_FROM                 | -       | The email that will send the verification emails.                                                  |
| EMAIL_SERVER               | -       | A url-encoded string with your credentials and the smtp server. (`smtp://user:password@host:port`) |
