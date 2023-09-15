document.addEventListener("DOMContentLoaded", () => {
  const path = chrome.extension.getURL("fun.css");
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = path;
  document.head.appendChild(link);

  // content.js
function hidePromotedJobPostings() {
  const promotedPostings = document.querySelectorAll('[class*="promo"]');
  promotedPostings.forEach(posting => {
    posting.style.display = 'none'; 
  });
}

});
