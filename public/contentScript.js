// contentScript.js
console.log("Content script loaded");

// Create a container for the React app
const container = document.createElement("div");
container.id = "teleparty-extension-root";
container.style.position = "fixed";
container.style.top = "20px";
container.style.right = "20px";
container.style.width = "300px";
container.style.height = "200px";
container.style.background = "rgba(0, 0, 0, 0.8)";
container.style.color = "#fff";
container.style.zIndex = "99999";
document.body.appendChild(container);

console.log("Container appended:", container);

// Dynamically load the React bundle
const script = document.createElement("script");
script.src = chrome.runtime.getURL("static/js/main.1dd862f0.js"); // Update with actual filename
script.onload = function () {
  console.log("React bundle loaded");
  this.remove();
};
container.appendChild(script);
