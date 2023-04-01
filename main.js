document.addEventListener("DOMContentLoaded", () => {
  const path = chrome.extension.getURL("fun.css");
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = path;
  document.head.appendChild(link);
});
