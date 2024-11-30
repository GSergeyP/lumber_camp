<template>
  <TagsMo v-if="label" :data="label">
    <input
      :type="data.etc.type"
      :id="data.etc.id"
      :name="data.etc.id"
      :placeholder="data.etc.placeholder"
      :pattern="data.etc.pattern"
      :style="[data.style, data.etc.styles]"
      :class="[
                data.etc.classes,
                data.etc.classesActive ? 'active' : '',
                data.etc.classesError ? 'error' : '', 
                data.etc.variant ? data.etc.type + '-' + data.etc.variant : ''
              ]"
      :value="modelValue"
      :required="data.etc.required ? true : false"
      :autocomplete="data.etc.autocomplete ? 'on' : 'off'"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" 
    />
    <slot />
  </TagsMo>
  <input 
    v-else
    :type="data.etc.type"
    :id="data.etc.id"
    :name="data.etc.id"
    :placeholder="data.etc.placeholder"
    :pattern="data.etc.pattern"
    :style="[data.style, data.etc.styles]"
    :class="[
              data.etc.classes,
              data.etc.classesActive ? 'active' : '',
              data.etc.classesError ? 'error' : '', 
              data.etc.variant ? data.etc.type + data.etc.variant : ''
            ]"
    :value="modelValue"
    :required="data.etc.required ? true : false"
    :autocomplete="data.etc.autocomplete ? 'on' : 'off'"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" 
  />
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import TagsMo from '@modifiers/TagsMo.vue';

  const props = defineProps<{ 
    data: Record<string, any>, 
    modelValue: string | undefined,
    label: Record<string, any> | null
  }>();
  const { data } = toRefs(props);
</script>

<style src="./InputUI.style.scss" lang="scss" scoped />