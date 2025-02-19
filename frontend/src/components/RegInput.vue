<script setup>
import { defineProps, ref, defineModel, computed } from "vue";

const props = defineProps({
  placeholder: {
    type: String,
    required: true,
  },
});

const error = ref(false);
const classObj = computed(() => ({
  "border-red-300": error.value,
}));

function setError() {}
</script>

<template>
  <input
    type="text"
    class="rounded-xl text-xl p-3 focus:outline-2 focus:outline-zinc-200 bg-zinc-100"
    :class="classObj"
    :placeholder="placeholder"
    v-model="textValue"
  />
</template>
