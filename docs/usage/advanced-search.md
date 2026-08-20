---
sidebar_position: 7
---

# Advanced Search

:::note

This feature is only available if you are using [Linkwarden Cloud](https://linkwarden.app/#pricing) or have installed Linkwarden 2.10 or later on your server with Meilisearch set up.

:::

Linkwarden provides a powerful search feature that allows you to find links quickly and efficiently. You can use various operators to refine your search results. Here are all the advanced search operators you can use:

- `name:` - Search for links with a specific title.
- `url:` - Search for links with a specific URL.
- `tag:` - Search for links with a specific tag.
- `before:` - Search for links created before a specific date.
- `after:` - Search for links created after a specific date.
- `collection:` - Search for links in a specific collection.
- `public:true` - Search for public links.
- `description:` - Search for links with a specific description.
- `type:` - Search for links of a specific type (image, url, pdf, etc.).
- `pinned:true` - Search for pinned links.
- `tag:` - Search for links with a specific tag.
- `!` - Exclude links that match the specified criteria (e.g., `!tag:news` excludes links with the tag "news").

### Examples

- `name:example` - Only links whose title is exactly "example" will be matched.
- `name:"example link"` - Only links whose title is exactly "example link" will be matched.
- `url:https://example.com` - Only links whose URL is exactly "https://example.com" will be matched.
- `before:2023-01-01` - Find links created before January 1, 2023.
- `!tag:news` - Find links that do not have the tag "news".
- `type:pdf` - Find links that are PDFs.

You can also combine these operators to create more complex queries. For example:

- `tag:"ai tools" before:2020-01-01 !collection:unorganized` - Find links that are tagged with "ai tools", created before January 1, 2020, and not in the "unorganized" collection.
