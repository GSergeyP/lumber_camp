<template>
<router-link
  :to="params ? { name: data.etc.to, params: params } : { name: data.etc.to }"
  :style="[data.style, data.etc.styles]"
  :class="[ 
            data.etc.classes, 
            data.etc.classesActive ? 'active' : '',
            data.etc.classesError ? 'error' : '',
            data.etc.variant ? data.etc.tags + '-' + data.etc.variant : ''
          ]"
  :activeClass="data.etc.clicked ? `${data.etc.tags-(data.etc.variant) ? data.etc.variant : '' }-clicked`: ''"
  :exactActiveClass="data.etc.clicked ? `${data.etc.tags-(data.etc.variant) ? data.etc.variant : '' }-clicked`: ''"
>
    <slot></slot>
    {{ data.etc.title }}
  </router-link>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';

  const props = defineProps<{ data: Record<string, any>, params: Record<string, string> | null }>();
  const { data, params } = toRefs(props);
</script>

<style src="./LinkUI.style.scss" lang="scss" scoped />