import { ref } from "vue";

const isChatListModalOpen = ref(false);

export function useModals() {
  const toggleChatListModal = () => {
    isChatListModalOpen.value = !isChatListModalOpen.value;
  };

  return {
    toggleChatListModal,
    isChatListModalOpen,
  };
}
