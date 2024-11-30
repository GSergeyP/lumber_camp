<template>
  <component
    :is="Icon[data.etc.title as keyof typeof Icon]"
    :style="[data.style, data.etc.styles]"
    :class="[
              data.etc.classes,
              data.etc.classesActive ? 'active' : '',
              data.etc.classesError ? 'error' : ''
            ]"
/>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import * as Icon from '@assets/icons';

  const props = defineProps<{ data: Record<string, any> }>();
  const { data } = toRefs(props);
</script>