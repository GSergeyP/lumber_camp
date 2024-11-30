<template>
  <form
    :id="data.etc.id"
    :method="data.etc.method"
    :style="[data.style, data.etc.styles]"
    :class="[
              data.etc.classes,
              data.etc.classesActive ? 'active' : '',
              data.etc.classesError ? 'error' : ''
            ]"
  >
    <slot />
</form>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';

  const props = defineProps<{ data: Record<string, any> }>();
  const { data } = toRefs(props);
</script>