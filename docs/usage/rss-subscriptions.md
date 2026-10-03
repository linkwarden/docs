---
sidebar_position: 13
---

# RSS Subscriptions

An RSS feed is a machine readable list of what a site has published recently. Most blogs, news sites, and podcasts publish one, usually at an address like `example.com/feed` or `example.com/rss.xml`.

Subscribing to a feed in Linkwarden means new items from that feed are saved into a Collection for you, as regular Links. They are preserved, searchable, and taggable like anything else you save.

## Adding a Subscription

Go to **Settings → RSS Subscriptions** and click "**New RSS Subscription**":

- **Link**: the address of the feed itself, not the site's homepage.
- **Name**: how the subscription is labeled in the list. It has to be unique within your account.
- **Collection**: where new Links are saved. Pick an existing Collection, or type a name to create a new one.

The feed is fetched as soon as you create the subscription, and every item currently in it is saved. Feeds normally carry the last few dozen items, so expect a batch of Links to appear right away. From then on, only items published after the last check are added.

## How the Checks Work

Linkwarden checks every feed you're subscribed to on a fixed interval, 60 minutes by default. The interval is shown at the top of the RSS Subscriptions page.

On each check, Linkwarden compares the feed's publication date against the last one it saw. If nothing is newer, nothing happens. If there are newer items, each one becomes a Link in the subscription's Collection.

A few things worth knowing:

- Items without a publication date are skipped, since there's no way to tell whether they're new.
- Links are created from each item's title and address. The description, preview image, and preserved formats are filled in afterwards by the same background process that handles links you save by hand, following your [Archive Settings](/usage/profile-settings#archive-settings).
- If the Collection is arranged by hand, new items are added to the top. Otherwise it keeps its normal sort order.
- Nothing is deduplicated. If a feed republishes an item with a newer date, you get a second Link.
- If a batch of new items would put you over your link limit, that batch is skipped rather than partially saved.

## Removing a Subscription

Click the "**x**" next to a subscription to delete it. Links that were already saved stay where they are, only the subscription is removed.

## Publishing a Feed From a Collection

The other direction works too. Every [public Collection](/usage/collections#make-a-collection-public) publishes its own RSS feed, which anyone can subscribe to in their own reader:

```
https://cloud.linkwarden.app/public/collections/<COLLECTION_ID>/rss
```

The feed carries the 20 most recently added Links. You can also get to it with the RSS icon on the public Collection page.

:::note

Self-hosted instances use their own address in place of `cloud.linkwarden.app`.

:::

## Self-Hosted Settings

Two [environment variables](/self-hosting/environment-variables) control this feature:

- `NEXT_PUBLIC_RSS_POLLING_INTERVAL_MINUTES` sets how often feeds are checked. The default is `60`. Raise it if you don't need new items quickly, see [Running a Lighter Setup](/self-hosting/lighter-setup).
- `RSS_SUBSCRIPTION_LIMIT_PER_USER` caps how many subscriptions each user can create. The default is `20`.

Polling happens in the background worker, so it keeps running even with `DISABLE_BROWSER=true`. Feed addresses are checked against the same rules as any other URL Linkwarden fetches, so a feed on a private IP is rejected unless `ALLOW_PRIVATE_NETWORK_ACCESS` is enabled. Each feed gets 30 seconds to respond, and failures are logged and retried on the next round.
