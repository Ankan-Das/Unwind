// background.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "injectContentScript") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length) {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          files: ["trusted-types-polyfill.js", "contentScript.js"]
        }, () => {
          sendResponse({ success: true });
        });
      }
    });
    return true;
  }
});
