<template>
  <component :is="$route.meta.layout">
    <router-view />
  </component>
</template>

<script setup lang="ts">
import { computed, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { RouteName } from '@/router/router.constants';
import { useDevice } from '@services/useDevice';
import { keyHTML } from '@constants/html.constants';

  const device = useDevice();
  const route = useRoute();

  const isTheme = computed(() => {
    let isTheme;
      if(route.name === RouteName.HOME) isTheme = 'dark'
      else isTheme = 'light'
    return isTheme
  })
  
  watchEffect(() => {
    document.documentElement.setAttribute(keyHTML.DEVICE, device.value);
    document.documentElement.setAttribute(keyHTML.THEME, isTheme.value);
  });

</script>
