---
sidebar_position: 3
---

# Environment Variables

This page documents every variable currently listed in the [`.env.sample`](https://github.com/linkwarden/linkwarden/blob/main/.env.sample) file for self-hosted Linkwarden deployments.

:::note For Docker Users

After changing your `.env` file, run `docker compose down` and `docker compose up -d`. A simple `docker compose restart` does not recreate containers with the updated environment.

:::

## Core Settings

| Environment Variable | Default                             | Description                                                                                                                              |
| -------------------- | ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `NEXTAUTH_URL`       | `http://localhost:3000/api/v1/auth` | Full NextAuth base URL. It must include the `/api/v1/auth` suffix so authentication and OAuth callbacks resolve correctly.               |
| `NEXTAUTH_SECRET`    | -                                   | Secret used to sign sessions, JWTs, and preserved-content tokens. Set this to a long random value in every non-development deployment.   |
| `DATABASE_URL`       | -                                   | PostgreSQL connection string used by Prisma and the web/worker apps. Required when using an external or manually managed database.       |
| `POSTGRES_PASSWORD`  | -                                   | Password for the bundled PostgreSQL container in the default Docker Compose setup. Compose uses it to build the internal `DATABASE_URL`. |

## Runtime, Upload, and Archiving

| Environment Variable                        | Default            | Description                                                                                                                   |
| ------------------------------------------- | ------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| `PAGINATION_TAKE_COUNT`                     | `50`               | Number of links or tags fetched per paginated request.                                                                        |
| `STORAGE_FOLDER`                            | `data`             | Local folder used for archives, previews, and uploaded files when S3-compatible storage is not configured.                    |
| `AUTOSCROLL_TIMEOUT`                        | `30`               | Maximum time, in seconds, spent auto-scrolling a page before screenshot/PDF capture continues.                                |
| `NEXT_PUBLIC_DISABLE_REGISTRATION`          | `false`            | Disables self-service account registration when set to `true`.                                                                |
| `NEXT_PUBLIC_CREDENTIALS_ENABLED`           | `true`             | Enables username/password sign-in when not set to `false`.                                                                    |
| `DISABLE_NEW_SSO_USERS`                     | `false`            | Blocks first-time sign-ins from SSO providers while still allowing already linked SSO accounts to authenticate.               |
| `MAX_LINKS_PER_USER`                        | `30000`            | Maximum number of links a collection owner can store.                                                                         |
| `ARCHIVE_TAKE_COUNT`                        | `5`                | Number of links processed per background archiving or auto-tagging batch.                                                     |
| `BROWSER_TIMEOUT`                           | `5`                | Hard timeout, in minutes, for a single browser-based preservation job.                                                        |
| `IGNORE_URL_SIZE_LIMIT`                     | `false`            | Skips the preflight `HEAD` request used before archiving to inspect remote content headers such as size.                      |
| `NEXT_PUBLIC_DEMO`                          | `false`            | Enables read-only demo restrictions across the UI and API.                                                                    |
| `NEXT_PUBLIC_DEMO_USERNAME`                 | -                  | Demo account username shown on the login page when demo mode is enabled.                                                      |
| `NEXT_PUBLIC_DEMO_PASSWORD`                 | -                  | Demo account password shown on the login page when demo mode is enabled.                                                      |
| `NEXT_PUBLIC_ADMIN`                         | `1`                | Numeric user ID treated as the server administrator for admin-only endpoints and worker controls.                             |
| `NEXT_PUBLIC_MAX_FILE_BUFFER`               | `10`               | Maximum upload size, in MB, for direct file archives such as PDF, image, HTML, and text uploads.                              |
| `PDF_MAX_BUFFER`                            | `100`              | Maximum generated PDF archive size, in MB.                                                                                    |
| `SCREENSHOT_MAX_BUFFER`                     | `100`              | Maximum generated screenshot archive size, in MB.                                                                             |
| `READABILITY_MAX_BUFFER`                    | `100`              | Maximum readability JSON archive size, in MB.                                                                                 |
| `PREVIEW_MAX_BUFFER`                        | `10`               | Maximum generated preview image size, in MB.                                                                                  |
| `MONOLITH_MAX_BUFFER`                       | `100`              | Maximum monolith HTML archive size, in MB.                                                                                    |
| `MONOLITH_CUSTOM_OPTIONS`                   | `-j -F -q`         | Space-separated CLI arguments passed to `monolith`. Setting this overrides the built-in default arguments.                    |
| `IMPORT_LIMIT`                              | `10`               | Maximum size, in MB, for JSON import payloads.                                                                                |
| `PLAYWRIGHT_LAUNCH_OPTIONS_EXECUTABLE_PATH` | -                  | Custom browser executable path for Playwright. Ignored when `PLAYWRIGHT_WS_URL` is set.                                       |
| `PLAYWRIGHT_WS_URL`                         | -                  | Connects the archiver to a remote Chromium instance over CDP instead of launching a local browser.                            |
| `MAX_WORKERS`                               | Playwright default | Number of Playwright test workers. This affects the web app's Playwright test config, not normal runtime request handling.    |
| `DISABLE_BROWSER`                           | `false`            | Formerly `DISABLE_PRESERVATION`. Skips any worker task that relies on the browser.                                            |
| `NEXT_PUBLIC_RSS_POLLING_INTERVAL_MINUTES`  | `60`               | Interval, in minutes, between background RSS polling runs.                                                                    |
| `RSS_SUBSCRIPTION_LIMIT_PER_USER`           | `20`               | Maximum number of RSS subscriptions each user can create.                                                                     |
| `TEXT_CONTENT_LIMIT`                        | unlimited          | Maximum number of extracted readable-text characters stored in `textContent`.                                                 |
| `SEARCH_FILTER_LIMIT`                       | unlimited          | Caps how many non-general advanced search filters are parsed from a search query.                                             |
| `INDEX_TAKE_COUNT`                          | `50`               | Number of links sent to MeiliSearch per indexing batch.                                                                       |
| `MEILI_TIMEOUT`                             | `1000000`          | Timeout, in milliseconds, for waiting on MeiliSearch indexing tasks.                                                          |
| `ALLOW_PRIVATE_NETWORK_ACCESS`              | `false`            | Allows server-side fetches and archiving jobs to access URLs that resolve to private or internal IP addresses. Use with care. |
| `ALLOW_INSECURE_TLS`                        | `false`            | Disables TLS certificate verification for Playwright and server-side fetches. Use only for trusted internal services.         |
| `NEXT_PUBLIC_USER_CONTENT_DOMAIN`           | -                  | Separate origin used to serve preserved content through short-lived signed URLs, for example `https://content.example.com`.   |

## AI Settings

These variables are used for AI-powered tag generation. If multiple providers are configured, Linkwarden currently tries them in this order: OpenAI-compatible, Azure OpenAI, Anthropic, Ollama, OpenRouter, then Perplexity.

| Environment Variable              | Default                     | Description                                                                                |
| --------------------------------- | --------------------------- | ------------------------------------------------------------------------------------------ |
| `NEXT_PUBLIC_OLLAMA_ENDPOINT_URL` | -                           | Base URL of your Ollama instance. Linkwarden appends `/api` automatically when connecting. |
| `OLLAMA_MODEL`                    | -                           | Ollama model name used for automatic tagging.                                              |
| `OPENAI_API_KEY`                  | -                           | API key for OpenAI or another OpenAI-compatible provider.                                  |
| `OPENAI_MODEL`                    | -                           | Model ID used with the OpenAI-compatible provider.                                         |
| `CUSTOM_OPENAI_BASE_URL`          | `https://api.openai.com/v1` | Optional custom base URL for an OpenAI-compatible provider.                                |
| `CUSTOM_OPENAI_NAME`              | `openai`                    | Provider name reported to the AI SDK when using a custom OpenAI-compatible endpoint.       |
| `AZURE_API_KEY`                   | -                           | Azure OpenAI API key.                                                                      |
| `AZURE_RESOURCE_NAME`             | -                           | Azure OpenAI resource name.                                                                |
| `AZURE_MODEL`                     | -                           | Azure OpenAI deployment or model name used for tagging.                                    |
| `ANTHROPIC_API_KEY`               | -                           | Anthropic API key.                                                                         |
| `ANTHROPIC_MODEL`                 | -                           | Anthropic model name used for tagging.                                                     |
| `OPENROUTER_API_KEY`              | -                           | OpenRouter API key.                                                                        |
| `OPENROUTER_MODEL`                | -                           | OpenRouter model name used for tagging.                                                    |
| `PERPLEXITY_API_KEY`              | -                           | Perplexity API key.                                                                        |
| `PERPLEXITY_MODEL`                | `sonar-pro`                 | Perplexity model name used for tagging.                                                    |

## MeiliSearch Settings

| Environment Variable | Default                   | Description                                                                                        |
| -------------------- | ------------------------- | -------------------------------------------------------------------------------------------------- |
| `MEILI_HOST`         | `http://meilisearch:7700` | Base URL of your MeiliSearch instance.                                                             |
| `MEILI_MASTER_KEY`   | -                         | MeiliSearch master key. Linkwarden only initializes the MeiliSearch client when this value is set. |

## S3-Compatible Object Storage

If these variables are not set, Linkwarden stores files locally under `STORAGE_FOLDER`.

| Environment Variable      | Default | Description                                                                                        |
| ------------------------- | ------- | -------------------------------------------------------------------------------------------------- |
| `SPACES_KEY`              | -       | Access key ID for DigitalOcean Spaces, AWS S3, or another S3-compatible provider.                  |
| `SPACES_SECRET`           | -       | Secret access key for the S3-compatible provider.                                                  |
| `SPACES_ENDPOINT`         | -       | Endpoint URL for the S3-compatible provider.                                                       |
| `SPACES_BUCKET_NAME`      | -       | Bucket name used to store archives, previews, and uploaded files.                                  |
| `SPACES_REGION`           | -       | Bucket region.                                                                                     |
| `SPACES_FORCE_PATH_STYLE` | `false` | Forces path-style S3 addressing. Useful for some self-hosted S3-compatible services such as MinIO. |

For S3-compatible services such as MinIO or RustFS, make sure every required
`SPACES_*` value is set. Linkwarden only enables S3-compatible storage when
`SPACES_ENDPOINT`, `SPACES_REGION`, `SPACES_KEY`, and `SPACES_SECRET` are all
present.

Example MinIO-style configuration:

```bash
SPACES_KEY=linkwarden-access-key
SPACES_SECRET=linkwarden-secret-key
SPACES_ENDPOINT=http://minio:9000
SPACES_BUCKET_NAME=linkwarden
SPACES_REGION=us-east-1
SPACES_FORCE_PATH_STYLE=true
```

Use an endpoint that is reachable from the Linkwarden container or process. For
local S3-compatible services, `SPACES_REGION` still needs a value even if the
storage server is running on your own network.

## SMTP Settings

These variables enable email-based sign-in, invitations, verification emails, and password resets.

Make sure to define the correct protocol for your SMTP port:

- `smtp://` with port `587` for STARTTLS
- `smtps://` with port `465` for implicit SSL/TLS

| Environment Variable         | Default | Description                                                                                                                                    |
| ---------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_EMAIL_PROVIDER` | `false` | Enables email-provider features in the UI and related account flows. Normally used together with `EMAIL_FROM`, `EMAIL_SERVER`, and `BASE_URL`. |
| `EMAIL_FROM`                 | -       | Sender address used for verification, invitation, and password-reset emails.                                                                   |
| `EMAIL_SERVER`               | -       | URL-encoded SMTP connection string, for example `smtp://user:password@host:587`.                                                               |
| `BASE_URL`                   | -       | Public base URL of your app, for example `https://example.com`. Unlike `NEXTAUTH_URL`, this should not include `/api/v1/auth`.                 |

## Proxy and PDF Settings

| Environment Variable | Default | Description                                                                                                     |
| -------------------- | ------- | --------------------------------------------------------------------------------------------------------------- |
| `PROXY`              | -       | Proxy URL used for server-side fetches and Playwright browser traffic. HTTP(S) and SOCKS proxies are supported. |
| `PROXY_USERNAME`     | -       | Optional proxy username.                                                                                        |
| `PROXY_PASSWORD`     | -       | Optional proxy password.                                                                                        |
| `PROXY_BYPASS`       | -       | Optional proxy bypass list passed to Playwright for browser requests.                                           |
| `PDF_MARGIN_TOP`     | `15px`  | Top margin used when generating archived PDFs.                                                                  |
| `PDF_MARGIN_BOTTOM`  | `15px`  | Bottom margin used when generating archived PDFs.                                                               |

## SSO Providers

Check out the [SSO/OAauth Integrations](https://docs.linkwarden.app/self-hosting/sso-oauth) page for all the available options.
