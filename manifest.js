module.exports = {

  "manifest_version": 2,
  "name": "Punk Domains",
  "version": "0.0.1",
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
  },
  "browser_specific_settings": {
    "gecko": {
      "id": "punk@domain.com",
      "strict_min_version": "50.0"
    }
  }

}