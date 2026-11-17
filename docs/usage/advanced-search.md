---
sidebar_position: 10
---

# Advanced Search

:::note

This feature is only available if you are using [Linkwarden Cloud](https://linkwarden.app/#pricing) or have installed Linkwarden 2.10 or later on your server with Meilisearch set up.

:::

Linkwarden provides a powerful search feature that allows you to find links quickly and efficiently.

## How Search Matches Links

- A link shows up when it has every word you typed, in its name, address, description, tags, Collection name, or preserved page text. Small typos still match, and the last word also matches longer words that start with it, so `file organ` finds "Local File Organizer".
- If no link has every word, you get the links that match most of them instead of an empty list.
- Put words in double quotes to match them exactly and in that order, for example `"thesis antithesis"`.
- Results are sorted by best match: a link with your words in its name ranks above one that only mentions them in its page text. The sort menu also has date and name sorts, which reorder all the results.

## Search Operators

You can use various operators to refine your search results. Here are all the advanced search operators you can use:

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
- `!` - Exclude links that match the specified criteria (e.g., `!tag:news` excludes links with the tag "news", and `!draft` excludes links that mention "draft"). See [Leaving Links Out](#leaving-links-out).

### Examples

- `name:example` - Only links whose title is exactly "example" will be matched.
- `name:"example link"` - Only links whose title is exactly "example link" will be matched.
- `url:https://example.com` - Only links whose URL is exactly "https://example.com" will be matched.
- `before:2023-01-01` - Find links created before January 1, 2023.
- `!tag:news` - Find links that do not have the tag "news".
- `type:pdf` - Find links that are PDFs.

You can also combine these operators to create more complex queries. For example:

- `tag:"ai tools" before:2020-01-01 !collection:unorganized` - Find links that are tagged with "ai tools", created before January 1, 2020, and not in the "unorganized" collection.

Search results are an ordinary Link list, so you can turn on edit mode and apply [Bulk Actions](/usage/bulk-actions) to everything a query turns up.

## Combining Searches with OR

Put `OR` between two words or operators to find links that match either one:

- `rust OR golang` finds links about either language.
- `tag:work OR tag:home` finds links with either tag.
- `recipe OR tag:recipes` finds links that mention recipes or have the "recipes" tag.

`OR` only joins the word or operator on each side of it, and the rest of the search still applies, like on Google. For example, `tag:work OR tag:home pinned:true` finds pinned links tagged "work" or "home".

Use parentheses to group parts of a search:

- `(tag:work OR tag:home) (rust OR golang)` finds links tagged "work" or "home" that mention rust or golang.
- `(local file organizer) OR tag:organizing` finds links with all three words, or with the "organizing" tag.

`AND` works too, but every word and operator is already required, so `rust AND guide` is the same as `rust guide`.

A few things to know:

- `AND` and `OR` have to be in capital letters. A lowercase `and` or `or` is searched as a word, so `rock and roll` looks for all three words. To search for the word "OR" itself, put it in quotes: `"OR"`.
- With the Best Match sort, links that match your words come first. Links that only match an operator or a left out word on one side of `OR` come after them, newest first.
- A search can make up to 20 combinations. `(a OR b) (c OR d)` makes 4. Operators joined by `OR`, like `tag:a OR tag:b OR tag:c`, count as one.
- Parentheses that are part of a word stay in it, like in `url:https://en.wikipedia.org/wiki/Foo_(bar)`.

## Leaving Links Out

Put `!` in front of a word, a phrase in double quotes, an operator or a group in parentheses to leave out the links that match it:

- `rust !book` finds links about rust that don't mention "book".
- `!"getting started"` leaves out links with that exact phrase.
- `!tag:news` leaves out links tagged "news".
- `!(tag:work OR tag:home)` leaves out links with either tag.
- `!(rust guide)` leaves out links that have both words, and keeps the ones with only one of them.

A search can be made of only these, like `!draft`. It lists every other link, newest first with the Best Match sort.

A few things to know:

- Only the exact word is left out. `!book` keeps links that only say "books", or that have "book" misspelled.
- The word is checked in the same places search looks, preserved page text included, so `!book` also leaves out links whose saved page mentions "book".
- To search for a word that starts with `!`, put it in quotes, like `"!important"`, or put a backslash before the `!`, like `\!important`.
