<template>
  <TagsMo :data="currentData" />
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed, ref, watchEffect } from 'vue';
import { RouteName } from '@/router/router.constants';
import { data } from './LogoEl.data';
import TagsMo from '@modifiers/TagsMo.vue';

  const route = useRoute();
  const currentData = ref();
  
  const src = computed(() => {
    let src;
      if (route.name === RouteName.HOME ) src = 'common/logo_white_headerBl.png' 
      else src = 'common/logo_black_headerBl.png'
    return src
  })

  watchEffect(() => {
    currentData.value = {...data, src: src.value}
  })
</script>