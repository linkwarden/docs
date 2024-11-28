---
sidebar_position: 1
---

# Overview

We are working on improving the documentation and adding more details.

## Bruno Collection

We have a Bruno[^1] collection so developers can get a better understanding of the API. Find it [here](https://github.com/linkwarden/bruno-collection).

## API Endpoints

(Work in progress)

| Method               | Route                                   | Description                                                    |
| -------------------- | --------------------------------------- | -------------------------------------------------------------- |
| GET                  | /api/v1/archives/:id?FORMAT             | Get the archived file for a specific link                      |
| GET \| PUT \| Delete | /api/v1/users/:id                       | Get and manage a single user.                                  |
| POST                 | /api/v1/users                           | Post a user (Register).                                        |
| GET                  | /api/v1/tags                            | Get all tags for a user.                                       |
| PUT \| DELETE        | /api/v1/tags/:id                        | Delete or edit tags.                                           |
| GET                  | /api/v1/public/collections/:id          | Get public collection info.                                    |
| GET                  | /api/v1/public/collections/links?PARAMS | Get all links under a public collection based on query params. |
| GET                  | /api/v1/public/links/:id                | Get a single link under a public collection.                   |
| GET                  | /api/v1/public/users/:id                | Get public profile info.                                       |
| GET \| POST          | /api/v1/migration                       | Import or export data.                                         |
| GET \| POST          | /api/v1/links?PARAMS                    | Get all links under a collection based on query params.        |
| GET \| PUT \| DELETE | /api/v1/links/:id                       | Get and manage a single link.                                  |
| PUT                  | /api/v1/links/:id/archive               | Trigger an archive for a specific link.                        |
| GET                  | /api/v1/dashboard                       | Get Dashboard data.                                            |
| GET \| POST          | /api/v1/collections                     | Get/post collections for a specific user.                      |
| PUT \| DELETE        | /api/v1/collections/:id                 | Manage a single collection.                                    |
| GET                  | /api/v1/avatar/:id                      | Get profile photo.                                             |

[^1]: [Bruno](https://github.com/usebruno/bruno) is a lightweight, open-source alternative to Postman.
