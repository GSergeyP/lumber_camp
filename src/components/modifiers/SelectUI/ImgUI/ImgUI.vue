<template>
  <img
    :src="baseURL + data.etc.src"
    :atl="data.etc.alt"
    :style="[data.style, data.etc.styles]"
    :class="[
              data.etc.classes,
              data.etc.classesActive ? 'active' : '',
              data.etc.classesError ? 'error' : ''
            ]"
  />
</template>

<script setup lang="ts">
import { ref, toRefs } from 'vue';
  
  const baseURL = ref<string>(import.meta.env.VITE_BASE_IMG_URL);
  const props = defineProps<{ data: Record<string, any> }>();
  const { data } = toRefs(props);
</script>