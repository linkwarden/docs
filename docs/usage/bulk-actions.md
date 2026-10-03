---
sidebar_position: 7
---

# Bulk Actions

Most of Linkwarden works one Link at a time. Edit mode works on many: pick the Links you want, then move them, retag them, preserve them again, or delete them in a single step. Tags have their own version of this on the Tags page.

## Turning On Edit Mode

Click the <Icon name="pencil-fill" /> pencil icon above the list, next to the sort and view options.

Edit mode is available anywhere Links are listed:

- All Links
- Pinned Links
- A Collection
- A Tag
- Search results

In a Collection you don't own, the pencil only shows up if your [member role](/usage/collections#roles) is **Admin**. It isn't available on a public Collection page you're browsing as a guest.

Navigating away turns edit mode off and clears whatever you had selected.

## Selecting Links

While edit mode is on, clicking a Link selects it instead of opening it. Selected Links are outlined in your accent color, and clicking one again deselects it. This works the same in every view (Card, Masonry, and List).

A bar appears above the list with:

- A counter on the left, reading "**Nothing selected**", "**1 Link selected**", or "**12 Links selected**".
- A checkbox next to it that selects every Link in the list. Click it again to clear the selection.

:::note

"Select all" covers the Links currently loaded on the page, not every Link that matches. Lists load more as you scroll, so scroll to the bottom first if you mean to catch the whole set.

:::

## The Actions

Three buttons sit on the right side of that bar, and all of them stay disabled until something is selected.

### Refresh Preserved Formats

The <Icon name="arrow-clockwise" /> circular arrow throws away the preserved formats of every selected Link and preserves them again from scratch. This is the one to reach for when a batch of Links was saved while a site was down, or when you've changed your [Archive Settings](/usage/profile-settings#archive-settings) and want older Links to catch up.

The work is handed to the background worker, so the new formats fill in gradually rather than all at once.

:::caution

The existing copies are deleted right away. If a page is no longer reachable, re-preserving it will not bring the old copy back.

:::

This one needs **Delete** permission (or ownership) in the Link's Collection. Selected Links where you don't have it are quietly skipped, and you only get an error if that's true of every Link you picked. Links with no address of their own, such as uploaded files, are skipped as well, since there's nothing to fetch again.

### Edit

The <Icon name="pencil-square" /> pencil-square opens a modal whose fields apply to all selected Links at once:

- **Move to Collection**: moves every selected Link into the Collection you choose. Only existing Collections are listed, so you can't create one from here. Leave it empty to keep each Link where it is.
- **Add Tags**: adds the tags you enter to every selected Link, on top of the tags they already carry. Tags that don't exist yet are created.
- **Remove previous tags**: replaces tags instead of adding to them. Checked with no tags entered, it strips the tags off every selected Link.

Click "**Save Changes**" to apply.

Links in Collections where you lack **Update** permission are left untouched. If some of your selection falls into that category, the Links you can edit still go through and the rest are reported as failed.

### Delete

The <Icon name="trash" /> trash icon asks for confirmation, then deletes the selected Links along with their preserved files. There's no undo. Holding **Shift** while clicking the trash icon skips the confirmation, which the modal also mentions.

:::note

Bulk deletion is all or nothing. If even one selected Link sits in a Collection you don't have **Delete** permission for, nothing is deleted and you get a "Collection is not accessible." error. Deselect those Links and run it again.

:::

## Bulk Actions for Tags

The Tags page has its own <Icon name="pencil-fill" /> pencil icon at the top right. Turn it on and every tag card gets a checkbox; click a card to select it rather than open it. The same counter and select-all checkbox appear above the grid.

### Merge Tags

Select two or more tags, click the <Icon name="intersect" /> merge icon, and give the result a name. The selected tags are replaced by a single tag with that name, and every Link that carried any of them ends up with the new one.

:::note

Tag names are unique per account, so the name you type has to be free or belong to one of the tags being merged. Merging into the name of a tag you're keeping fails.

Any per-Tag preservation rules you set up in [Archive Settings](/usage/profile-settings#archive-settings) belong to the original tags and don't carry over to the merged one, which falls back to your global settings.

:::

### Delete Tags

Deletes the selected tags and removes them from every Link that used them. The Links themselves stay where they are.
