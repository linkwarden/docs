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

| Environment Variable                        | Default            | Description                                                                                                                       |
| ------------------------------------------- | ------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| `PAGINATION_TAKE_COUNT`                     | `50`               | Number of links or tags fetched per paginated request.                                                                            |
| `STORAGE_FOLDER`                            | `data`             | Local folder used for archives, previews, and uploaded files when S3-compatible storage is not configured.                        |
| `AUTOSCROLL_TIMEOUT`                        | `30`               | Maximum time, in seconds, spent auto-scrolling a page before screenshot/PDF capture continues.                                    |
| `NEXT_PUBLIC_DISABLE_REGISTRATION`          | `false`            | Disables self-service account registration when set to `true`.                                                                    |
| `NEXT_PUBLIC_CREDENTIALS_ENABLED`           | `true`             | Enables username/password sign-in when not set to `false`.                                                                        |
| `DISABLE_NEW_SSO_USERS`                     | `false`            | Blocks first-time sign-ins from SSO providers while still allowing already linked SSO accounts to authenticate.                   |
| `MAX_LINKS_PER_USER`                        | `30000`            | Maximum number of links a collection owner can store.                                                                             |
| `ARCHIVE_TAKE_COUNT`                        | `5`                | Number of links processed per background archiving or auto-tagging batch.                                                         |
| `BROWSER_TIMEOUT`                           | `5`                | Hard timeout, in minutes, for a single browser-based preservation job.                                                            |
| `IGNORE_URL_SIZE_LIMIT`                     | `false`            | Skips the preflight `HEAD` request used before archiving to inspect remote content headers such as size.                          |
| `NEXT_PUBLIC_DEMO`                          | `false`            | Enables read-only demo restrictions across the UI and API.                                                                        |
| `NEXT_PUBLIC_DEMO_USERNAME`                 | -                  | Demo account username shown on the login page when demo mode is enabled.                                                          |
| `NEXT_PUBLIC_DEMO_PASSWORD`                 | -                  | Demo account password shown on the login page when demo mode is enabled.                                                          |
| `NEXT_PUBLIC_ADMIN`                         | `1`                | Numeric user ID treated as the server administrator for admin-only endpoints and worker controls.                                 |
| `NEXT_PUBLIC_MAX_FILE_BUFFER`               | `10`               | Maximum upload size, in MB, for direct file archives such as PDF, image, HTML, and text uploads.                                  |
| `PDF_MAX_BUFFER`                            | `100`              | Maximum generated PDF archive size, in MB.                                                                                        |
| `SCREENSHOT_MAX_BUFFER`                     | `100`              | Maximum generated screenshot archive size, in MB.                                                                                 |
| `READABILITY_MAX_BUFFER`                    | `100`              | Maximum readability JSON archive size, in MB.                                                                                     |
| `PREVIEW_MAX_BUFFER`                        | `10`               | Maximum generated preview image size, in MB.                                                                                      |
| `MONOLITH_MAX_BUFFER`                       | `100`              | Maximum monolith HTML archive size, in MB.                                                                                        |
| `MONOLITH_CUSTOM_OPTIONS`                   | `-j -F -q`         | Space-separated CLI arguments passed to `monolith`. Setting this overrides the built-in default arguments.                        |
| `IMPORT_LIMIT`                              | `10`               | Maximum size, in MB, for JSON import payloads.                                                                                    |
| `PLAYWRIGHT_LAUNCH_OPTIONS_EXECUTABLE_PATH` | -                  | Custom browser executable path for Playwright. Ignored when `PLAYWRIGHT_WS_URL` is set.                                           |
| `PLAYWRIGHT_WS_URL`                         | -                  | Connects the archiver to a remote Chromium instance over CDP instead of launching a local browser.                                |
| `MAX_WORKERS`                               | Playwright default | Number of Playwright test workers. This affects the web app's Playwright test config, not normal runtime request handling.        |
| `DISABLE_PRESERVATION`                      | `false`            | Skips preservation work and marks links as processed without generating screenshot, PDF, readability, monolith, or preview files. |
| `NEXT_PUBLIC_RSS_POLLING_INTERVAL_MINUTES`  | `60`               | Interval, in minutes, between background RSS polling runs.                                                                        |
| `RSS_SUBSCRIPTION_LIMIT_PER_USER`           | `20`               | Maximum number of RSS subscriptions each user can create.                                                                         |
| `TEXT_CONTENT_LIMIT`                        | unlimited          | Maximum number of extracted readable-text characters stored in `textContent`.                                                     |
| `SEARCH_FILTER_LIMIT`                       | unlimited          | Caps how many non-general advanced search filters are parsed from a search query.                                                 |
| `INDEX_TAKE_COUNT`                          | `50`               | Number of links sent to MeiliSearch per indexing batch.                                                                           |
| `MEILI_TIMEOUT`                             | `1000000`          | Timeout, in milliseconds, for waiting on MeiliSearch indexing tasks.                                                              |
| `ALLOW_PRIVATE_NETWORK_ACCESS`              | `false`            | Allows server-side fetches and archiving jobs to access URLs that resolve to private or internal IP addresses. Use with care.     |
| `ALLOW_INSECURE_TLS`                        | `false`            | Disables TLS certificate verification for Playwright and server-side fetches. Use only for trusted internal services.             |
| `NEXT_PUBLIC_USER_CONTENT_DOMAIN`           | -                  | Separate origin used to serve preserved content through short-lived signed URLs, for example `https://content.example.com`.       |

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

All SSO providers depend on a correct `NEXTAUTH_URL`, including the `/api/v1/auth` suffix.

Most providers follow the same naming pattern:

| Pattern                                           | Meaning                                                                                           |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_<PROVIDER>_ENABLED`                  | Set to `true` to expose the provider in the login UI and load its server-side auth configuration. |
| `<PROVIDER>_CUSTOM_NAME`                          | Optional custom label for the login button when that variable exists for the provider.            |
| `<PROVIDER>_CLIENT_ID` or `<PROVIDER>_ID`         | OAuth client, app, or services identifier.                                                        |
| `<PROVIDER>_CLIENT_SECRET` or `<PROVIDER>_SECRET` | OAuth client secret.                                                                              |
| `<PROVIDER>_ISSUER`                               | OIDC issuer URL when the provider requires one.                                                   |
| `<PROVIDER>_WELLKNOWN_URL`                        | Full OIDC discovery endpoint when the provider uses a custom well-known URL.                      |

The table below lists every SSO-related variable currently present in `.env.sample`.

| Provider               | Variables                                                                                                                                                                       | Description                                                                                                                                       |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| 42 School              | `NEXT_PUBLIC_FORTYTWO_ENABLED`<br />`FORTYTWO_CUSTOM_NAME`<br />`FORTYTWO_CLIENT_ID`<br />`FORTYTWO_CLIENT_SECRET`                                                              | Enables 42 School login, optionally renames the login button, and supplies the OAuth client credentials.                                          |
| Apple                  | `NEXT_PUBLIC_APPLE_ENABLED`<br />`APPLE_CUSTOM_NAME`<br />`APPLE_ID`<br />`APPLE_SECRET`                                                                                        | Enables Apple login, optionally renames the button, and sets the Apple Services ID/client ID plus generated client secret.                        |
| Atlassian              | `NEXT_PUBLIC_ATLASSIAN_ENABLED`<br />`ATLASSIAN_CUSTOM_NAME`<br />`ATLASSIAN_CLIENT_ID`<br />`ATLASSIAN_CLIENT_SECRET`<br />`ATLASSIAN_SCOPE`                                   | Enables Atlassian login, optionally renames the button, sets the OAuth client credentials, and defines the requested OAuth scopes.                |
| Auth0                  | `NEXT_PUBLIC_AUTH0_ENABLED`<br />`AUTH0_CUSTOM_NAME`<br />`AUTH0_ISSUER`<br />`AUTH0_CLIENT_ID`<br />`AUTH0_CLIENT_SECRET`                                                      | Enables Auth0 login with an optional custom button label, the Auth0 issuer URL, and the OAuth client credentials.                                 |
| Authelia               | `NEXT_PUBLIC_AUTHELIA_ENABLED`<br />`AUTHELIA_CLIENT_ID`<br />`AUTHELIA_CLIENT_SECRET`<br />`AUTHELIA_WELLKNOWN_URL`                                                            | Enables Authelia login and configures the OAuth client credentials plus the OIDC discovery URL.                                                   |
| Authentik              | `NEXT_PUBLIC_AUTHENTIK_ENABLED`<br />`AUTHENTIK_CUSTOM_NAME`<br />`AUTHENTIK_ISSUER`<br />`AUTHENTIK_CLIENT_ID`<br />`AUTHENTIK_CLIENT_SECRET`                                  | Enables Authentik login with an optional custom button label, the issuer URL, and the OAuth client credentials.                                   |
| Azure AD B2C           | `NEXT_PUBLIC_AZURE_AD_B2C_ENABLED`<br />`AZURE_AD_B2C_TENANT_NAME`<br />`AZURE_AD_B2C_CLIENT_ID`<br />`AZURE_AD_B2C_CLIENT_SECRET`<br />`AZURE_AD_B2C_PRIMARY_USER_FLOW`        | Enables Azure AD B2C login and configures the tenant, client credentials, and primary user flow/policy name.                                      |
| Azure AD               | `NEXT_PUBLIC_AZURE_AD_ENABLED`<br />`AZURE_AD_CLIENT_ID`<br />`AZURE_AD_CLIENT_SECRET`<br />`AZURE_AD_TENANT_ID`                                                                | Enables Azure AD login and configures the application credentials plus tenant ID.                                                                 |
| Battle.net             | `NEXT_PUBLIC_BATTLENET_ENABLED`<br />`BATTLENET_CUSTOM_NAME`<br />`BATTLENET_CLIENT_ID`<br />`BATTLENET_CLIENT_SECRET`<br />`BATTLENET_ISSUER`                                  | Enables Battle.net login with an optional custom label, OAuth client credentials, and Battle.net issuer/region value.                             |
| Box                    | `NEXT_PUBLIC_BOX_ENABLED`<br />`BOX_CUSTOM_NAME`<br />`BOX_CLIENT_ID`<br />`BOX_CLIENT_SECRET`                                                                                  | Enables Box login, optionally renames the button, and supplies the OAuth client credentials.                                                      |
| Bungie                 | `NEXT_PUBLIC_BUNGIE_ENABLED`<br />`BUNGIE_CUSTOM_NAME`<br />`BUNGIE_CLIENT_ID`<br />`BUNGIE_CLIENT_SECRET`<br />`BUNGIE_API_KEY`                                                | Bungie provider variables included in `.env.sample`: provider toggle, optional button label, OAuth client credentials, and Bungie API key.        |
| Cognito                | `NEXT_PUBLIC_COGNITO_ENABLED`<br />`COGNITO_CUSTOM_NAME`<br />`COGNITO_CLIENT_ID`<br />`COGNITO_CLIENT_SECRET`<br />`COGNITO_ISSUER`                                            | Enables Amazon Cognito login with an optional custom label, OAuth client credentials, and issuer URL.                                             |
| Coinbase               | `NEXT_PUBLIC_COINBASE_ENABLED`<br />`COINBASE_CUSTOM_NAME`<br />`COINBASE_CLIENT_ID`<br />`COINBASE_CLIENT_SECRET`                                                              | Enables Coinbase login, optionally renames the button, and supplies the OAuth client credentials.                                                 |
| Discord                | `NEXT_PUBLIC_DISCORD_ENABLED`<br />`DISCORD_CUSTOM_NAME`<br />`DISCORD_CLIENT_ID`<br />`DISCORD_CLIENT_SECRET`                                                                  | Enables Discord login, optionally renames the button, and supplies the OAuth client credentials.                                                  |
| Dropbox                | `NEXT_PUBLIC_DROPBOX_ENABLED`<br />`DROPBOX_CUSTOM_NAME`<br />`DROPBOX_CLIENT_ID`<br />`DROPBOX_CLIENT_SECRET`                                                                  | Enables Dropbox login, optionally renames the button, and supplies the OAuth client credentials.                                                  |
| Duende IdentityServer6 | `NEXT_PUBLIC_DUENDE_IDS6_ENABLED`<br />`DUENDE_IDS6_CUSTOM_NAME`<br />`DUENDE_IDS6_CLIENT_ID`<br />`DUENDE_IDS6_CLIENT_SECRET`<br />`DUENDE_IDS6_ISSUER`                        | Enables Duende IdentityServer6 login with an optional custom label, OAuth client credentials, and issuer URL.                                     |
| EVE Online             | `NEXT_PUBLIC_EVEONLINE_ENABLED`<br />`EVEONLINE_CUSTOM_NAME`<br />`EVEONLINE_CLIENT_ID`<br />`EVEONLINE_CLIENT_SECRET`                                                          | Enables EVE Online login, optionally renames the button, and supplies the OAuth client credentials.                                               |
| Facebook               | `NEXT_PUBLIC_FACEBOOK_ENABLED`<br />`FACEBOOK_CUSTOM_NAME`<br />`FACEBOOK_CLIENT_ID`<br />`FACEBOOK_CLIENT_SECRET`                                                              | Enables Facebook login, optionally renames the button, and supplies the OAuth client credentials.                                                 |
| FACEIT                 | `NEXT_PUBLIC_FACEIT_ENABLED`<br />`FACEIT_CUSTOM_NAME`<br />`FACEIT_CLIENT_ID`<br />`FACEIT_CLIENT_SECRET`                                                                      | Enables FACEIT login, optionally renames the button, and supplies the OAuth client credentials.                                                   |
| Foursquare             | `NEXT_PUBLIC_FOURSQUARE_ENABLED`<br />`FOURSQUARE_CUSTOM_NAME`<br />`FOURSQUARE_CLIENT_ID`<br />`FOURSQUARE_CLIENT_SECRET`<br />`FOURSQUARE_APIVERSION`                         | Enables Foursquare login, optionally renames the button, sets the OAuth client credentials, and defines the API version value sent to Foursquare. |
| Freshbooks             | `NEXT_PUBLIC_FRESHBOOKS_ENABLED`<br />`FRESHBOOKS_CUSTOM_NAME`<br />`FRESHBOOKS_CLIENT_ID`<br />`FRESHBOOKS_CLIENT_SECRET`                                                      | Enables FreshBooks login, optionally renames the button, and supplies the OAuth client credentials.                                               |
| FusionAuth             | `NEXT_PUBLIC_FUSIONAUTH_ENABLED`<br />`FUSIONAUTH_CUSTOM_NAME`<br />`FUSIONAUTH_CLIENT_ID`<br />`FUSIONAUTH_CLIENT_SECRET`<br />`FUSIONAUTH_ISSUER`<br />`FUSIONAUTH_TENANT_ID` | Enables FusionAuth login with an optional custom label, OAuth client credentials, issuer URL, and optional tenant ID.                             |
| GitHub                 | `NEXT_PUBLIC_GITHUB_ENABLED`<br />`GITHUB_CUSTOM_NAME`<br />`GITHUB_ID`<br />`GITHUB_SECRET`                                                                                    | Enables GitHub login, optionally renames the button, and supplies the GitHub OAuth app ID and secret.                                             |
| GitLab                 | `NEXT_PUBLIC_GITLAB_ENABLED`<br />`GITLAB_CUSTOM_NAME`<br />`GITLAB_CLIENT_ID`<br />`GITLAB_CLIENT_SECRET`<br />`GITLAB_AUTH_URL`                                               | Enables GitLab login with an optional custom label, OAuth client credentials, and an alternate GitLab base URL for self-hosted instances.         |
| Google                 | `NEXT_PUBLIC_GOOGLE_ENABLED`<br />`GOOGLE_CUSTOM_NAME`<br />`GOOGLE_CLIENT_ID`<br />`GOOGLE_CLIENT_SECRET`                                                                      | Enables Google login, optionally renames the button, and supplies the OAuth client credentials.                                                   |
| HubSpot                | `NEXT_PUBLIC_HUBSPOT_ENABLED`<br />`HUBSPOT_CUSTOM_NAME`<br />`HUBSPOT_CLIENT_ID`<br />`HUBSPOT_CLIENT_SECRET`                                                                  | Enables HubSpot login, optionally renames the button, and supplies the OAuth client credentials.                                                  |
| IdentityServer4        | `NEXT_PUBLIC_IDS4_ENABLED`<br />`IDS4_CUSTOM_NAME`<br />`IDS4_CLIENT_ID`<br />`IDS4_CLIENT_SECRET`<br />`IDS4_ISSUER`                                                           | Enables IdentityServer4 login with an optional custom label, OAuth client credentials, and issuer URL.                                            |
| Kakao                  | `NEXT_PUBLIC_KAKAO_ENABLED`<br />`KAKAO_CUSTOM_NAME`<br />`KAKAO_CLIENT_ID`<br />`KAKAO_CLIENT_SECRET`                                                                          | Enables Kakao login, optionally renames the button, and supplies the OAuth client credentials.                                                    |
| Keycloak               | `NEXT_PUBLIC_KEYCLOAK_ENABLED`<br />`KEYCLOAK_CUSTOM_NAME`<br />`KEYCLOAK_ISSUER`<br />`KEYCLOAK_CLIENT_ID`<br />`KEYCLOAK_CLIENT_SECRET`                                       | Enables Keycloak login with an optional custom label, issuer URL, and OAuth client credentials.                                                   |
| LINE                   | `NEXT_PUBLIC_LINE_ENABLED`<br />`LINE_CUSTOM_NAME`<br />`LINE_CLIENT_ID`<br />`LINE_CLIENT_SECRET`                                                                              | Enables LINE login, optionally renames the button, and supplies the OAuth client credentials.                                                     |
| LinkedIn               | `NEXT_PUBLIC_LINKEDIN_ENABLED`<br />`LINKEDIN_CUSTOM_NAME`<br />`LINKEDIN_CLIENT_ID`<br />`LINKEDIN_CLIENT_SECRET`                                                              | Enables LinkedIn login, optionally renames the button, and supplies the OAuth client credentials.                                                 |
| Mailchimp              | `NEXT_PUBLIC_MAILCHIMP_ENABLED`<br />`MAILCHIMP_CUSTOM_NAME`<br />`MAILCHIMP_CLIENT_ID`<br />`MAILCHIMP_CLIENT_SECRET`                                                          | Enables Mailchimp login, optionally renames the button, and supplies the OAuth client credentials.                                                |
| Mail.ru                | `NEXT_PUBLIC_MAILRU_ENABLED`<br />`MAILRU_CUSTOM_NAME`<br />`MAILRU_CLIENT_ID`<br />`MAILRU_CLIENT_SECRET`                                                                      | Enables Mail.ru login, optionally renames the button, and supplies the OAuth client credentials.                                                  |
| Naver                  | `NEXT_PUBLIC_NAVER_ENABLED`<br />`NAVER_CUSTOM_NAME`<br />`NAVER_CLIENT_ID`<br />`NAVER_CLIENT_SECRET`                                                                          | Enables Naver login, optionally renames the button, and supplies the OAuth client credentials.                                                    |
| Netlify                | `NEXT_PUBLIC_NETLIFY_ENABLED`<br />`NETLIFY_CUSTOM_NAME`<br />`NETLIFY_CLIENT_ID`<br />`NETLIFY_CLIENT_SECRET`                                                                  | Enables Netlify login, optionally renames the button, and supplies the OAuth client credentials.                                                  |
| Okta                   | `NEXT_PUBLIC_OKTA_ENABLED`<br />`OKTA_CUSTOM_NAME`<br />`OKTA_CLIENT_ID`<br />`OKTA_CLIENT_SECRET`<br />`OKTA_ISSUER`                                                           | Enables Okta login with an optional custom label, OAuth client credentials, and issuer URL.                                                       |
| OneLogin               | `NEXT_PUBLIC_ONELOGIN_ENABLED`<br />`ONELOGIN_CUSTOM_NAME`<br />`ONELOGIN_CLIENT_ID`<br />`ONELOGIN_CLIENT_SECRET`<br />`ONELOGIN_ISSUER`                                       | Enables OneLogin login with an optional custom label, OAuth client credentials, and issuer URL.                                                   |
| Osso                   | `NEXT_PUBLIC_OSSO_ENABLED`<br />`OSSO_CUSTOM_NAME`<br />`OSSO_CLIENT_ID`<br />`OSSO_CLIENT_SECRET`<br />`OSSO_ISSUER`                                                           | Enables Osso login with an optional custom label, OAuth client credentials, and issuer URL.                                                       |
| osu!                   | `NEXT_PUBLIC_OSU_ENABLED`<br />`OSU_CUSTOM_NAME`<br />`OSU_CLIENT_ID`<br />`OSU_CLIENT_SECRET`                                                                                  | Enables osu! login, optionally renames the button, and supplies the OAuth client credentials.                                                     |
| Patreon                | `NEXT_PUBLIC_PATREON_ENABLED`<br />`PATREON_CUSTOM_NAME`<br />`PATREON_CLIENT_ID`<br />`PATREON_CLIENT_SECRET`                                                                  | Enables Patreon login, optionally renames the button, and supplies the OAuth client credentials.                                                  |
| Pinterest              | `NEXT_PUBLIC_PINTEREST_ENABLED`<br />`PINTEREST_CUSTOM_NAME`<br />`PINTEREST_CLIENT_ID`<br />`PINTEREST_CLIENT_SECRET`                                                          | Enables Pinterest login, optionally renames the button, and supplies the OAuth client credentials.                                                |
| Pipedrive              | `NEXT_PUBLIC_PIPEDRIVE_ENABLED`<br />`PIPEDRIVE_CUSTOM_NAME`<br />`PIPEDRIVE_CLIENT_ID`<br />`PIPEDRIVE_CLIENT_SECRET`                                                          | Enables Pipedrive login, optionally renames the button, and supplies the OAuth client credentials.                                                |
| Reddit                 | `NEXT_PUBLIC_REDDIT_ENABLED`<br />`REDDIT_CUSTOM_NAME`<br />`REDDIT_CLIENT_ID`<br />`REDDIT_CLIENT_SECRET`                                                                      | Enables Reddit login, optionally renames the button, and supplies the OAuth client credentials.                                                   |
| Salesforce             | `NEXT_PUBLIC_SALESFORCE_ENABLED`<br />`SALESFORCE_CUSTOM_NAME`<br />`SALESFORCE_CLIENT_ID`<br />`SALESFORCE_CLIENT_SECRET`                                                      | Enables Salesforce login, optionally renames the button, and supplies the OAuth client credentials.                                               |
| Slack                  | `NEXT_PUBLIC_SLACK_ENABLED`<br />`SLACK_CUSTOM_NAME`<br />`SLACK_CLIENT_ID`<br />`SLACK_CLIENT_SECRET`                                                                          | Enables Slack login, optionally renames the button, and supplies the OAuth client credentials.                                                    |
| Spotify                | `NEXT_PUBLIC_SPOTIFY_ENABLED`<br />`SPOTIFY_CUSTOM_NAME`<br />`SPOTIFY_CLIENT_ID`<br />`SPOTIFY_CLIENT_SECRET`                                                                  | Enables Spotify login, optionally renames the button, and supplies the OAuth client credentials.                                                  |
| Strava                 | `NEXT_PUBLIC_STRAVA_ENABLED`<br />`STRAVA_CUSTOM_NAME`<br />`STRAVA_CLIENT_ID`<br />`STRAVA_CLIENT_SECRET`                                                                      | Enables Strava login, optionally renames the button, and supplies the OAuth client credentials.                                                   |
| Synology               | `NEXT_PUBLIC_SYNOLOGY_ENABLED`<br />`SYNOLOGY_CUSTOM_NAME`<br />`SYNOLOGY_CLIENT_ID`<br />`SYNOLOGY_CLIENT_SECRET`<br />`SYNOLOGY_WELLKNOWN_URL`                                | Enables Synology login with an optional custom label, OAuth client credentials, and the Synology OIDC discovery URL.                              |
| Todoist                | `NEXT_PUBLIC_TODOIST_ENABLED`<br />`TODOIST_CUSTOM_NAME`<br />`TODOIST_CLIENT_ID`<br />`TODOIST_CLIENT_SECRET`                                                                  | Enables Todoist login, optionally renames the button, and supplies the OAuth client credentials.                                                  |
| Twitch                 | `NEXT_PUBLIC_TWITCH_ENABLED`<br />`TWITCH_CUSTOM_NAME`<br />`TWITCH_CLIENT_ID`<br />`TWITCH_CLIENT_SECRET`                                                                      | Enables Twitch login, optionally renames the button, and supplies the OAuth client credentials.                                                   |
| United Effects         | `NEXT_PUBLIC_UNITED_EFFECTS_ENABLED`<br />`UNITED_EFFECTS_CUSTOM_NAME`<br />`UNITED_EFFECTS_CLIENT_ID`<br />`UNITED_EFFECTS_CLIENT_SECRET`<br />`UNITED_EFFECTS_ISSUER`         | Enables United Effects login with an optional custom label, OAuth client credentials, and issuer URL.                                             |
| VK                     | `NEXT_PUBLIC_VK_ENABLED`<br />`VK_CUSTOM_NAME`<br />`VK_CLIENT_ID`<br />`VK_CLIENT_SECRET`                                                                                      | Enables VK login, optionally renames the button, and supplies the OAuth client credentials.                                                       |
| Wikimedia              | `NEXT_PUBLIC_WIKIMEDIA_ENABLED`<br />`WIKIMEDIA_CUSTOM_NAME`<br />`WIKIMEDIA_CLIENT_ID`<br />`WIKIMEDIA_CLIENT_SECRET`                                                          | Enables Wikimedia login, optionally renames the button, and supplies the OAuth client credentials.                                                |
| WordPress.com          | `NEXT_PUBLIC_WORDPRESS_ENABLED`<br />`WORDPRESS_CUSTOM_NAME`<br />`WORDPRESS_CLIENT_ID`<br />`WORDPRESS_CLIENT_SECRET`                                                          | Enables WordPress.com login, optionally renames the button, and supplies the OAuth client credentials.                                            |
| Yandex                 | `NEXT_PUBLIC_YANDEX_ENABLED`<br />`YANDEX_CUSTOM_NAME`<br />`YANDEX_CLIENT_ID`<br />`YANDEX_CLIENT_SECRET`                                                                      | Enables Yandex login, optionally renames the button, and supplies the OAuth client credentials.                                                   |
| ZITADEL                | `NEXT_PUBLIC_ZITADEL_ENABLED`<br />`ZITADEL_CUSTOM_NAME`<br />`ZITADEL_CLIENT_ID`<br />`ZITADEL_CLIENT_SECRET`<br />`ZITADEL_ISSUER`                                            | Enables ZITADEL login with an optional custom label, OAuth client credentials, and issuer URL.                                                    |
| Zoho                   | `NEXT_PUBLIC_ZOHO_ENABLED`<br />`ZOHO_CUSTOM_NAME`<br />`ZOHO_CLIENT_ID`<br />`ZOHO_CLIENT_SECRET`                                                                              | Enables Zoho login, optionally renames the button, and supplies the OAuth client credentials.                                                     |
| Zoom                   | `NEXT_PUBLIC_ZOOM_ENABLED`<br />`ZOOM_CUSTOM_NAME`<br />`ZOOM_CLIENT_ID`<br />`ZOOM_CLIENT_SECRET`                                                                              | Enables Zoom login, optionally renames the button, and supplies the OAuth client credentials.                                                     |
