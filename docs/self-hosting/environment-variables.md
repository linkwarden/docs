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
| RE_ARCHIVE_LIMIT                 | 5       | Adjusts how often a user can trigger a new archive for each link (in minutes).  |

## Authentication Settings

| Environment Variable             | Default | Description                                                             |
|----------------------------------|---------|-------------------------------------------------------------------------|
| NEXT_PUBLIC_DISABLE_REGISTRATION | false   | If set to true, registration will be disabled.                          |
| NEXT_PUBLIC_CREDENTIALS_ENABLED  | true    | If set to true, users will be able to login with username and password. |
| DISABLE_NEW_SSO_USERS            | false   | If set to true, new users will not be able to login with SSO.           |


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

## Singlefile settings

_Singlefile archive method is not functional without setting one of these variables._

These env variables are mutually exclusive, you can only use one of them at a time.

| Environment Variable         | Default | Description                                                                                                                                                 |
|------------------------------|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SINGLEFILE_ARCHIVE_COMMAND   | -       | Create a singlefile archive using a cli command installed on the local filesystem. Example: `single-file "{{URL}}" --dump-content`                          |
| SINGLEFILE_ARCHIVE_HTTP_API  | -       | Uses an HTTP service to retrieve the single page html (e.g. rutkai/single-file-web or screenbreak/singlefile-dockerized). Example: `http://localhost:3000/` |

Recommended setup is to use the container in the `docker-compose.yml` file and the HTTP API with the value `http://singlefile:3000/`.

Please note that either invoking the command or using the HTTP API need to give back the singlefile version and shouldn't dump the content to a file.
