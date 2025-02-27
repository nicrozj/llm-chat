import { chats, useChats } from "@/composables/useChats";
import { useMessages } from "@/composables/useMessages";
import { useModels } from "@/composables/useModels";
import { ref } from "vue";

const { currentChat } = useChats();
const { isLoading } = useMessages();
const { selectedModel } = useModels();

export const ChatAPI = {
  async streamGroqResponse(message: string) {
    const API_KEY = (import.meta as any).env.VITE_API_KEY;
    const API_URL = "https://api.groq.com/openai/v1/chat/completions";

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },

      body: JSON.stringify({
        model: selectedModel.value,
        messages: [{ role: "user", content: `${message}` }],
        stream: true,
      }),
    });
    if (!response.ok) {
      throw new Error(`Request error: ${response.status}`);
    }

    const reader = response.body?.getReader();
    if (!reader) throw new Error("No response body");

    const decoder = new TextDecoder("utf-8");
    let responseText = "";

    currentChat.value.addMessage("response", "");
    const responseMessage = currentChat.value.messages.slice(-1)[0];

    while (true) {
      const data = await reader?.read();
      if (data?.done) break;

      const chunk = decoder.decode(data?.value);

      const lines = chunk
        .split("\n")
        .filter((line) => line.trim() !== "")
        .map((line) => line.replace(/^data: /, ""));

      for (const line of lines) {
        if (line === "[DONE]") continue;

        try {
          const json = JSON.parse(line);
          const content = json.choices[0]?.delta?.content || "";
          if (content) {
            responseText += content;
            responseMessage.content = responseText;
          }
        } catch (error) {
          console.error("Ошибка при парсинге JSON:", error);
        }
      }
    }
    localStorage.setItem("chats", JSON.stringify(chats));
    isLoading.value = false;
    return responseText;
  },
};
