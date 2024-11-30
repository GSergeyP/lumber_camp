<template>
  <component
    :is="data.etc.tags"
    :style="[data.style, data.etc.styles]"
    :class="[
              data.etc.classes,
              data.etc.classesActive ? 'active' : '',
              data.etc.classesError ? 'error' : '',
              data.etc.variant ? data.etc.tags + '-' + data.etc.variant : ''
            ]"
    :for=" data.etc.for"
  >
    <slot />
    {{ data.etc.title }}
  </component>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';

  const props = defineProps<{ data: Record<string, any> }>();
  const { data } = toRefs(props);
</script>

<style src="./TagsUI.scss" lang="scss" scoped />