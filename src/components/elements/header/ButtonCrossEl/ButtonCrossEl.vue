<template>
  <TagsMo :data="{...data, styles: `visibility: ${isShow}`}" @event-click-tags="handleClick" />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStateStore } from '@/stores/state.stores';
import { Device, useDevice } from '@services/useDevice';
import { data } from './ButtonCrossEl.data';
import TagsMo from '@modifiers/TagsMo.vue';

  const stateStore = useStateStore();
  const device = useDevice();

  const isShow = computed(() => {
    let isShow;
      if(device.value === Device.XL) isShow = 'hidden'
      else if(stateStore.state.ButtonEtc_Nav_Header) isShow = 'visible'
      else isShow = 'hidden'
    return isShow
  });
  
  const handleClick = () => {
    const isShow = {ButtonEtc_Nav_Header: false}
    stateStore.useState(isShow)
  }
</script>