import { ref } from "vue";
import { ChatAPI } from "@/services/apiService";

const isLoading = ref(false);

export function useChat() {
  const error = ref(null);

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

  return { isLoading, error, sendMessage };
}
