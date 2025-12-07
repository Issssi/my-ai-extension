// Simple sidebar AI UI logic
const input = document.getElementById("ai-input");
const sendBtn = document.getElementById("ai-send");
const output = document.getElementById("ai-output");

sendBtn.onclick = async () => {
    const userText = input.value.trim();
    if (!userText) return;

    output.innerHTML += `<div class="user">${userText}</div>`;
    input.value = "";

    chrome.runtime.sendMessage(
        { type: "ask-ai", text: userText },
        (res) => {
            output.innerHTML += `<div class="ai">${res.reply}</div>`;
        }
    );
};
