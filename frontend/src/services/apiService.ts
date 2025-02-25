import axios from "axios";

export const ChatAPI = {
  async getResponse(message: string) {
    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        messages: [
          {
            role: "user",
            content: `${message}`,
          },
        ],
        model: "llama-3.2-3b-preview",
      },
      {
        headers: {
          Authorization:
            "Bearer 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",
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  },
};
