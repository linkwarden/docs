---
sidebar_position: 8
sidebar_label: Upload from SingleFile
---

# Upload from SingleFile

SingleFile is an awesome browser extension that allows you to save complete webpages as a single HTML file on your device. As of Linkwarden 2.12, you can upload your saved links directly from the SingleFile browser extension into Linkwarden. This allows you to easily save articles which are behind paywalls or require authentication directly from your browser.

To use this feature, follow these steps:

1. Open the options menu in the SingleFile extension.
2. Expand the "Destination" section.
3. Select the "upload to a REST Form API" option.
4. Fill in the following fields:
   - **URL**: This is where the upload requests will be sent, it should end with `/api/v1/archives?format=4`, so if you're subscribed to the Cloud plan, use `https://cloud.linkwarden.app/api/v1/archives?format=4`.
   - **authorization token**: Your Linkwarden access token (you can create one in your Linkwarden account settings).
   - **archive data field name**: `file` (do not change this)
   - **archive URL field name**: `url` (do not change this)

The final result should look something like this:

<img src="/img/singlefile_final.jpeg" alt="SingleFile Final Image" height="500px" />

(Where `{{endpoint}}` is where your Linkwarden instance is hosted.)

Now you can start uploading your saved links directly from the SingleFile extension into Linkwarden!
