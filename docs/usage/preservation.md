---
sidebar_position: 5
---

# Preservation

A bookmark that only stores an address is a bet on the page still being there later. Linkwarden takes the page too: every Link you save is opened on the server and kept in several formats, so you still have the content when the original moves, changes, or goes offline.

## The Formats

| Format                   | What it is                                                                                                   |
| ------------------------ | ------------------------------------------------------------------------------------------------------------ |
| **Readable**             | Just the article: text, headings, and images, with the navigation and ads stripped out. See [Read and Annotate](/usage/read-and-annotate). |
| **Webpage**              | A complete, self-contained copy of the page as a single HTML file, styling and images included.               |
| **Screenshot**           | A full-page JPEG of the whole page, not just the part that fits on screen.                                   |
| **PDF**                  | The page printed to a PDF.                                                                                   |
| **Archive.org Snapshot** | Not stored by Linkwarden. The address is submitted to the Wayback Machine, which keeps its own copy.          |

All of them except the Archive.org snapshot are on for a new account. Which ones run is up to you, in **Settings → Preferences → [Archive Settings](/usage/profile-settings#archive-settings)**, either globally or per Tag.

Linkwarden also makes a small preview image for each Link, used as the banner on its card and details. It prefers the page's own social-sharing image and falls back to a low-quality screenshot.

:::note

A Link whose address points directly at a PDF or an image is handled differently: the file itself is fetched and stored as the Link's PDF or Screenshot, and nothing else is generated. There's no article to extract and no page to print.

:::

## When Preservation Happens

Saving a Link puts it in a queue. A background worker takes links from the queue a few at a time, opens each one in a real browser, and produces whichever formats you've enabled. Nothing is preserved at the moment you hit save, so a new Link usually shows its formats a short while later.

The queue is shared, and it's walked fairly: the worker rotates between users rather than emptying one person's backlog first. A bulk import of several thousand Links will take a while to work through, and it won't hold up the handful of Links someone else just saved.

While a Link is waiting, its details show "**Link preservation is in the queue**". Formats appear as they finish, so you may see the Readable view before the Webpage copy is ready, with a note that more formats are still queued.

## Seeing What Was Preserved

Open a Link's details, from the <Icon name="three-dots" /> three-dots menu or by clicking the Link if that's your preference, and look at **Preserved Formats**. Each available format has two buttons: one opens it in a new tab, the other downloads the file. Below the list is a link to the latest snapshot of that address on archive.org, whether or not you asked Linkwarden to submit it.

Opening a format takes you to the preservation view: the format on the page, with a dropdown at the top to switch between the ones that exist for this Link, a download button, and a dark-mode toggle. Only the formats that were actually preserved are listed.

You can skip the details step. Under **Settings → Preferences → Link Settings**, "**Clicking on Links should**" sets what a click on a Link does:

- Open the original content, the default.
- Show the Link's details.
- Open the PDF, Readable, Webpage, or Screenshot, if available.

If you pick a format and a particular Link doesn't have it, the click falls back to opening the original page.

## Preserving Again

To throw away a Link's formats and preserve it from scratch, open its details and click the <Icon name="arrow-clockwise" /> refresh icon next to **Preserved Formats**, then confirm.

This is the right move for a Link that was saved while the site was down or misbehaving. [Bulk Actions](/usage/bulk-actions) has the same thing for many Links at once.

:::caution

Refreshing deletes the existing copies before it fetches anything, and it reads the live page. If the page is gone, you get nothing back, and the copy you had is already deleted. It also discards anything you [uploaded yourself](/usage/preserve-from-your-browser).

:::

Refreshing a Link needs **Admin** on the Collection it lives in, or ownership of it.

## Full-Text Search

The Readable format does double duty: the text it extracts is what full-text search looks inside, which is how a search can match a phrase from the middle of an article you saved months ago.

This needs Meilisearch, which Linkwarden Cloud has and a self-hosted instance may not. Without it, search covers a Link's name, address, description, and tags, but not the text of the page. See [Advanced Search](/usage/advanced-search).

## When a Page Won't Preserve Cleanly

The server opens pages as an anonymous visitor, so anything that depends on being you is out of reach. A site can require a login, keep its article behind a paywall, or refuse to serve content to something that doesn't look like a person at a keyboard. In those cases the sign-in wall or the block notice is what the page showed, so that's what gets preserved.

The fix is to capture the page in the browser where you're already signed in and send that copy over. See [Preserve from Your Browser](/usage/preserve-from-your-browser).

A few other things that can leave a format missing:

- **A page that takes too long.** Each Link gets a bounded amount of time in the browser, and scrolling for the full-page screenshot is capped as well. A very long or very slow page can run out of time.
- **A copy that's too large.** Each format has a size ceiling, and an oversized one is dropped rather than stored.
- **An address that isn't reachable from the server**, including anything on a private network.

A format that couldn't be produced is marked unavailable rather than left pending, so it simply doesn't appear in the format list. Opening it directly gives a "Format not available" page.

## Where the Files Live

Preserved formats are stored by Collection, either on the instance's disk or in S3-compatible storage if the instance is configured for it. They belong to the Link: delete the Link and its files go too, and deleting a Collection takes everything inside it.

:::note

Self-hosters: the size caps, timeouts, batch size, and the switches for turning preservation down or off are all environment variables, listed in [Environment Variables](/self-hosting/environment-variables). For a small server, [Running a Lighter Setup](/self-hosting/lighter-setup) goes through them in order of effect.

:::
