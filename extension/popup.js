const askBtn = document.getElementById("ask-btn");
const input = document.getElementById("ai-input");
const output = document.getElementById("output");

askBtn.onclick = () => {
    const text = input.value.trim();
    if (!text) return;

    output.innerHTML = "Thinking...";

    chrome.runtime.sendMessage(
        { type: "ask-ai", text },
        (res) => {
            output.innerHTML = res.reply;
        }
    );
};
