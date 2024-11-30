<template>
  <TagsMo :data="blockData">
    <TagsMo :data="currentData" @event-click-tags="handleClick" />
  </TagsMo>
</template>

<script setup lang="ts">
import { useStateStore } from '@/stores/state.stores';
import { useRoute } from 'vue-router';
import { RouteName } from '@/router/router.constants';
import { Device, useDevice } from '@services/useDevice';
import { computed } from 'vue';
import { blockData, itemData } from './ButtonEtcEl.data';
import TagsMo from '@modifiers/TagsMo.vue';

  const stateStore = useStateStore();
  const route = useRoute();
  const device = useDevice();
  const currentData = computed(() => {
    let currentData = [],
        total; 
      if(route.name !== RouteName.HOME && device.value === Device.XL) total = itemData.length
      else total = itemData.length - 1
      for(let i = 0; i < total; i++) {
        currentData.push(itemData[i])
      }
    return currentData
  });
  const handleClick = () => {
    stateStore.useState({Form_Modal: true})
  }
</script>