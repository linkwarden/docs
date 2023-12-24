# Authentik

The variables you need to configure to enable support for Authentik (OIDC):

| Environment Variable         | Default | Description                                                                                        |
| ---------------------------- | ------- |----------------------------------------------------------------------------------------------------|
| NEXT_PUBLIC_AUTHENTIK_ENABLED | -       | If set to true, Authentik will be enabled and you'll need to define the variables below. |
| AUTHENTIK_CUSTOM_NAME         | -       | Optionally set a custom provider name.                                                             |
| AUTHENTIK_ISSUER              | -       | Issuer.                                                                                            |
| AUTHENTIK_CLIENT_ID           | -       | Client ID                                                                                          |
| AUTHENTIK_CLIENT_SECRET       | -       | Client Secret.                                                                                     |
