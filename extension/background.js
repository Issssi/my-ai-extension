chrome.runtime.onMessage.addListener(async (msg, sender, sendResponse) => {
    if (msg.type === "ask-ai") {
        try {
            const reply = await askGroq(msg.text);
            sendResponse({ reply });
        } catch (error) {
            // If Groq fails → use FREE HuggingFace fallback
            const fallback = await askHF(msg.text);
            sendResponse({ reply: fallback });
        }
    }
    return true;
});

async function askGroq(prompt) {
    const apiKey = "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"; // ← REPLACE THIS

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "llama3-70b-8192",
            messages: [{ role: "user", content: prompt }]
        })
    });

    const data = await response.json();
    return data.choices[0].message.content;
}

async function askHF(prompt) {
    const response = await fetch(
        "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer hf_xxxxxx" // optional: HF key
            },
            body: JSON.stringify({ inputs: prompt })
        }
    );

    const data = await response.json();
    return data[0].generated_text || "Error from free AI.";
}
