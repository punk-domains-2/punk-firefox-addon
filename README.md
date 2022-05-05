# Punk Domains Firefox Add-ons

### Development

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
Click "Load Temporary Add-on..." button and choose zip file in "/dist/web-ext-artifacts/punk_domains-***.zip".

### Publish

```bash
npm run prod
```

Reference this article
 - https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/