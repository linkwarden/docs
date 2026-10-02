---
sidebar_position: 7
---

# Browser Sync

The [browser extension](/getting-started/browser-extension) saves pages to Linkwarden one at a time. If you instead want your browser's own bookmarks kept in sync with Linkwarden, so that a bookmark added in either place shows up in the other, use [Floccus](https://floccus.org).

Floccus is an open source bookmark sync extension that can use Linkwarden as its backend. It's developed independently of Linkwarden, so questions about Floccus itself belong in [their repository](https://github.com/floccusaddon/floccus).

## Installation

Floccus is available for:

- [Chrome](https://chrome.google.com/webstore/detail/floccus/fnaicdffflnofjppbagibeoednhnbjhg) (and other Chromium browsers)
- [Firefox](https://addons.mozilla.org/en-US/firefox/addon/floccus/)
- [Edge](https://microsoftedge.microsoft.com/addons/detail/gjkddcofhiifldbllobcamllmanombji)
- [Android](https://play.google.com/store/apps/details?id=org.handmadeideas.floccus), also on [F-Droid](https://f-droid.org/en/packages/org.handmadeideas.floccus/)
- [iOS](https://apps.apple.com/us/app/floccus/id1626998357)

## Setup

### 1. Create an Access Token

In Linkwarden, go to **Settings → Access Tokens**, click "**New Access Token**", and copy it. Floccus does not accept your account password.

:::tip

Give the token an expiry of "never", or sync will quietly stop working after the token expires.

:::

### 2. Create a Floccus Profile

Open Floccus, add a new profile, and choose **Linkwarden** as the sync method. Then fill in:

- **Server URL**: the root address of your instance, ending with a slash. For Cloud that's `https://cloud.linkwarden.app/`.
- **Username**: your Linkwarden username.
- **Password**: the access token you just created.
- **Server folder**: the name of the Collection to sync into. Floccus creates it if it doesn't exist.
- **Local folder**: the bookmarks folder on your side. Floccus makes a new one by default, or you can pick an existing one with the folder icon.

### 3. Turn Off Your Browser's Own Sync

Browser bookmark sync and Floccus will fight over the same bookmarks and duplicate them. Disable the browser's built-in sync, or at least its bookmarks portion, before syncing for the first time.

## What Syncs

- Bookmark titles and addresses, in both directions.
- Folders become Collections. Nested folders become sub-Collections under the Collection you picked.
- Links that arrive from Floccus are normal Links, so they're preserved and searchable like anything else you save.

Preserved formats, highlights, and descriptions have nowhere to go in a browser bookmark, so they stay in Linkwarden only.

:::caution

Two-way sync means deletions travel too. Removing a bookmark in your browser removes the Link from the synced Collection, along with whatever Linkwarden preserved for it. If you only want bookmarks to flow one way, set the sync strategy in Floccus accordingly before the first run.

:::

Repeat the setup on every browser and device you want included, pointing each one at the same Collection.
