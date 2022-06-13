module.exports = {

  "manifest_version": 2,
  "name": "Punk Domains",
  "description": 'This extension allows you to access Web3 domains such as .ape, .wagmi, .l2, .op, .smol, etc.',
  "version": "1.1",
  "browser_action": {
    "default_icon": {
      "100": "icons/logo.png"
    },
    "default_title": "Punk Domains",
    "default_popup": "popup/index.html"
  },
  "permissions": ["webNavigation", "storage"],
  "background": {
    "scripts": ["background.js"]
  },
  "icons": {
    "100": "icons/logo.png"
  }

}