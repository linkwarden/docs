---
sidebar_position: 2
---

# Environment Variables

Here are all the additional variables you can define in the `.env` file for setting up a self-hosted instance:

| Environment Variable             | Default | Description                                                                     |
| -------------------------------- | ------- | ------------------------------------------------------------------------------- |
| PAGINATION_TAKE_COUNT            | 20      | The numbers of Links to fetch every time you reach to the bottom of the webpage |
| STORAGE_FOLDER                   | /data   | The folder to store your Screenshot's, PDF's, and profile photos.               |
| AUTOSCROLL_TIMEOUT               | 30      | The amount of time to wait for the website to be archived (in seconds).         |
| NEXT_PUBLIC_DISABLE_REGISTRATION | false   | If set to true, registration will be disabled.                                  |
| RE_ARCHIVE_LIMIT                 | 5       | Adjusts how often a user can trigger a new archive for each link (in minutes).  |

## Digital Ocean Spaces/AWS S3 Settings

Digital Ocean Spaces uses AWS S3 behind the scene, so you can also choose to store your `STORAGE_FOLDER` files in Digital Ocean Spaces or Amazon S3:

| Environment Variable    | Default | Description |
| ----------------------- | ------- | ----------- |
| SPACES_KEY              | -       | -           |
| SPACES_SECRET           | -       | -           |
| SPACES_ENDPOINT         | -       | -           |
| SPACES_BUCKET_NAME      | -       | -           |
| SPACES_REGION           | -       | -           |
| SPACES_FORCE_PATH_STYLE | -       | -           |

## SMTP Settings

The variables you need to configure to enable password recovery without admin interfering, email verification, etc...

| Environment Variable       | Default | Description                                                                                   |
| -------------------------- | ------- | --------------------------------------------------------------------------------------------- |
| NEXT_PUBLIC_EMAIL_PROVIDER | -       | If set to true, email will be enabled and you'll need to define the next two variables below. |
| EMAIL_FROM                 | -       | The email that will send the verification emails.                                             |
| EMAIL_SERVER               | -       | That sensitive string that starts with `smtp://...` .                                         |

## Keycloak Settings

The variables you need to configure to enable support for Keycloak (OIDC):

| Environment Variable         | Default | Description                                                                                        |
| ---------------------------- | ------- | -------------------------------------------------------------------------------------------------- |
| NEXT_PUBLIC_KEYCLOAK_ENABLED | -       | If set to true, Keycloak will be enabled and you'll need to define the next three variables below. |
| KEYCLOAK_ISSUER              | -       | Issuer should include the realm – e.g. https://my-keycloak-domain.com/realms/My_Realm              |
| KEYCLOAK_CLIENT_ID           | -       | The Keycloak client-id - can be obtained from Keycloak.                                            |
| KEYCLOAK_CLIENT_SECRET       | -       | Can be obtained from Keycloak.                                                                     |
