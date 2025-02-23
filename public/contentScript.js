// contentScript.js
console.log("Content script loaded");

// Create a container for the React app
const container = document.createElement("div");
container.id = "teleparty-extension-root";
// Style the container so it’s visible on the page
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
// Update the path below to match the actual name of your JS bundle
// For example, if your build output has main.9b60af1f.js, then:
script.src = chrome.runtime.getURL("static/js/main.b86ee573.js");
script.onload = function() {
  console.log("React bundle loaded");
  // Optionally remove the script tag after it loads
  this.remove();
};
container.appendChild(script);
