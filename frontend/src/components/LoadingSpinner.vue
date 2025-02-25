<template>
  <div v-if="loading" class="inline-flex">
    <div class="w-5 h-5 relative">
      <div
        class="absolute w-full h-full border-2 border-blue-500 border-t-transparent rounded-full animate-spin"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  loading?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  loading: true,
});
</script>
