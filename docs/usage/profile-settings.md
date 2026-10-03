---
sidebar_position: 8
---

# Profile Settings

Everything about your account lives under **Settings**. Open it from your name at the bottom of the sidebar, then click "**Settings**".

## The Profile Menu

Clicking your name at the bottom of the sidebar opens a menu with:

- **Settings**: the pages described below.
- **Server Administration**: user management, only shown to the administrator of a self-hosted instance.
- **Theme**: switch between System, Dark, and Light without leaving the page.
- **Need help?**: links to this documentation, and to support if you're on Cloud.
- **Logout**.
- The version you're running, at the bottom. Clicking it opens the release notes.

## Account

Your **Display Name**, **Username**, **Email**, **Language**, and **Profile Photo**. Click "**Save Changes**" when you're done.

A few notes:

- Usernames can contain lowercase letters, numbers, hyphens, and underscores, and must be at least 3 characters. They're what other users type when you're [added to a Collection](/usage/collections#adding-a-member).
- Changing your email sends a verification link to the new address. The change takes effect once you click it.
- Profile photos must be a PNG or JPEG under 1 MB.
- Changing the language reloads the page.

:::note

On a self-hosted instance, the Email field only appears if the instance has an email provider configured.

:::

This page also holds **Import & Export**, covered in [Import & Export](/usage/import-and-export), and **Delete Account**, which permanently removes every Link, Collection, Tag, and preserved file you own.

## Preferences

Each section on this page saves separately, so click the "**Save Changes**" button belonging to the section you edited.

### Theme and Color

Pick **System**, **Dark**, or **Light**, plus an accent color. The theme follows your account across devices. The accent color is stored in the browser you set it in.

### AI Settings

Controls whether Linkwarden tags your links for you, and how. See [AI Tagging](/usage/ai-tagging) for what each method does. On a self-hosted instance this section only appears once an [AI provider is configured](/self-hosting/ai-worker).

### Archive Settings

Which formats Linkwarden preserves for every new Link: **Screenshot**, **Webpage**, **PDF**, **Readable**, and **Archive.org Snapshot**. [Preservation](/usage/preservation) explains what each one is.

Below that you can set preservation rules per Tag, which override the global ones. This is useful when you want full preservation for a handful of Tags and something lighter everywhere else. Turning formats off is also the most effective way to cut resource usage on a small server, see [Running a Lighter Setup](/self-hosting/lighter-setup).

### Link Settings

- **Prevent duplicate links**: refuses a new Link if its address is already in your account.
- **Clicking on Links should**: what happens when you click a Link. You can open the original page, show the Link's details, or jump straight to a preserved format when one is available.

## RSS Subscriptions

Feeds that are saved into your Collections automatically. See [RSS Subscriptions](/usage/rss-subscriptions).

## Access Tokens

Tokens let other apps reach your account without your password, which is how the [browser extension](/getting-started/browser-extension), [mobile app](/getting-started/mobile-app), [iOS Shortcut](/getting-started/apple-shortcut), [browser sync](/getting-started/browser-sync), and [SingleFile uploads](/usage/upload-from-singlefile) connect.

Click "**New Access Token**", give it a name, and choose an expiry: 7 days, 1 month, 2 months, 3 months, or never. The token is shown once, so copy it before closing the dialog. Revoke a token with the "**x**" next to it, and anything using it loses access immediately.

## Password

Change your password here, minimum 8 characters. Accounts created through SSO start without one, and this page offers to create one instead, which then also works for signing in directly.

## Billing

Only present on Linkwarden Cloud. It links to the Stripe portal for your payment method, invoices, and plan, and is where you [manage seats](/billing/seats) on a Team plan. See the [Billing FAQ](/billing/faq) for the rest.
