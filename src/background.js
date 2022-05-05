import { getDomainDataUrl } from "./utils/punk";
import { getTlds } from "./utils/tlds";

browser.webNavigation.onBeforeNavigate.addListener(function(data) {

  browser.storage.local.get(['punkExtensionEnabled', 'punkFastMode'], function(result) {
    if (result.punkExtensionEnabled === "Enabled") {
      const url = new URL(data.url);
      const urlParams = new URLSearchParams(url.search);
      const query = urlParams.get('q');

      if (query && query.includes(".") && !query.includes(" ")) {
        const queryParts = query.split(".");

        if (queryParts.length === 2) {
          const domainName = queryParts[0];
          const tld = "." + queryParts[1];

          if (Object.keys(getTlds()).includes(tld)) {
            const tldData = getTlds()[tld];

            getDomainDataUrl(domainName, queryParts[1], tldData.address, tldData.chainId, result.punkFastMode).then(function(result) {
              if (result && result.startsWith("http")) {
                browser.tabs.update(data.tabId, { url: result });
              }
            });
          }
        }
      }
    }
  });

});
