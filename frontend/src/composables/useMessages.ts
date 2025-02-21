import { reactive, ref } from "vue";
import { ChatAPI } from "@/services/apiService";

const isLoading = ref(false);

export interface Message {
  type: "request" | "response";
  content: string;
}

const messages: Message[] = reactive([]);

export const useMessages = () => {
  const addMessage = (message: Message) => {
    messages.push(message);
  };

  const sendMessage = async (message: string) => {
    isLoading.value = true;
    try {
      const response = await ChatAPI.getResponse(message);
      return response;
    } catch (err) {
      console.log(err);
    } finally {
      isLoading.value = false;
    }
  };

  return { isLoading, sendMessage, messages, addMessage };
};
