<template>
  <TagsMo v-if="label" :data="label">
    <textarea
      :id="data.etc.id"
      :placeholder="data.etc.placeholder"
      :style="[data.style, data.etc.styles]"
      :class="[
                data.etc.classes,
                data.etc.classesActive ? 'active' : '',
                data.etc.classesError ? 'error' : '', 
                data.etc.variant ? data.etc.type + data.etc.variant : ''
              ]" 
    />
    <slot />
  </TagsMo>
  <textarea
    v-else
    :id="data.etc.id"
    :placeholder="data.etc.placeholder"
    :style="[data.style, data.etc.styles]"
    :class="[
              data.etc.classes,
              data.etc.classesActive ? 'active' : '',
              data.etc.classesError ? 'error' : '', 
              data.etc.variant ? data.etc.type + data.etc.variant : ''
            ]" 
  />
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import TagsMo from '@modifiers/TagsMo.vue';

  const props = defineProps<{ data: Record<string, any>, label: Record<string, any> | null }>();
  const { data } = toRefs(props);
</script>