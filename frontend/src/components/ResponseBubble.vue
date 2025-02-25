<script setup lang="ts">
import { ref, defineEmits } from "vue";

interface Props {
  messageId?: string;
}

const props = withDefaults(defineProps<Props>(), {
  messageId: "",
});

const emit = defineEmits(["rated"]);
const rating = ref(0);

const rate = (value: number) => {
  rating.value = value;
  emit("rated", { messageId: props.messageId, rating: value });
};
</script>

<template>
  <div class="bg-secondly rounded-xl px-4 py-2 w-max">
    <slot name="response"></slot>
  </div>
</template>
