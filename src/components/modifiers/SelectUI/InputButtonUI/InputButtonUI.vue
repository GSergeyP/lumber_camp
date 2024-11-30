<template>
  <TagsMo v-if="label" :data="label">
    <input
      :type="data.etc.type"
      :id="data.etc.id"
      :style="[data.style, data.etc.styles]"
      :class="[
                data.etc.classes,
                data.etc.classesActive ? 'active' : '',
                data.etc.classesError ? 'error' : '', 
                data.etc.variant ? data.etc.type + '-' + data.etc.variant : ''
              ]"
      :value="data.etc.value"
    />
    <slot />
  </TagsMo>
  <input
    v-else
    :type="data.etc.type"
    :id="data.etc.id"
    :style="[data.style, data.etc.styles]"
    :class="[
              data.etc.classes,
              data.etc.classesActive ? 'active' : '',
              data.etc.classesError ? 'error' : '', 
              data.etc.variant ? data.etc.type + '-' + data.etc.variant : ''
            ]"
    :value="data.etc.value"
  />
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import TagsMo from '@modifiers/TagsMo.vue';

  const props = defineProps<{ data: Record<string, any>, label: Record<string, any> | null }>();
  const { data } = toRefs(props);
</script>

<style src="./InputButtonUI.style.scss" lang="scss" scoped />
