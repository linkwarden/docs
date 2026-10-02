---
sidebar_label: How to Upgrade
sidebar_position: 1
---

# Upgrading Linkwarden

Upgrading a self-hosted instance means pulling the new version and restarting. Database migrations run on their own when the app starts, so there's usually nothing else to do.

Releases and their changelogs are listed on the [releases page](https://github.com/linkwarden/linkwarden/releases). Read the notes for anything between your version and the one you're moving to, since that's where breaking changes are called out.

:::note

Still on v1? Start with [Upgrading to Linkwarden v2](/self-hosting/upgrading/to-linkwarden-v2), which covers the breaking changes in that jump.

Otherwise, you can upgrade from any older release directly to the newest one. Pending migrations are applied in order on the first start, so there's no need to step through versions one at a time.

:::

## Back Up First

Migrations change your database and cannot be undone. Before upgrading, take a copy of:

```bash
# Database
docker compose exec -T postgres pg_dump -U postgres postgres > linkwarden-db.sql

# Preserved files and your configuration
tar -czf linkwarden-data.tar.gz data .env
```

Run these from the folder holding your `docker-compose.yml`. If you'd rather copy the volumes directly, stop the stack first with `docker compose down`, then copy the `pgdata` and `data` folders.

## Docker Compose

From the folder holding your `docker-compose.yml`:

```bash
docker compose pull
docker compose up -d
```

Compose recreates the Linkwarden container because its image changed. Your database and preserved files live in folders next to the compose file, so they stay where they are.

Then watch the first start:

```bash
docker compose logs -f linkwarden
```

The container applies any pending database migrations before the app starts listening, so the first start after an upgrade can take longer than usual. Once you see the app report that it's ready, open your instance and confirm the new version in the profile menu at the bottom of the sidebar.

### Pinning a Version

The compose file uses the `latest` tag, which means you get the newest release every time you pull. Each release is also published under its own tag:

```yaml
services:
  linkwarden:
    image: ghcr.io/linkwarden/linkwarden:v2.16.3
```

Pinning is useful if you want to choose when to move, and it's also what makes a rollback possible.

## Manual Installation

For a [manual install](/self-hosting/setup#manual-installation), from your clone:

```bash
git pull
yarn workspaces focus linkwarden @linkwarden/web @linkwarden/worker
yarn prisma:generate
yarn web:build
yarn prisma:deploy
```

Then restart the app:

```bash
yarn concurrently:start
```

Unlike the Docker image, a manual install does not run migrations for you, which is what `yarn prisma:deploy` is doing above. Skipping it leaves the app running against an older schema, which fails in ways that look unrelated.

## Rolling Back

Restore the database backup you took, then pin the image tag to the version you were on before. Both halves matter: an older release cannot read a schema that a newer migration has already changed.

## If Something Goes Wrong

- **The container restarts in a loop.** Check `docker compose logs linkwarden`. The usual causes are a migration that couldn't run and the database not being reachable yet.
- **The app loads but preservation stops working.** Check the worker output in the same logs, and confirm nothing in your `.env` was renamed. `DISABLE_PRESERVATION`, for instance, is now `DISABLE_BROWSER`.
- **`Module '"@prisma/client"' has no exported member...`** after a manual upgrade. Run `yarn prisma:generate`, see [Troubleshooting](/self-hosting/setup#troubleshooting).

If you're still stuck, open an [issue](https://github.com/linkwarden/linkwarden/issues/new/choose) with the release you came from, the one you moved to, and the logs.
