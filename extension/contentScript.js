// Inject a floating sidebar into the page
const iframe = document.createElement("iframe");
iframe.src = chrome.runtime.getURL("sidebar.html");
iframe.style.position = "fixed";
iframe.style.top = "0";
iframe.style.right = "0";
iframe.style.width = "350px";
iframe.style.height = "100%";
iframe.style.border = "none";
iframe.style.zIndex = "999999";

document.body.appendChild(iframe);
