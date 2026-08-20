---
sidebar_position: 6
---

# Running a Lighter Setup

Linkwarden used to be heavy. The image sat at roughly 3.0 GB, and a freshly started instance used around 700 MB of memory before doing any work at all.

That changed in [2.15](https://linkwarden.app/blog/releases/2.15). The Docker image was rewritten and dropped to about 1.5 GB, and reworking how the app and the archiving browser are started brought idle memory down to about 350 MB. If you are running an older version, upgrading is the single biggest improvement available to you.

We are not done, and these numbers should keep coming down. What is left is mostly preservation: Linkwarden ships a headless browser, a Rust HTML archiver, a search engine, and a database, because it saves a copy of every page you bookmark rather than just its address. That is a real cost, but it is one you can opt out of, in whole or in part.

This guide which settings actually reduce disk, memory, and CPU usage. **Everything here is optional.** The defaults are already reasonable, so treat the rest as tuning for your hardware rather than repairs.

## Making It Lighter

Apply the environment variables below in your `.env` file, then run `docker compose up -d` to restart with the new values.

### 1. Turn off the preserved formats you do not use

**Effect: large. Saves CPU, disk, and time.**

In the app, go to **Settings → Preferences → Archive Settings** and disable any format you do not need. Individual tags can also override these, so you can keep full preservation for a few tags and skip it for everything else.

Monolith and PDF are the most expensive formats. Screenshots are cheaper. Readable text is the cheapest and is what search and highlights depend on.

Note that a preview image is always generated, so the browser still runs even with every format off.

### 2. Disable browser-based preservation entirely

**Effect: largest. Keeps the instance near its idle memory floor.**

```bash
DISABLE_BROWSER=true
```

Every worker task that needs the browser is skipped and links are marked as having no preserved formats. You keep bookmarks, tags, collections, sharing, and search over titles, URLs, descriptions, and tags. You lose screenshots, PDFs, HTML snapshots, readable view, and preview images.

The worker still briefly starts Chromium while it drains links that were already queued, and closes it 60 seconds after the queue empties.

### 3. Let your own browser do the preserving

**Effect: large. Moves the expensive part off the server entirely.**

Preservation is expensive because the server loads the page in a headless browser. If the page is already open in _your_ browser, that work is already done, and it can be uploaded as a finished file instead. Two ways to do that:

- **The Linkwarden browser extension.** Tick **Upload image from browser** when saving a link. The extension captures a full-page screenshot in your own browser and uploads it, so the server only writes the file and updates the row.
- **[SingleFile](/usage/upload-from-singlefile).** Point the SingleFile extension at your instance and it uploads a complete self-contained HTML snapshot, which is the same format Monolith produces server side.

The upload itself is cheap. The server writes the file and, for images, resizes a thumbnail with an image library. No Chromium, no Monolith. Both paths also capture the page exactly as you see it, which covers pages that are behind a login or that restrict automated visitors.

What an upload does not do is take the link out of the worker's queue. The worker only fills in formats that are still missing, so it will not redo the one you uploaded, but it does open the page in Chromium to build the others. The saving comes from turning those others off in **Settings → Preferences → Archive Settings**: uploading a screenshot while **Webpage** and **PDF** are still enabled leaves the two most expensive jobs running behind you.

When a SingleFile snapshot is already attached, the worker still navigates to the URL, but then loads your uploaded copy into the page, so whatever formats remain enabled are generated from what you captured rather than from the live page.

:::caution

Do not combine this with `DISABLE_BROWSER=true`. Links you upload to are still queued for the worker, and with the browser disabled the worker marks every format as unavailable, which clears the reference to the file you just uploaded. Turn the individual formats off instead.

:::

Uploads are capped by `NEXT_PUBLIC_MAX_FILE_BUFFER`, which is 10 MB by default. Long pages can exceed that, so raise it if uploads start failing.

### 4. Preserve one link at a time

**Effect: medium. Flattens memory spikes at the cost of throughput.**

```bash
ARCHIVE_TAKE_COUNT=1
```

This caps how many links are preserved concurrently, and also how many are auto-tagged per batch. A backlog takes longer to clear, but the peak stays low and predictable.

### 5. Constrain the allocators

**Effect: medium. Lowers idle and steady-state memory.**

```bash
MALLOC_ARENA_MAX=2
NODE_OPTIONS=--max-old-space-size=400
```

`MALLOC_ARENA_MAX` limits how many per-thread memory pools glibc creates. The default scales with CPU count and is generous for a workload like this, so capping it at 2 reclaims a noticeable chunk of resident memory on multi-core machines.

`--max-old-space-size` caps the V8 heap in MB, which makes garbage collection kick in earlier instead of letting the heap grow toward the process default. Setting it too low causes crashes on large pages or large imports, so treat 400 as a floor for a preservation-enabled instance and raise it if you see out-of-memory restarts. It applies to both the web and worker processes.

### 6. Move the browser off the machine

**Effect: large on the Linkwarden host, since the heaviest component is gone.**

```bash
PLAYWRIGHT_WS_URL=ws://browser-host:3000
```

The worker connects to a remote Chromium over CDP instead of launching one locally. This is useful when Linkwarden runs on a small always-on device and you have a beefier machine available for the browser work.

Page requests are then fetched by the remote browser, which resolves DNS on its own, so run it on a network segment that cannot reach anything sensitive. See the note on `PLAYWRIGHT_WS_URL` in [Environment Variables](/self-hosting/environment-variables).

### 7. Drop MeiliSearch

**Effect: medium. Removes a container and its on-disk index.**

MeiliSearch is optional. Remove the service from your `docker-compose.yml` along with the `meilisearch` entry under `depends_on`, delete the `meili_data` folder, and leave `MEILI_MASTER_KEY` empty:

```yaml
services:
  linkwarden:
    # ...
    depends_on:
      - postgres
  # meilisearch service removed
```

Search then falls back to PostgreSQL, matching against link titles, URLs, descriptions, and tag names. You lose the [advanced search operators](/usage/advanced-search) and full-text search across preserved page content.

### 8. Quiet the background loops

**Effect: small, but free if you do not use these features.**

```bash
NEXT_PUBLIC_RSS_POLLING_INTERVAL_MINUTES=1440
```

RSS polling runs hourly by default even with no subscriptions. Raising the interval reduces periodic wake-ups.

AI tagging costs nothing when unconfigured: with no provider key set, the auto-tagging loop exits at startup and never runs.

### 9. Cap disk growth

**Effect: disk only.**

```bash
PDF_MAX_BUFFER=25
SCREENSHOT_MAX_BUFFER=25
MONOLITH_MAX_BUFFER=25
TEXT_CONTENT_LIMIT=50000
```

The `*_MAX_BUFFER` values are size limits in MB. A generated file larger than its limit is discarded instead of stored, so these bound how much a single pathological page can add to your storage folder. They are checked after generation, so they cap disk usage rather than peak memory.

`TEXT_CONTENT_LIMIT` caps how many characters of extracted readable text are stored per link in PostgreSQL, which is the main way the database itself grows.

### 10. Put hard limits on the containers

**Effect: containment, not reduction.**

```yaml
services:
  linkwarden:
    # ...
    mem_limit: 1g
    cpus: 1.5
```

Limits do not make Linkwarden use less memory, they stop it from affecting the rest of the machine. If the limit is set below what a workload actually needs, the container is killed and restarted mid-preservation, so combine this with the settings above rather than using it on its own.

## Example Configurations

### Bookmarks only

Lowest possible footprint. No preservation, no search engine, one database container.

```bash
DISABLE_BROWSER=true
MALLOC_ARENA_MAX=2
NODE_OPTIONS=--max-old-space-size=400
```

Plus removing the `meilisearch` service from `docker-compose.yml`. This keeps the instance close to the ~350 MB idle mark.

### Light preservation

Full preservation on a small server, tuned for low peaks instead of speed.

```bash
ARCHIVE_TAKE_COUNT=1
MALLOC_ARENA_MAX=2
NODE_OPTIONS=--max-old-space-size=400
BROWSER_TIMEOUT=3
```

`BROWSER_TIMEOUT` is the hard cap in minutes for a single preservation job, so lowering it stops one slow page from holding a browser page open for five minutes.

Optionally turn off Monolith and PDF in **Settings → Preferences → Archive Settings** and keep screenshots and readable view, which covers most of what people actually revisit.

## Reading Memory Usage Correctly

After a heavy workload, such as an import or a large preservation backlog, memory settles at a higher number than it was before, and it stays there.

This is expected and is **not** a leak. Both the JavaScript runtime and the system allocator keep memory they have already claimed from the kernel so it can be reused for the next workload instead of being requested again. From outside the container it looks like memory that is never given back, because in practice it is not given back until the process exits. What matters is that the number plateaus rather than climbing with every batch.

Two things follow from that:

- **Compare setups from a fresh start.** Restart the container, let it settle, and read the idle number with `docker stats` before running any work. Comparing a freshly started instance against one that imported 10,000 links yesterday tells you nothing about the settings you changed.
- **Size the machine for the peak, not the idle floor.** The ~350 MB idle figure is what a fresh instance uses. An instance that regularly preserves links will sit well above that, and `MALLOC_ARENA_MAX=2` plus a `NODE_OPTIONS=--max-old-space-size=400` cap is how you keep that plateau lower.

If the number keeps climbing across days of light use and never plateaus, that is worth [reporting](https://github.com/linkwarden/linkwarden/issues). A plateau after a busy period is not.
