// Inject sidebar when page loads
chrome.runtime.onMessage.addListener((msg) => {
    if (msg.type === "toggle-sidebar") {
        if (!document.getElementById("my-ai-sidebar")) {
            const iframe = document.createElement("iframe");
            iframe.src = chrome.runtime.getURL("sidebar.html");
            iframe.id = "my-ai-sidebar";

            iframe.style.position = "fixed";
            iframe.style.top = "0";
            iframe.style.right = "0";
            iframe.style.width = "350px";
            iframe.style.height = "100vh";
            iframe.style.border = "none";
            iframe.style.zIndex = "999999";
            iframe.style.background = "#111";

            document.body.appendChild(iframe);
        } else {
            document.getElementById("my-ai-sidebar").remove();
        }
    }
});
