document.getElementById("sendBtn").addEventListener("click", sendMessage);

function sendMessage() {
    const input = document.getElementById("messageInput");
    const text = input.value.trim();
    if (!text) return;

    addMessage("You", text);
    input.value = "";

    chrome.runtime.sendMessage(
        { type: "ask-ai", text },
        (response) => {
            addMessage("AI", response.reply);
        }
    );
}

function addMessage(sender, text) {
    const chat = document.getElementById("chat");
    const div = document.createElement("div");
    div.className = "msg";
    div.innerHTML = `<strong>${sender}:</strong> ${text}`;
    chat.appendChild(div);
}
