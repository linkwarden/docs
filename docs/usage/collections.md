---
sidebar_position: 4
---

# Collections

Collections are folders for your Links. Every Link lives in exactly one Collection, and a Collection can be nested inside another, shared with other users, or published for anyone to read.

Links saved without a Collection go to one called "Unorganized", which Linkwarden creates the first time it's needed.

## Finding Your Collections

The sidebar lists your Collections under the "**Collections**" entry. Clicking the entry opens the Collections page; clicking the <Icon name="caret-right-fill" /> caret beside it expands the tree in place, where each Collection shows its icon, name, and Link count. A Collection with sub-collections gets its own caret for expanding.

The Collections page shows a card per Collection you own, with its name, Link count, creation date, and the avatars of everyone who has access. A <Icon name="globe2" /> globe icon means the Collection is public. Collections owned by other people that you've been added to are listed separately below, under "**Other Collections**".

The <Icon name="chevron-expand" /> chevron button at the top right sorts the cards by creation date or name.

:::note

The Link count on a parent Collection in the sidebar includes the Links in its sub-collections. The count on a Collection card counts only the Links directly inside it.

:::

## Creating a Collection

There are a few ways in, and they all open the same dialog:

- The <Icon name="folder-plus" /> folder-plus icon next to the "**+ New Link**" button in the sidebar.
- The "**+**" button next to the heading on the Collections page.
- The "**New Collection**" button on the Collections page when you don't have any yet.

**Name** is the only required field. **Description** is optional and shows up under the title on the Collection's page and on its public page.

Collection names don't have to be unique, so nothing stops you from having two Collections called "Recipes".

### Choosing an Icon and Color

The large <Icon name="folder-fill" /> folder button to the left of the name field opens the icon picker:

- Search the icon set and click an icon to use it instead of the default folder.
- The color picker below sets the icon's color. It applies to the plain folder too, and tints the header of the Collection's page and the background of its card.
- The weight radio buttons (**Regular**, **Thin**, **Light**, **Bold**, **Fill**, **Duotone**) change how the icon is drawn.
- "**Reset Defaults**" clears the icon and puts the color back to your accent color.

Click outside the picker to apply your choice, then save the Collection.

## Editing a Collection

Open the <Icon name="three-dots" /> three-dots menu, either on the Collection's card or at the top of the Collection's page, and click "**Edit Collection Info**" to change the name, description, icon, or color.

:::note

Only the owner of a Collection can edit it. Members, whatever their role, don't see this option.

:::

## Sub-Collections

A Collection can hold other Collections. To create one, open a Collection's page, click the <Icon name="three-dots" /> three-dots menu, and choose "**Create Sub-Collection**". The dialog is the same as for a new Collection and shows which Collection it's being created under.

You can also nest an existing Collection by dragging it onto another one in the sidebar.

Sub-collections appear as cards at the top of their parent's page, above its Links.

A few rules worth knowing:

- You can only nest Collections you own. Dragging a Collection you're a member of, or dropping one onto a Collection you don't own, is refused.
- The owner can create sub-collections anywhere in their tree. Members can only do it with the **Admin** role.
- A new sub-collection starts with the same members and roles as its parent. Changes made to the parent's members afterwards aren't passed down automatically, see [Applying Members to Sub-Collections](#applying-members-to-sub-collections).
- A sub-collection created by an Admin member belongs to the Collection's owner, not to the member who created it. The member is added to it with the Admin role.

## Reordering Collections

Drag Collections in the sidebar to put them in the order you want. The order is saved to your account, so it follows you between devices and is yours alone: it has no effect on what other members of a shared Collection see.

Dropping a Collection onto another nests it instead of reordering it. Dropping it back at the top level un-nests it.

## Moving Links Into a Collection

Besides setting the Collection in a Link's edit modal, you can drag a Link card onto any Collection in the sidebar to move it there. [Bulk Actions](/usage/bulk-actions) can move many Links at once.

## Showing a Collection on Your Dashboard

Your [Dashboard](/usage/dashboard) can show a Collection as its own row. Open the layout dropdown at the top of the Dashboard, find the Collection in the list, and enable it. The rows can be reordered from the same dropdown.

## Sharing a Collection

Open the <Icon name="three-dots" /> three-dots menu on the Collection's card or page and click "**Share and Collaborate**". Members see this as "**View Team**" instead, and get a read-only view of who's involved.

You can also click the stack of avatars on a Collection card or page to open the same dialog.

### Make a Collection Public

Tick "**Make this a public collection**" and save. The dialog then shows a sharable link, in the form `https://your-instance/public/collections/<id>`, with a button to copy it.

Anyone with that link can read the Collection without an account. The public page shows the Collection's name, description, owner, and members, along with its Links, and lets visitors search within it, filter by tag, sort, and switch between the Card, Masonry, and List views. It also publishes an [RSS feed](/usage/rss-subscriptions#publishing-a-feed-from-a-collection).

:::caution

A public Collection exposes the names and usernames of its members too, not only its Links.

Publishing a Collection doesn't publish its sub-collections. Each one has its own setting, and visitors to the parent's public page don't see them at all.

:::

Public Collections are marked with a <Icon name="globe2" /> globe icon in the sidebar and on their card. Untick the box and save to take one offline again.

### Adding a Member

Under "**Members**", type a username or email address into the textbox and press Enter or click the add button. The user has to already have an account on your instance.

New members are added as **Viewer**. Pick a different role from the dropdown next to their name if you want to give them more than read access.

:::note

Members aren't added until you click "**Save Changes**". Closing the dialog before that discards them.

:::

### Roles

Each member has one of three roles, which you can change from the dropdown next to their name:

| Role            | What they can do                                                                         |
| --------------- | ---------------------------------------------------------------------------------------- |
| **Viewer**      | Read the Links and their preserved content.                                              |
| **Contributor** | Everything a Viewer can do, plus add new Links to the Collection.                        |
| **Admin**       | Full access to the Links: add, edit, and delete any of them, and create sub-collections.  |

Some things stay with the owner no matter what role a member has: editing the Collection's name, icon, and description, managing members and public sharing, moving or reordering it, and deleting it.

:::caution

Every member can read the Collection, including the content of preserved Links, so only add people you trust with it. Downgrading someone to Viewer doesn't hide anything they could already see.

:::

### Applying Members to Sub-Collections

Below the member list is "**Apply members and roles to subcollections**". With it ticked, saving copies the member list to every Collection nested underneath, however deep.

:::caution

This replaces the members of those sub-collections rather than adding to them. Anyone who had access to a sub-collection but isn't in the list you're saving loses it.

:::

### Removing a Member

Click the "**x**" next to a member, then "**Save Changes**". They keep their own Links; only their access to this Collection goes away.

## Leaving a Collection

If you're a member rather than the owner, the <Icon name="three-dots" /> three-dots menu offers "**Leave Collection**" in place of the delete option. Leaving removes your access and nothing else: the Collection and its Links stay as they are for everyone else, including any Links you added.

## Opening Every Link in a Collection

The <Icon name="three-dots" /> three-dots menu on a Collection's page has "**Open all Links**", which opens each Link currently listed in its own browser tab. Browsers usually block this the first time, so allow pop-ups for your Linkwarden instance if nothing happens.

## Deleting a Collection

Open the <Icon name="three-dots" /> three-dots menu and click "**Delete Collection**", then confirm.

:::caution

Deleting a Collection also deletes its sub-collections, every Link inside all of them, and the preserved files that go with those Links. It can't be undone, and members who had access lose it along with the content.

To keep the Links, move them to another Collection first, with [Bulk Actions](/usage/bulk-actions) if there are many.

:::

Only the owner can delete a Collection.
