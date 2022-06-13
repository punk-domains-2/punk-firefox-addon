# Punk Domains Firefox Add-ons

## For Mozilla Reviewers: Steps to generate an ZIP file and run it in Firefox

### Build requirements

- node.js v18

### Run the build script

Run `sh build.sh` in the root of this folder.

### ZIP file

Go to `/dist/web-ext-artifacts/` and find a file named `punk_domains-***.zip` (if you need an XPI file, rename this `punk_domains-***.zip` file into `punk_domains-***.xpi`).

### Run ZIP file in Firefox

Open Firefox and go to `about:debugging#/runtime/this-firefox`. Then click the `Load Temporary Add-on...` button and choose the ZIP file.

The add-on is now installed.

## Development

Quickstart:

```bash
npm install
npm run serve
```

Firefox will open automatically with Add-ons.

### Temporary build

```bash
npm run build
```

Open Firefox and go to "about:debugging#/runtime/this-firefox".
Click "Load Temporary Add-on..." button and choose zip file in `/dist/web-ext-artifacts/punk_domains-***.zip`.

### Publish

```bash
npm run prod
```

Do not zip the dist folder manually. Instead, go to `/dist/web-ext-artifacts/` and find a file named `punk_domains-***.zip`.

Reference this article
 - https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/

