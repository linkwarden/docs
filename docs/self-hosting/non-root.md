---
sidebar_position: 7
---

# Running as a Non-Root User

By default, the processes inside the Linkwarden containers run as root. This guide shows how to run all services as a regular user instead, so that a compromised container has limited permissions and the files in your data folders are owned by your own user instead of root.

It assumes:

- you are using the Docker Compose setup from the [Setup](/self-hosting/setup) guide
- your user has permission to run Docker commands

## How It Works

Linux identifies users by number: a user id (UID) and a group id (GID). The `user` option in Docker Compose starts a container's processes with the given numbers instead of the image's default, which is root. The only requirement is that the mounted folders (`data`, `pgdata`, and `meili_data`) are owned by the same numbers, because the kernel grants file access by comparing them.

`1000` is the UID of the first regular user created on most Linux systems. Run `id -u` and `id -g` to see your own numbers, and use those everywhere below if they differ.

## New Installations

Follow the [Setup](/self-hosting/setup) guide, but before running `docker compose up` for the first time, create the data folders yourself:

```bash
mkdir -p data pgdata meili_data
```

These folders are simply the host side of the volumes defined in `docker-compose.yml`. If there are additional volumes defined, include their folders in the same command.

So the list to create always mirrors your compose file. If a future version of it (or a service you add yourself) mounts more folders, create those the same way before starting the stack.

The order matters. If Docker Compose runs first, Docker creates these folders owned by root and the containers won't be able to write to them.

Then add a `user: "1000:1000"` line to every service in `docker-compose.yml`. Example:

```yaml
services:
  linkwarden:
    image: ghcr.io/linkwarden/linkwarden:latest
    user: "1000:1000"
    # ...rest of the service stays unchanged
```

```yaml
postgres:
  image: postgres:16-alpine
  user: "1000:1000"
  # ...
```

```yaml
meilisearch:
  image: getmeili/meilisearch:v1.12.8
  user: "1000:1000"
  # ...
```

If you run additional services in the same file, give each of them the same `user` line, and make sure any folder they mount is owned by the same numbers.

Start the stack as usual with `docker compose up -d`.

## Existing Installations

An existing install has data folders owned by root, created by the containers themselves. Hand them to your user once, then add the same `user` lines as above:

```bash
docker compose down
sudo chown -R 1000:1000 data pgdata meili_data
docker compose up -d
```

The folders to `chown` are simply the host side of the volumes in your `docker-compose.yml`. If there are additional volumes defined, include their folders in the same command.

## Verify That It Works

Check the user the container runs as:

```bash
docker compose exec linkwarden id
```

This should print `uid=1000` rather than `uid=0(root)`. Then add a link in the app and confirm that its preserved formats (screenshot, PDF, readable) are generated. The files should show up in `./data/archives/` owned by your user:

```bash
ls -l data/archives/
```
