// popup.js
document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById("startPartyBtn");
    startBtn.addEventListener("click", () => {
      // Send message to the background script to inject the content script
      chrome.runtime.sendMessage({ action: "injectContentScript" }, (response) => {
        if (response && response.success) {
          window.close(); // Close the popup after injection
        } else {
          console.error("Injection failed.");
        }
      });
    });
  });
  