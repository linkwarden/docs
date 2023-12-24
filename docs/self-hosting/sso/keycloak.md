# Keycloak

The variables you need to configure to enable support for Keycloak (OIDC):

| Environment Variable         | Default | Description                                                                                        |
| ---------------------------- | ------- | -------------------------------------------------------------------------------------------------- |
| NEXT_PUBLIC_KEYCLOAK_ENABLED | -       | If set to true, Keycloak will be enabled and you'll need to define the variables below. |
| KEYCLOAK_CUSTOM_NAME         | -       | Optionally set a custom provider name.                                                             |
| KEYCLOAK_ISSUER              | -       | Issuer should include the realm – e.g. https://my-keycloak-domain.com/realms/My_Realm              |
| KEYCLOAK_CLIENT_ID           | -       | The Keycloak client-id - can be obtained from Keycloak.                                            |
| KEYCLOAK_CLIENT_SECRET       | -       | Can be obtained from Keycloak.                                                                     |
