<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
const props = defineProps({
  visible: Boolean,
});
const emit = defineEmits(["update:visible"]);
function closePopup() {
  emit("update:visible", false);
}
</script>

<template>
  <div
    v-if="visible"
    class="fixed top-4 left-4 z-50 flex items-center justify-center"
  >
    <div class="bg-red-300 p-4 rounded">
      <span class="text-xl text-white">Неверный пароль или Email</span>
    </div>
  </div>
</template>
