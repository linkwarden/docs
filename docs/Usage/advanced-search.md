---
sidebar_position: 7
---

# Advanced Search

:::note

This feature is only available if you are using [Linkwarden Cloud](https://linkwarden.app/#pricing) or have installed Linkwarden 2.10 or later on your server with Meilisearch set up.

:::

Linkwarden provides a powerful search feature that allows you to find links quickly and efficiently. You can use various operators to refine your search results. Here are all the advanced search operators you can use:

- `title:` - Search for links with a specific title.
- `url:` - Search for links with a specific URL.
- `tag:` - Search for links with a specific tag.
- `before:` - Search for links created before a specific date.
- `after:` - Search for links created after a specific date.
- `collection:` - Search for links in a specific collection.
- `public:true` - Search for public links.
- `name:` - Search for links with a specific name.
- `description:` - Search for links with a specific description.
- `type:` - Search for links of a specific type (image, url, pdf, etc.).
- `pinned:true` - Search for pinned links.
- `tag:` - Search for links with a specific tag.
- `!` - Exclude links that match the specified criteria (e.g., `!tag:news` excludes links with the tag "news").

### Examples

- `title:example` - Find links with "example" in the title.
- `title:"example link"` - Find links with "example link" in the title.
- `url:example.com` - Find links with "example.com" in the URL.
- `before:2023-01-01` - Find links created before January 1, 2023.
- `!tag:news` - Find links that do not have the tag "news".
- `type:pdf` - Find links that are PDFs.
