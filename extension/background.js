// Background handles AI requests

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.type === "ask-ai") {
        // TEMP FAKE AI
        const reply = "AI says: " + msg.text;

        sendResponse({ reply });
    }

    return true;
});
