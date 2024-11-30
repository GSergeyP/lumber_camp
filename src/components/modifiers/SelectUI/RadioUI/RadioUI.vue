<template>
  <TagsMo v-if="label" :data="label">
    <input
      :type="data.etc.tags"
      :id="data.etc.id"
      :name="data.etc.name"
      :style="[data.style, data.etc.styles]"
      :class="[
                data.etc.classes,
                data.etc.classesActive ? 'active' : '',
                data.etc.classesError ? 'error' : '', 
                data.etc.variant ? data.etc.tags + data.etc.variant : ''
              ]"
      :value="data.etc.value"
    />
    <template v-if="data.etc.span">
      <span />
    </template>
    <template v-else />
    <slot />
  </TagsMo>
  <input
    v-else
    :type="data.etc.tags"
    :id="data.etc.id"
    :name="data.etc.name"
    :style="[data.style, data.etc.styles]"
    :class="[
              data.etc.classes,
              data.etc.classesActive ? 'active' : '',
              data.etc.classesError ? 'error' : '', 
              data.etc.variant ? data.etc.tags + data.etc.variant : ''
            ]"
    :value="data.etc.value"
  />
  <template v-if="data.etc.span">
    <span />
  </template>
  <template v-else />
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import TagsMo from '@modifiers/TagsMo.vue';

  const props = defineProps<{ data: Record<string, any>, label: Record<string, any> | null }>();
  const { data } = toRefs(props);
</script>