---
sidebar_position: 14
---

# Import & Export

Linkwarden can import bookmarks from your browser, from another Linkwarden instance, and from a few read-it-later services. Everything happens in **Settings → Account → Import & Export**.

Click "**Import Links**", pick the source you're coming from, and select the file. The import runs immediately and the page reloads when it's done.

## Before You Start

- **Imports don't deduplicate.** Importing the same file twice gives you two copies of every Link. The "Prevent duplicate links" preference does not apply here.
- **Imported Links are queued for preservation.** They go through the same background process as links you save by hand, so a large import means a long preservation queue. If you only want the bookmarks themselves, turn off the formats you don't need in **Settings → Preferences → Archive Settings** first.
- **Files are capped at 10 MB by default.** Self-hosted instances can raise this with `IMPORT_LIMIT`. Split the file if you hit the cap.

## From a Browser

Select "**From Bookmarks HTML file**". Any browser that exports the standard bookmarks HTML format works, which covers Chrome, Brave, Edge, Firefox, Safari, and most others.

How to produce the file:

- **Chrome and Brave**: open the Bookmark Manager, then the <Icon name="three-dots-vertical" /> three-dot menu → **Export bookmarks**.
- **Edge**: **Settings → Favorites**, then the <Icon name="three-dots-vertical" /> three-dot menu → **Export favorites**.
- **Firefox**: **Bookmarks → Manage bookmarks**, then **Import and Backup → Export Bookmarks to HTML**.
- **Safari**: **File → Export → Bookmarks**.

What carries over:

- Folders become Collections, and nested folders become sub-Collections.
- Bookmarks that aren't in a folder go into a Collection named "Imports".
- The date each bookmark was added is kept, and shown on the Link instead of the time you imported it.
- Descriptions are kept when the file has them.
- Tags are kept when the file has a `TAGS` attribute. Browsers don't write one, but some third-party bookmark tools do.

## From Linkwarden

Select "**From Linkwarden**" and pick the `backup.json` file produced by **Export Data** on another instance or account.

Collections, Links, Tags, descriptions, dates, and pinned Links are all restored. Two things are not: Collections come back as a flat list rather than a nested one, and preserved files aren't in the backup, so screenshots, PDFs, and page snapshots are regenerated rather than copied.

:::caution

Importing into an account that already has data creates a second set of Collections rather than merging into the existing ones. This is best used on a fresh account.

:::

## From Pocket

Select "**From Pocket (CSV file)**" and pick the CSV from Pocket's export page. If the export arrived as a zip, unzip it first and select the `.csv` inside.

Titles, addresses, tags, and the date each item was saved carry over. Everything lands in a Collection named "Imports", since Pocket had no folders.

:::note

Pocket shut down in 2025. An export you took before it closed still imports fine.

:::

## From Wallabag

Select "**From Wallabag (JSON file)**" and pick the JSON export. In Wallabag, go to **All articles** and use the export links at the bottom of the list to download the JSON version.

Titles, addresses, tags, save dates, and the extracted article text carry over, and starred articles come in pinned. Everything lands in a Collection named "Imports".

## From Omnivore

Select "**From Omnivore (ZIP file)**" and pick the `.zip` export as-is, no need to unpack it. Linkwarden reads the metadata files inside.

Titles, addresses, descriptions, thumbnails, labels (as Tags), and save dates carry over. Everything lands in a Collection named "Omnivore Imports".

## From Anything Else

Most bookmark managers can export the bookmarks HTML format, including Raindrop and Pinboard. If yours can, use "**From Bookmarks HTML file**" and the notes in [From a Browser](#from-a-browser) apply.

Beyond that, there's the [API](/api/create-link), which is how the browser extension and mobile apps add links, and which works just as well for a one-off script.

## Exporting Your Data

Click "**Export Data**" in the same section to download a `backup.json` file containing your account settings, Collections, Links, Tags, pinned Links, and RSS subscriptions.

The file is metadata only. Preserved screenshots, PDFs, and page snapshots are not included, so treat it as a way to move your library rather than as a full backup of an instance. Self-hosters who want everything should back up the database along with the storage folder.
