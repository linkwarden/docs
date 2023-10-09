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
| NEXT_PUBLIC_DISABLE_REGISTRATION | false   | If set to true, registration willl be disabled.                                 |

## Digital Ocean Spaces/AWS S3 Settings

Digital Ocean Spaces uses AWS S3 behind the scene, so you can also choose to store your `STORAGE_FOLDER` files in Digital Ocean Spaces or Amazon S3:

| Environment Variable             | Default | Description                                                                     |
| -------------------------------- | ------- | ------------------------------------------------------------------------------- |
| PAGINATION_TAKE_COUNT            | 20      | The numbers of Links to fetch every time you reach to the bottom of the webpage |
| STORAGE_FOLDER                   | /data   | The folder to store your Screenshot's, PDF's, and profile photos.               |
| AUTOSCROLL_TIMEOUT               | 30      | The amount of time to wait for the website to be archived (in seconds).         |
| NEXT_PUBLIC_DISABLE_REGISTRATION | false   | If set to true, registration willl be disabled.                                 |

## SMTP Settings

The variables you need to configure to enable password recovery without admin interfering, email verification, etc...

| Environment Variable       | Default | Description                                                                                   |
| -------------------------- | ------- | --------------------------------------------------------------------------------------------- |
| NEXT_PUBLIC_EMAIL_PROVIDER | -       | If set to true, email will be enabled and you'll need to define the next two variables below. |
| EMAIL_FROM                 | -       | The email that will send the verification emails.                                             |
| EMAIL_SERVER               | -       | That sensitive string that starts with `smtp://...` .                                         |
