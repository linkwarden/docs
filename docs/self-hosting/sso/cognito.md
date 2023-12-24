# Cognito

The variables you need to configure to enable support for Cognito (OIDC):

| Environment Variable         | Default | Description                                                                                        |
| ---------------------------- | ------- |----------------------------------------------------------------------------------------------------|
| NEXT_PUBLIC_COGNITO_ENABLED | -       | If set to true, Cognito will be enabled and you'll need to define the variables below. |
| COGNITO_CUSTOM_NAME         | -       | Optionally set a custom provider name.                                                             |
| COGNITO_ISSUER              | -       | Issuer.                                                                                            |
| COGNITO_CLIENT_ID           | -       | Client ID                                                                                          |
| COGNITO_CLIENT_SECRET       | -       | Client Secret.                                                                                     |
