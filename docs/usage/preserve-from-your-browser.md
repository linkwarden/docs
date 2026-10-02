---
sidebar_position: 8
---

# Preserve from Your Browser

Linkwarden normally preserves a page by opening it on the server. That covers most of the web, but not pages that only exist for you. A site can require a login, put its article behind a paywall, or decline to serve its content to anything that doesn't look like a person at a keyboard. In those cases the server gets the sign-in wall or the block notice, and that's what gets preserved.

The way around it is to capture the page in the browser where you're already signed in, and send that copy to Linkwarden. Whatever you upload is kept as-is, and Linkwarden fills in the formats you didn't provide.

## Which Method to Use

| Method                                                | You get                                 | Good for                                       |
| ----------------------------------------------------- | --------------------------------------- | ---------------------------------------------- |
| [Browser extension](#a-screenshot-from-the-extension) | A full-page screenshot                  | One checkbox while saving. Quickest option.    |
| [SingleFile](#a-full-copy-with-singlefile)            | A complete, self-contained copy of the page | The highest fidelity, and feeds the other formats. |
| [Upload a file](#a-pdf-or-image-you-already-have)     | A new Link built around your file       | A PDF or image you already have on disk.       |

## A Screenshot from the Extension

In the [browser extension](/getting-started/browser-extension), tick "**Upload image from browser**" before saving.

The extension scrolls the page, captures it in your own tab, stitches the pieces into one full-page image, and attaches that as the Link's Screenshot. Because the capture happens in your browser, it shows the page exactly as you see it, signed in and all. If a page blocks scripted capture, the extension falls back to just the visible area.

## A Full Copy with SingleFile

[SingleFile](/usage/upload-from-singlefile) is a separate extension that saves a page as a single self-contained HTML file. Pointed at Linkwarden, it uploads that file and creates the Link for you.

This is the most complete option. It's also the most useful one, because an uploaded HTML copy becomes the source for everything else, see [What Happens Next](#what-happens-next).

Links created this way land in your **Unorganized** Collection, so move them afterwards if you keep things tidy.

## A PDF or Image You Already Have

In Linkwarden, find "**Upload file**" next to the new-link button in the sidebar. It's behind the three-dot menu when the sidebar is expanded, and in the "**+**" menu when it's collapsed. Pick the file, choose a Collection, and optionally set a name, tags, and description under **More options**.

PDF, PNG, and JPG are accepted, up to 10 MB by default. This is a good match for your browser's own **Print → Save as PDF**, which works on just about any page you can open, including one you had to sign in to read.

The file becomes the whole Link, with no web address attached to it. If you want the Link to point back at the original article as well, use the [API form](#doing-it-yourself) below, which takes a `url` alongside the file.

## What Happens Next

An uploaded Link still goes through Linkwarden's normal preservation, with two differences:

- **Formats you provided are left alone.** Preservation only fills in what's missing, so your copy stays exactly as you uploaded it.
- **An uploaded HTML copy is used as the source.** Rather than reading the live page again, Linkwarden loads your snapshot and generates the remaining formats from it. The readable view, screenshot, and PDF then all reflect what you captured.

A screenshot or PDF upload doesn't carry that benefit, since there's no page to work from. Linkwarden will still open the URL to build the other formats, and on a page that needs a login those will come back as the sign-in wall. If you only want the copy you uploaded, turn the other formats off in **Settings → Preferences → Archive Settings**, either globally or [for a specific Tag](/usage/profile-settings#archive-settings).

## Things to Watch For

- **"Refresh Preserved Formats" discards your upload.** It deletes every preserved format on the Link and preserves it again from the live page, which is exactly what you were avoiding.
- **Screenshots can't be swapped between formats.** If a Link already has a PNG screenshot, a JPEG upload is refused, and the other way round.
- **The readable view can't be uploaded.** Linkwarden derives it from the page content.
- **Large pages hit the upload limit.** The cap is 10 MB by default. Self-hosters can raise it with `NEXT_PUBLIC_MAX_FILE_BUFFER`.

:::caution

Self-hosters: don't combine uploads with `DISABLE_BROWSER=true`. Uploaded Links are still queued, and with the browser disabled every format is marked unavailable, which clears the reference to the file you just uploaded. Turn off the individual formats instead, see [Running a Lighter Setup](/self-hosting/lighter-setup).

:::

## Doing It Yourself

Both upload paths are plain API calls, which is how the extension and SingleFile use them. Send the file as a `file` field in a `multipart/form-data` body, with the format in the query string:

| Format | Value | Accepted file |
| ------ | ----- | ------------- |
| Screenshot (PNG) | `0` | `image/png` |
| Screenshot (JPEG) | `1` | `image/jpeg` |
| PDF | `2` | `application/pdf` |
| Webpage | `4` | `text/html` |

To attach a format to a Link that already exists:

```bash
curl -X POST "https://cloud.linkwarden.app/api/v1/archives/<LINK_ID>?format=0" \
  -H "Authorization: Bearer <ACCESS_TOKEN>" \
  -F "file=@screenshot.png"
```

To create a new Link from a file, leave out the ID and add the original address:

```bash
curl -X POST "https://cloud.linkwarden.app/api/v1/archives?format=4" \
  -H "Authorization: Bearer <ACCESS_TOKEN>" \
  -F "file=@page.html" \
  -F "url=https://example.com/article"
```

Add `&preview=true` to the first call to replace only the Link's banner image, which is what the "**Upload Banner**" button on a Link's details does. [Access tokens](/usage/profile-settings#access-tokens) are created in your settings.
