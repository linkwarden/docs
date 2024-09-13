---
sidebar_position: 3
---

# SSO/OAuth Integrations

Here are all the SSO/OAuth integrations Linkwarden currently has.

:::warning

Other than the [Authentik](#authentik) and [Keycloak](#keycloak) integrations, most of the other integrations are **untested**. Please first backup your database, _just in case_.

To get support from the community, please visit our **[Discord server](https://discord.com/invite/CtuYV47nuJ)**.

:::

## 42 School

The variables you need to configure to enable support for 42 School (OIDC):

| Environment Variable         | Default | Description                                                                              |
| ---------------------------- | ------- | ---------------------------------------------------------------------------------------- |
| NEXT_PUBLIC_FORTYTWO_ENABLED | -       | If set to true, 42 School will be enabled and you'll need to define the variables below. |
| FORTYTWO_CUSTOM_NAME         | -       | Optionally set a custom provider name.                                                   |
| FORTYTWO_CLIENT_ID           | -       | Client ID                                                                                |
| FORTYTWO_CLIENT_SECRET       | -       | Client Secret.                                                                           |

## Apple

The variables you need to configure to enable support for Apple (OIDC):

| Environment Variable      | Default | Description                                                                          |
| ------------------------- | ------- | ------------------------------------------------------------------------------------ |
| NEXT_PUBLIC_APPLE_ENABLED | -       | If set to true, Apple will be enabled and you'll need to define the variables below. |
| APPLE_CUSTOM_NAME         | -       | Optionally set a custom provider name.                                               |
| APPLE_CLIENT_ID           | -       | Client ID                                                                            |
| APPLE_CLIENT_SECRET       | -       | Client Secret.                                                                       |

## Atlassian

The variables you need to configure to enable support for Atlassian (OIDC):

| Environment Variable          | Default | Description                                                                              |
| ----------------------------- | ------- | ---------------------------------------------------------------------------------------- |
| NEXT_PUBLIC_ATLASSIAN_ENABLED | -       | If set to true, Atlassian will be enabled and you'll need to define the variables below. |
| ATLASSIAN_CUSTOM_NAME         | -       | Optionally set a custom provider name.                                                   |
| ATLASSIAN_SCOPE               | -       | Optionally set a custom scope.                                                           |
| ATLASSIAN_CLIENT_ID           | -       | Client ID                                                                                |
| ATLASSIAN_CLIENT_SECRET       | -       | Client Secret.                                                                           |

## Auth0

The variables you need to configure to enable support for Auth0 (OIDC):

| Environment Variable      | Default | Description                                                                          |
| ------------------------- | ------- | ------------------------------------------------------------------------------------ |
| NEXT_PUBLIC_AUTH0_ENABLED | -       | If set to true, Auth0 will be enabled and you'll need to define the variables below. |
| AUTH0_CUSTOM_NAME         | -       | Optionally set a custom provider name.                                               |
| AUTH0_ISSUER              | -       | Issuer.                                                                              |
| AUTH0_CLIENT_ID           | -       | Client ID                                                                            |
| AUTH0_CLIENT_SECRET       | -       | Client Secret.                                                                       |

## Authelia

The variables you need to configure to enable support for Authelia (OIDC).

| Environment Variable          | Default | Description                                                                             |
| ----------------------------- | ------- | --------------------------------------------------------------------------------------- |
| NEXT_PUBLIC_AUTHELIA_ENABLED  | -       | If set to true, Authelia will be enabled and you'll need to define the variables below. |
| AUTHELIA_WELLKNOWN_URL        | -       | https://{{authelia.domain.com}}/.well-known/openid-configuration                          |
| AUTHELIA_CLIENT_ID            | -       | Client ID                                                                               |
| AUTHELIA_CLIENT_SECRET        | -       | Client Secret. (Random Password from command below)                                                                         |

Generate the client secret with 
```bash
docker exec -it authelia authelia crypto hash generate pbkdf2 --variant sha512 --random --random.length 72 --random.charset rfc3986
```
The `Random Password` should be used for the `AUTHELIA_CLIENT_SECRET` variable in linkwarden & the `Digest` should be used for `client_secret` in th Authelia config below.

Authelia config should be as follows:

```yaml
      - client_id: linkwarden
        client_name: Linkwarden
        client_secret: {{Digest from command above}}
        public: false
        authorization_policy: one_factor
        consent_mode: implicit
        scopes:
          - openid
          - groups
          - email
          - profile
        redirect_uris:
          - https://{{linkwarden.domain.com}}/api/v1/auth/callback/authelia
        userinfo_signed_response_alg: none
```

## Authentik

The variables you need to configure to enable support for Authentik (OIDC):

| Environment Variable          | Default | Description                                                                                                                                                                                                   |
| ----------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| NEXT_PUBLIC_AUTHENTIK_ENABLED | -       | If set to true, Authentik will be enabled and you'll need to define the variables below.                                                                                                                      |
| AUTHENTIK_CUSTOM_NAME         | -       | Optionally set a custom provider name.                                                                                                                                                                        |
| AUTHENTIK_ISSUER              | -       | This is the "OpenID Configuration Issuer" shown in the Provider Overview. Note that you must delete the "/" at the end of the URL. Should look like: `https://authentik.my-doma.in/application/o/linkwarden`  |
| AUTHENTIK_CLIENT_ID           | -       | Client ID copied from the Provider Overview screen in Authentik                                                                                                                                               |
| AUTHENTIK_CLIENT_SECRET       | -       | Client Secret copied from the Provider Overview screen in Authentik                                                                                                                                           |

Administrators are required to also set the environment variable `NEXTAUTH_URL=https://linkwarden.my-doma.in/api/v1/auth` (during the linkwarden install process or docker ENV variables) and ensure a JWT signing key is selected in Authentik's Providers settings (this can be the default self-signed authentik certificate). Note that the Authentik Provider "Redirect URIs" section can be left blank, it will autofill with a URL after the first time it is used. The URL will look like: `https://linkwarden.my-doma.in/api/v1/auth/callback/authentik`

Authentik Setup Example:

Create a Provider on Authentik with the following settings:

<img src="/img/authentik-setup/authentik-provider.png" alt="Authentik Provider Settings" width="500" />

Create an Application with the following settings:

<img src="/img/authentik-setup/authentik-application.png" alt="Authentik Application Settings" width="500" />

Finally, Assign users or groups of users to the application so they have access (Select the linkwarden application in Authentik, select the "Policy/Group/User Bindings" tab, then `Bind existing Policy` -> `Group` or `users` -> select either a group or a user):

<img src="/img/authentik-setup/authentik-user-access.png" alt="Authentik User Access Settings" width="500" />

## Battle.net

The variables you need to configure to enable support for Battle.net (OIDC):

| Environment Variable          | Default | Description                                                                               |
| ----------------------------- | ------- | ----------------------------------------------------------------------------------------- |
| NEXT_PUBLIC_BATTLENET_ENABLED | -       | If set to true, Battle.net will be enabled and you'll need to define the variables below. |
| BATTLENET_CUSTOM_NAME         | -       | Optionally set a custom provider name.                                                    |
| BATTLENET_ISSUER              | -       | Issuer.                                                                                   |
| BATTLENET_CLIENT_ID           | -       | Client ID                                                                                 |
| BATTLENET_CLIENT_SECRET       | -       | Client Secret.                                                                            |

## Box

The variables you need to configure to enable support for Box (OIDC):

| Environment Variable    | Default | Description                                                                        |
| ----------------------- | ------- | ---------------------------------------------------------------------------------- |
| NEXT_PUBLIC_BOX_ENABLED | -       | If set to true, Box will be enabled and you'll need to define the variables below. |
| BOX_CUSTOM_NAME         | -       | Optionally set a custom provider name.                                             |
| BOX_ISSUER              | -       | Issuer.                                                                            |
| BOX_CLIENT_ID           | -       | Client ID                                                                          |
| BOX_CLIENT_SECRET       | -       | Client Secret.                                                                     |

## Bungie

The variables you need to configure to enable support for Bungie (OIDC):

| Environment Variable       | Default | Description                                                                           |
| -------------------------- | ------- | ------------------------------------------------------------------------------------- |
| NEXT_PUBLIC_BUNGIE_ENABLED | -       | If set to true, Bungie will be enabled and you'll need to define the variables below. |
| BUNGIE_CUSTOM_NAME         | -       | Optionally set a custom provider name.                                                |
| BUNGIE_API_KEY             | -       | API Key.                                                                              |
| BUNGIE_CLIENT_ID           | -       | Client ID                                                                             |
| BUNGIE_CLIENT_SECRET       | -       | Client Secret.                                                                        |

## Cognito

The variables you need to configure to enable support for Cognito (OIDC):

| Environment Variable        | Default | Description                                                                            |
| --------------------------- | ------- | -------------------------------------------------------------------------------------- |
| NEXT_PUBLIC_COGNITO_ENABLED | -       | If set to true, Cognito will be enabled and you'll need to define the variables below. |
| COGNITO_CUSTOM_NAME         | -       | Optionally set a custom provider name.                                                 |
| COGNITO_ISSUER              | -       | Issuer.                                                                                |
| COGNITO_CLIENT_ID           | -       | Client ID                                                                              |
| COGNITO_CLIENT_SECRET       | -       | Client Secret.                                                                         |

## Coinbase

The variables you need to configure to enable support for Coinbase (OIDC):

| Environment Variable         | Default | Description                                                                             |
| ---------------------------- | ------- | --------------------------------------------------------------------------------------- |
| NEXT_PUBLIC_COINBASE_ENABLED | -       | If set to true, Coinbase will be enabled and you'll need to define the variables below. |
| COINBASE_CUSTOM_NAME         | -       | Optionally set a custom provider name.                                                  |
| COINBASE_CLIENT_ID           | -       | Client ID                                                                               |
| COINBASE_CLIENT_SECRET       | -       | Client Secret.                                                                          |

## Discord

The variables you need to configure to enable support for Discord (OIDC):

| Environment Variable        | Default | Description                                                                            |
| --------------------------- | ------- | -------------------------------------------------------------------------------------- |
| NEXT_PUBLIC_DISCORD_ENABLED | -       | If set to true, Discord will be enabled and you'll need to define the variables below. |
| DISCORD_CUSTOM_NAME         | -       | Optionally set a custom provider name.                                                 |
| DISCORD_CLIENT_ID           | -       | Client ID                                                                              |
| DISCORD_CLIENT_SECRET       | -       | Client Secret.                                                                         |

## Dropbox

The variables you need to configure to enable support for Dropbox (OIDC):

| Environment Variable        | Default | Description                                                                            |
| --------------------------- | ------- | -------------------------------------------------------------------------------------- |
| NEXT_PUBLIC_DROPBOX_ENABLED | -       | If set to true, Dropbox will be enabled and you'll need to define the variables below. |
| DROPBOX_CUSTOM_NAME         | -       | Optionally set a custom provider name.                                                 |
| DROPBOX_CLIENT_ID           | -       | Client ID                                                                              |
| DROPBOX_CLIENT_SECRET       | -       | Client Secret.                                                                         |

## Duende Identity Server 6

The variables you need to configure to enable support for Duende Identity Server 6 (OIDC):

| Environment Variable            | Default | Description                                                                                             |
| ------------------------------- | ------- | ------------------------------------------------------------------------------------------------------- |
| NEXT_PUBLIC_DUENDE_IDS6_ENABLED | -       | If set to true, Duende Identity Server 6 will be enabled and you'll need to define the variables below. |
| DUENDE_IDS6_CUSTOM_NAME         | -       | Optionally set a custom provider name.                                                                  |
| DUENDE_IDS6_ISSUER              | -       | Issuer.                                                                                                 |
| DUENDE_IDS6_CLIENT_ID           | -       | Client ID                                                                                               |
| DUENDE_IDS6_CLIENT_SECRET       | -       | Client Secret.                                                                                          |

## EVE Online

The variables you need to configure to enable support for EVE Online (OIDC):

| Environment Variable          | Default | Description                                                                               |
| ----------------------------- | ------- | ----------------------------------------------------------------------------------------- |
| NEXT_PUBLIC_EVEONLINE_ENABLED | -       | If set to true, EVE Online will be enabled and you'll need to define the variables below. |
| EVEONLINE_CUSTOM_NAME         | -       | Optionally set a custom provider name.                                                    |
| EVEONLINE_CLIENT_ID           | -       | Client ID                                                                                 |
| EVEONLINE_CLIENT_SECRET       | -       | Client Secret.                                                                            |

## Facebook

The variables you need to configure to enable support for Facebook (OIDC):

| Environment Variable         | Default | Description                                                                             |
| ---------------------------- | ------- | --------------------------------------------------------------------------------------- |
| NEXT_PUBLIC_FACEBOOK_ENABLED | -       | If set to true, Facebook will be enabled and you'll need to define the variables below. |
| FACEBOOK_CUSTOM_NAME         | -       | Optionally set a custom provider name.                                                  |
| FACEBOOK_CLIENT_ID           | -       | Client ID                                                                               |
| FACEBOOK_CLIENT_SECRET       | -       | Client Secret.                                                                          |

## FACEIT

The variables you need to configure to enable support for FACEIT (OIDC):

| Environment Variable       | Default | Description                                                                           |
| -------------------------- | ------- | ------------------------------------------------------------------------------------- |
| NEXT_PUBLIC_FACEIT_ENABLED | -       | If set to true, FACEIT will be enabled and you'll need to define the variables below. |
| FACEIT_CUSTOM_NAME         | -       | Optionally set a custom provider name.                                                |
| FACEIT_CLIENT_ID           | -       | Client ID                                                                             |
| FACEIT_CLIENT_SECRET       | -       | Client Secret.                                                                        |

## Foursquare

The variables you need to configure to enable support for Foursquare (OIDC):

| Environment Variable           | Default | Description                                                                               |
| ------------------------------ | ------- | ----------------------------------------------------------------------------------------- |
| NEXT_PUBLIC_FOURSQUARE_ENABLED | -       | If set to true, Foursquare will be enabled and you'll need to define the variables below. |
| FOURSQUARE_CUSTOM_NAME         | -       | Optionally set a custom provider name.                                                    |
| FOURSQUARE_APIVERSION          | -       | API Version.                                                                              |
| FOURSQUARE_CLIENT_ID           | -       | Client ID                                                                                 |
| FOURSQUARE_CLIENT_SECRET       | -       | Client Secret.                                                                            |

## Freshbooks

The variables you need to configure to enable support for Freshbooks (OIDC):

| Environment Variable           | Default | Description                                                                               |
| ------------------------------ | ------- | ----------------------------------------------------------------------------------------- |
| NEXT_PUBLIC_FRESHBOOKS_ENABLED | -       | If set to true, Freshbooks will be enabled and you'll need to define the variables below. |
| FRESHBOOKS_CUSTOM_NAME         | -       | Optionally set a custom provider name.                                                    |
| FRESHBOOKS_CLIENT_ID           | -       | Client ID                                                                                 |
| FRESHBOOKS_CLIENT_SECRET       | -       | Client Secret.                                                                            |

## Fusionauth

The variables you need to configure to enable support for Fusionauth (OIDC):

| Environment Variable           | Default | Description                                                                               |
| ------------------------------ | ------- | ----------------------------------------------------------------------------------------- |
| NEXT_PUBLIC_FUSIONAUTH_ENABLED | -       | If set to true, Fusionauth will be enabled and you'll need to define the variables below. |
| FUSIONAUTH_CUSTOM_NAME         | -       | Optionally set a custom provider name.                                                    |
| FUSIONAUTH_ISSUER              | -       | Issuer.                                                                                   |
| FUSIONAUTH_CLIENT_ID           | -       | Client ID                                                                                 |
| FUSIONAUTH_CLIENT_SECRET       | -       | Client Secret.                                                                            |
| FUSIONAUTH_TENANT_ID           | -       | Tenant ID.                                                                                |

## Github

The variables you need to configure to enable support for Github (OIDC):

| Environment Variable       | Default | Description                                                                           |
| -------------------------- | ------- | ------------------------------------------------------------------------------------- |
| NEXT_PUBLIC_GITHUB_ENABLED | -       | If set to true, Github will be enabled and you'll need to define the variables below. |
| GITHUB_CUSTOM_NAME         | -       | Optionally set a custom provider name.                                                |
| GITHUB_CLIENT_ID           | -       | Client ID                                                                             |
| GITHUB_CLIENT_SECRET       | -       | Client Secret.                                                                        |

## Gitlab

The variables you need to configure to enable support for Gitlab (OIDC):

| Environment Variable       | Default | Description                                                                           |
| -------------------------- | ------- | ------------------------------------------------------------------------------------- |
| NEXT_PUBLIC_GITLAB_ENABLED | -       | If set to true, Gitlab will be enabled and you'll need to define the variables below. |
| GITLAB_CUSTOM_NAME         | -       | Optionally set a custom provider name.                                                |
| GITLAB_CLIENT_ID           | -       | Client ID                                                                             |
| GITLAB_CLIENT_SECRET       | -       | Client Secret.                                                                        |

## Google

The variables you need to configure to enable support for Google (OIDC):

| Environment Variable       | Default | Description                                                                           |
| -------------------------- | ------- | ------------------------------------------------------------------------------------- |
| NEXT_PUBLIC_GOOGLE_ENABLED | -       | If set to true, Google will be enabled and you'll need to define the variables below. |
| GOOGLE_CUSTOM_NAME         | -       | Optionally set a custom provider name.                                                |
| GOOGLE_CLIENT_ID           | -       | Client ID                                                                             |
| GOOGLE_CLIENT_SECRET       | -       | Client Secret.                                                                        |

## Hubspot

The variables you need to configure to enable support for Hubspot (OIDC):

| Environment Variable        | Default | Description                                                                            |
| --------------------------- | ------- | -------------------------------------------------------------------------------------- |
| NEXT_PUBLIC_HUBSPOT_ENABLED | -       | If set to true, Hubspot will be enabled and you'll need to define the variables below. |
| HUBSPOT_CUSTOM_NAME         | -       | Optionally set a custom provider name.                                                 |
| HUBSPOT_CLIENT_ID           | -       | Client ID                                                                              |
| HUBSPOT_CLIENT_SECRET       | -       | Client Secret.                                                                         |

## IdentityServer4

The variables you need to configure to enable support for IdentityServer4 (OIDC):

| Environment Variable     | Default | Description                                                                                    |
| ------------------------ | ------- | ---------------------------------------------------------------------------------------------- |
| NEXT_PUBLIC_IDS4_ENABLED | -       | If set to true, IdentityServer4 will be enabled and you'll need to define the variables below. |
| IDS4_CUSTOM_NAME         | -       | Optionally set a custom provider name.                                                         |
| IDS4_ISSUER              | -       | Issuer.                                                                                        |
| IDS4_CLIENT_ID           | -       | Client ID                                                                                      |
| IDS4_CLIENT_SECRET       | -       | Client Secret.                                                                                 |

## Kakao

The variables you need to configure to enable support for Kakao (OIDC):

| Environment Variable      | Default | Description                                                                          |
| ------------------------- | ------- | ------------------------------------------------------------------------------------ |
| NEXT_PUBLIC_KAKAO_ENABLED | -       | If set to true, Kakao will be enabled and you'll need to define the variables below. |
| KAKAO_CUSTOM_NAME         | -       | Optionally set a custom provider name.                                               |
| KAKAO_CLIENT_ID           | -       | Client ID                                                                            |
| KAKAO_CLIENT_SECRET       | -       | Client Secret.                                                                       |

## Keycloak

The variables you need to configure to enable support for Keycloak (OIDC):

| Environment Variable         | Default | Description                                                                             |
| ---------------------------- | ------- | --------------------------------------------------------------------------------------- |
| NEXT_PUBLIC_KEYCLOAK_ENABLED | -       | If set to true, Keycloak will be enabled and you'll need to define the variables below. |
| KEYCLOAK_CUSTOM_NAME         | -       | Optionally set a custom provider name.                                                  |
| KEYCLOAK_ISSUER              | -       | Issuer should include the realm – e.g. https://my-keycloak-domain.com/realms/My_Realm   |
| KEYCLOAK_CLIENT_ID           | -       | The Keycloak client-id - can be obtained from Keycloak.                                 |
| KEYCLOAK_CLIENT_SECRET       | -       | Can be obtained from Keycloak.                                                          |

## Line

The variables you need to configure to enable support for Line (OIDC):

| Environment Variable     | Default | Description                                                                         |
| ------------------------ | ------- | ----------------------------------------------------------------------------------- |
| NEXT_PUBLIC_LINE_ENABLED | -       | If set to true, Line will be enabled and you'll need to define the variables below. |
| LINE_CUSTOM_NAME         | -       | Optionally set a custom provider name.                                              |
| LINE_CLIENT_ID           | -       | Client ID                                                                           |
| LINE_CLIENT_SECRET       | -       | Client Secret.                                                                      |

## Linkedin

The variables you need to configure to enable support for Linkedin (OIDC):

| Environment Variable         | Default | Description                                                                             |
| ---------------------------- | ------- | --------------------------------------------------------------------------------------- |
| NEXT_PUBLIC_LINKEDIN_ENABLED | -       | If set to true, Linkedin will be enabled and you'll need to define the variables below. |
| LINKEDIN_CUSTOM_NAME         | -       | Optionally set a custom provider name.                                                  |
| LINKEDIN_CLIENT_ID           | -       | Client ID                                                                               |
| LINKEDIN_CLIENT_SECRET       | -       | Client Secret.                                                                          |

## Mailchimp

The variables you need to configure to enable support for Mailchimp (OIDC):

| Environment Variable          | Default | Description                                                                              |
| ----------------------------- | ------- | ---------------------------------------------------------------------------------------- |
| NEXT_PUBLIC_MAILCHIMP_ENABLED | -       | If set to true, Mailchimp will be enabled and you'll need to define the variables below. |
| MAILCHIMP_CUSTOM_NAME         | -       | Optionally set a custom provider name.                                                   |
| MAILCHIMP_CLIENT_ID           | -       | Client ID                                                                                |
| MAILCHIMP_CLIENT_SECRET       | -       | Client Secret.                                                                           |

## Mailru

The variables you need to configure to enable support for Mailru (OIDC):

| Environment Variable       | Default | Description                                                                           |
| -------------------------- | ------- | ------------------------------------------------------------------------------------- |
| NEXT_PUBLIC_MAILRU_ENABLED | -       | If set to true, Mailru will be enabled and you'll need to define the variables below. |
| MAILRU_CUSTOM_NAME         | -       | Optionally set a custom provider name.                                                |
| MAILRU_CLIENT_ID           | -       | Client ID                                                                             |
| MAILRU_CLIENT_SECRET       | -       | Client Secret.                                                                        |

## Naver

The variables you need to configure to enable support for Naver (OIDC):

| Environment Variable      | Default | Description                                                                          |
| ------------------------- | ------- | ------------------------------------------------------------------------------------ |
| NEXT_PUBLIC_NAVER_ENABLED | -       | If set to true, Naver will be enabled and you'll need to define the variables below. |
| NAVER_CUSTOM_NAME         | -       | Optionally set a custom provider name.                                               |
| NAVER_CLIENT_ID           | -       | Client ID                                                                            |
| NAVER_CLIENT_SECRET       | -       | Client Secret.                                                                       |

## Netlify

The variables you need to configure to enable support for Netlify (OIDC):

| Environment Variable        | Default | Description                                                                            |
| --------------------------- | ------- | -------------------------------------------------------------------------------------- |
| NEXT_PUBLIC_NETLIFY_ENABLED | -       | If set to true, Netlify will be enabled and you'll need to define the variables below. |
| NETLIFY_CUSTOM_NAME         | -       | Optionally set a custom provider name.                                                 |
| NETLIFY_CLIENT_ID           | -       | Client ID                                                                              |
| NETLIFY_CLIENT_SECRET       | -       | Client Secret.                                                                         |

## Okta

The variables you need to configure to enable support for Okta (OIDC):

| Environment Variable     | Default | Description                                                                         |
| ------------------------ | ------- | ----------------------------------------------------------------------------------- |
| NEXT_PUBLIC_OKTA_ENABLED | -       | If set to true, Okta will be enabled and you'll need to define the variables below. |
| OKTA_CUSTOM_NAME         | -       | Optionally set a custom provider name.                                              |
| OKTA_ISSUER              | -       | Issuer.                                                                             |
| OKTA_CLIENT_ID           | -       | Client ID                                                                           |
| OKTA_CLIENT_SECRET       | -       | Client Secret.                                                                      |

## Onelogin

The variables you need to configure to enable support for Onelogin (OIDC):

| Environment Variable         | Default | Description                                                                             |
| ---------------------------- | ------- | --------------------------------------------------------------------------------------- |
| NEXT_PUBLIC_ONELOGIN_ENABLED | -       | If set to true, Onelogin will be enabled and you'll need to define the variables below. |
| ONELOGIN_CUSTOM_NAME         | -       | Optionally set a custom provider name.                                                  |
| ONELOGIN_ISSUER              | -       | Issuer.                                                                                 |
| ONELOGIN_CLIENT_ID           | -       | Client ID                                                                               |
| ONELOGIN_CLIENT_SECRET       | -       | Client Secret.                                                                          |

## Osso

The variables you need to configure to enable support for Osso (OIDC):

| Environment Variable     | Default | Description                                                                         |
| ------------------------ | ------- | ----------------------------------------------------------------------------------- |
| NEXT_PUBLIC_OSSO_ENABLED | -       | If set to true, Osso will be enabled and you'll need to define the variables below. |
| OSSO_CUSTOM_NAME         | -       | Optionally set a custom provider name.                                              |
| OSSO_ISSUER              | -       | Issuer.                                                                             |
| OSSO_CLIENT_ID           | -       | Client ID                                                                           |
| OSSO_CLIENT_SECRET       | -       | Client Secret.                                                                      |

## osu!

The variables you need to configure to enable support for osu! (OIDC):

| Environment Variable    | Default | Description                                                                         |
| ----------------------- | ------- | ----------------------------------------------------------------------------------- |
| NEXT_PUBLIC_OSU_ENABLED | -       | If set to true, osu! will be enabled and you'll need to define the variables below. |
| OSU_CUSTOM_NAME         | -       | Optionally set a custom provider name.                                              |
| OSU_CLIENT_ID           | -       | Client ID                                                                           |
| OSU_CLIENT_SECRET       | -       | Client Secret.                                                                      |

## Patreon

The variables you need to configure to enable support for Patreon (OIDC):

| Environment Variable        | Default | Description                                                                            |
| --------------------------- | ------- | -------------------------------------------------------------------------------------- |
| NEXT_PUBLIC_PATREON_ENABLED | -       | If set to true, Patreon will be enabled and you'll need to define the variables below. |
| PATREON_CUSTOM_NAME         | -       | Optionally set a custom provider name.                                                 |
| PATREON_CLIENT_ID           | -       | Client ID                                                                              |
| PATREON_CLIENT_SECRET       | -       | Client Secret.                                                                         |

## Pinterest

The variables you need to configure to enable support for Pinterest (OIDC):

| Environment Variable          | Default | Description                                                                              |
| ----------------------------- | ------- | ---------------------------------------------------------------------------------------- |
| NEXT_PUBLIC_PINTEREST_ENABLED | -       | If set to true, Pinterest will be enabled and you'll need to define the variables below. |
| PINTEREST_CUSTOM_NAME         | -       | Optionally set a custom provider name.                                                   |
| PINTEREST_CLIENT_ID           | -       | Client ID                                                                                |
| PINTEREST_CLIENT_SECRET       | -       | Client Secret.                                                                           |

## Pipedrive

The variables you need to configure to enable support for Pipedrive (OIDC):

| Environment Variable          | Default | Description                                                                              |
| ----------------------------- | ------- | ---------------------------------------------------------------------------------------- |
| NEXT_PUBLIC_PIPEDRIVE_ENABLED | -       | If set to true, Pipedrive will be enabled and you'll need to define the variables below. |
| PIPEDRIVE_CUSTOM_NAME         | -       | Optionally set a custom provider name.                                                   |
| PIPEDRIVE_CLIENT_ID           | -       | Client ID                                                                                |
| PIPEDRIVE_CLIENT_SECRET       | -       | Client Secret.                                                                           |

## Reddit

The variables you need to configure to enable support for Reddit (OIDC):

| Environment Variable       | Default | Description                                                                           |
| -------------------------- | ------- | ------------------------------------------------------------------------------------- |
| NEXT_PUBLIC_REDDIT_ENABLED | -       | If set to true, Reddit will be enabled and you'll need to define the variables below. |
| REDDIT_CUSTOM_NAME         | -       | Optionally set a custom provider name.                                                |
| REDDIT_CLIENT_ID           | -       | Client ID                                                                             |
| REDDIT_CLIENT_SECRET       | -       | Client Secret.                                                                        |

## Salesforce

The variables you need to configure to enable support for Salesforce (OIDC):

| Environment Variable           | Default | Description                                                                               |
| ------------------------------ | ------- | ----------------------------------------------------------------------------------------- |
| NEXT_PUBLIC_SALESFORCE_ENABLED | -       | If set to true, Salesforce will be enabled and you'll need to define the variables below. |
| SALESFORCE_CUSTOM_NAME         | -       | Optionally set a custom provider name.                                                    |
| SALESFORCE_CLIENT_ID           | -       | Client ID                                                                                 |
| SALESFORCE_CLIENT_SECRET       | -       | Client Secret.                                                                            |

## Slack

The variables you need to configure to enable support for Slack (OIDC):

| Environment Variable      | Default | Description                                                                          |
| ------------------------- | ------- | ------------------------------------------------------------------------------------ |
| NEXT_PUBLIC_SLACK_ENABLED | -       | If set to true, Slack will be enabled and you'll need to define the variables below. |
| SLACK_CUSTOM_NAME         | -       | Optionally set a custom provider name.                                               |
| SLACK_CLIENT_ID           | -       | Client ID                                                                            |
| SLACK_CLIENT_SECRET       | -       | Client Secret.                                                                       |

## Spotify

The variables you need to configure to enable support for Spotify (OIDC):

| Environment Variable        | Default | Description                                                                            |
| --------------------------- | ------- | -------------------------------------------------------------------------------------- |
| NEXT_PUBLIC_SPOTIFY_ENABLED | -       | If set to true, Spotify will be enabled and you'll need to define the variables below. |
| SPOTIFY_CUSTOM_NAME         | -       | Optionally set a custom provider name.                                                 |
| SPOTIFY_CLIENT_ID           | -       | Client ID                                                                              |
| SPOTIFY_CLIENT_SECRET       | -       | Client Secret.                                                                         |

## Strava

The variables you need to configure to enable support for Strava (OIDC):

| Environment Variable       | Default | Description                                                                           |
| -------------------------- | ------- | ------------------------------------------------------------------------------------- |
| NEXT_PUBLIC_STRAVA_ENABLED | -       | If set to true, Strava will be enabled and you'll need to define the variables below. |
| STRAVA_CUSTOM_NAME         | -       | Optionally set a custom provider name.                                                |
| STRAVA_CLIENT_ID           | -       | Client ID                                                                             |
| STRAVA_CLIENT_SECRET       | -       | Client Secret.                                                                        |

## Todoist

The variables you need to configure to enable support for Todoist (OIDC):

| Environment Variable        | Default | Description                                                                            |
| --------------------------- | ------- | -------------------------------------------------------------------------------------- |
| NEXT_PUBLIC_TODOIST_ENABLED | -       | If set to true, Todoist will be enabled and you'll need to define the variables below. |
| TODOIST_CUSTOM_NAME         | -       | Optionally set a custom provider name.                                                 |
| TODOIST_CLIENT_ID           | -       | Client ID                                                                              |
| TODOIST_CLIENT_SECRET       | -       | Client Secret.                                                                         |

## Twitch

The variables you need to configure to enable support for Twitch (OIDC):

| Environment Variable       | Default | Description                                                                           |
| -------------------------- | ------- | ------------------------------------------------------------------------------------- |
| NEXT_PUBLIC_TWITCH_ENABLED | -       | If set to true, Twitch will be enabled and you'll need to define the variables below. |
| TWITCH_CUSTOM_NAME         | -       | Optionally set a custom provider name.                                                |
| TWITCH_CLIENT_ID           | -       | Client ID                                                                             |
| TWITCH_CLIENT_SECRET       | -       | Client Secret.                                                                        |

## United Effects

The variables you need to configure to enable support for United Effects (OIDC):

| Environment Variable               | Default | Description                                                                                   |
| ---------------------------------- | ------- | --------------------------------------------------------------------------------------------- |
| NEXT_PUBLIC_UNITED_EFFECTS_ENABLED | -       | If set to true, United Effects will be enabled and you'll need to define the variables below. |
| UNITED_EFFECTS_CUSTOM_NAME         | -       | Optionally set a custom provider name.                                                        |
| UNITED_EFFECTS_ISSUER              | -       | Issuer.                                                                                       |
| UNITED_EFFECTS_CLIENT_ID           | -       | Client ID                                                                                     |
| UNITED_EFFECTS_CLIENT_SECRET       | -       | Client Secret.                                                                                |

## VK

The variables you need to configure to enable support for VK (OIDC):

| Environment Variable   | Default | Description                                                                       |
| ---------------------- | ------- | --------------------------------------------------------------------------------- |
| NEXT_PUBLIC_VK_ENABLED | -       | If set to true, VK will be enabled and you'll need to define the variables below. |
| VK_CUSTOM_NAME         | -       | Optionally set a custom provider name.                                            |
| VK_CLIENT_ID           | -       | Client ID                                                                         |
| VK_CLIENT_SECRET       | -       | Client Secret.                                                                    |

## Wikimedia

The variables you need to configure to enable support for Wikimedia (OIDC):

| Environment Variable          | Default | Description                                                                              |
| ----------------------------- | ------- | ---------------------------------------------------------------------------------------- |
| NEXT_PUBLIC_WIKIMEDIA_ENABLED | -       | If set to true, Wikimedia will be enabled and you'll need to define the variables below. |
| WIKIMEDIA_CUSTOM_NAME         | -       | Optionally set a custom provider name.                                                   |
| WIKIMEDIA_CLIENT_ID           | -       | Client ID                                                                                |
| WIKIMEDIA_CLIENT_SECRET       | -       | Client Secret.                                                                           |

## Wordpress.com

The variables you need to configure to enable support for Wordpress.com (OIDC):

| Environment Variable          | Default | Description                                                                                  |
| ----------------------------- | ------- | -------------------------------------------------------------------------------------------- |
| NEXT_PUBLIC_WORDPRESS_ENABLED | -       | If set to true, Wordpress.com will be enabled and you'll need to define the variables below. |
| WORDPRESS_CUSTOM_NAME         | -       | Optionally set a custom provider name.                                                       |
| WORDPRESS_CLIENT_ID           | -       | Client ID                                                                                    |
| WORDPRESS_CLIENT_SECRET       | -       | Client Secret.                                                                               |

## Yandex

The variables you need to configure to enable support for Yandex (OIDC):

| Environment Variable       | Default | Description                                                                           |
| -------------------------- | ------- | ------------------------------------------------------------------------------------- |
| NEXT_PUBLIC_YANDEX_ENABLED | -       | If set to true, Yandex will be enabled and you'll need to define the variables below. |
| YANDEX_CUSTOM_NAME         | -       | Optionally set a custom provider name.                                                |
| YANDEX_CLIENT_ID           | -       | Client ID                                                                             |
| YANDEX_CLIENT_SECRET       | -       | Client Secret.                                                                        |

## Zitadel

The variables you need to configure to enable support for Zitadel (OIDC):

| Environment Variable        | Default | Description                                                                            |
| --------------------------- | ------- | -------------------------------------------------------------------------------------- |
| NEXT_PUBLIC_ZITADEL_ENABLED | -       | If set to true, Zitadel will be enabled and you'll need to define the variables below. |
| ZITADEL_CUSTOM_NAME         | -       | Optionally set a custom provider name.                                                 |
| ZITADEL_ISSUER              | -       | Issuer.                                                                                |
| ZITADEL_CLIENT_ID           | -       | Client ID                                                                              |
| ZITADEL_CLIENT_SECRET       | -       | Client Secret.                                                                         |

## Zoho

The variables you need to configure to enable support for Zoho (OIDC):

| Environment Variable     | Default | Description                                                                         |
| ------------------------ | ------- | ----------------------------------------------------------------------------------- |
| NEXT_PUBLIC_ZOHO_ENABLED | -       | If set to true, Zoho will be enabled and you'll need to define the variables below. |
| ZOHO_CUSTOM_NAME         | -       | Optionally set a custom provider name.                                              |
| ZOHO_CLIENT_ID           | -       | Client ID                                                                           |
| ZOHO_CLIENT_SECRET       | -       | Client Secret.                                                                      |

## Zoom

The variables you need to configure to enable support for Zoom (OIDC):

| Environment Variable     | Default | Description                                                                         |
| ------------------------ | ------- | ----------------------------------------------------------------------------------- |
| NEXT_PUBLIC_ZOOM_ENABLED | -       | If set to true, Zoom will be enabled and you'll need to define the variables below. |
| ZOOM_CUSTOM_NAME         | -       | Optionally set a custom provider name.                                              |
| ZOOM_CLIENT_ID           | -       | Client ID                                                                           |
| ZOOM_CLIENT_SECRET       | -       | Client Secret.                                                                      |
