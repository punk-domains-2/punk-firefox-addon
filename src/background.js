import { getDomainDataUrl, getDomainHolder } from "./utils/punk";
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
          const domainName = queryParts[0].toLowerCase();
          const tld = "." + queryParts[1].toLowerCase();

          if (Object.keys(getTlds()).includes(tld)) {
            const tldData = getTlds()[tld];

            // check if request comes from a block explorer search
            if (
              url.href.startsWith("https://arbiscan.io/search?") ||
              url.href.startsWith("https://basescan.org/search?") ||
              url.href.startsWith("https://bscscan.com/search?") ||
              url.href.startsWith("https://etherscan.io/search?") ||
              url.href.startsWith("https://era.zksync.network/search?") ||
              url.href.startsWith("https://flare-explorer.flare.network") ||
              url.href.startsWith("https://ftmscan.com/search?") ||
              url.href.startsWith("https://gnosisscan.io/search?") ||
              url.href.startsWith("https://gnosis.blockscout.com") ||
              url.href.startsWith("https://kromascan.com/search?") ||
              url.href.startsWith("https://lineascan.build/search?") ||
              url.href.startsWith("https://nova.arbiscan.io/search?") ||
              url.href.startsWith("https://optimistic.etherscan.io/search?") ||
              url.href.startsWith("https://polygonscan.com/search?") ||
              url.href.startsWith("https://scan.zkfair.io") ||
              url.href.startsWith("https://scrollscan.com/search?") ||
              url.href.startsWith("https://songbird-explorer.flare.network")
            ) {
              // if so, redirect user to domain owner's address page on block explorer
              getDomainHolder(domainName, tldData.address, tldData.chainId).then(function(result) {
                if (result && result.startsWith("0x")) {
                  chrome.tabs.update(data.tabId, { url: "https://" + url.host + "/address/" + result });
                }
              });
            } else {
              // otherwise check if user has a URL stored in domain data and redirect there, or redirect to domain page on Punk Domains
              getDomainDataUrl(domainName, queryParts[1].toLowerCase(), tldData.address, tldData.chainId, result.punkFastMode).then(function(result) {
                if (result && result.startsWith("http")) {
                  chrome.tabs.update(data.tabId, { url: result });
                }
              });
            }
          }
        }
      }
    }
  });

});
