<template>
  <TagsMo :data="{...data, styles: `visibility: ${isShow}`}" @event-click-tags="handleClick" />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStateStore } from '@/stores/state.stores';
import { Device, useDevice } from '@services/useDevice';
import { data } from './ButtonBurgerEl.data';
import TagsMo from '@modifiers/TagsMo.vue';

  const stateStore = useStateStore();
  const device = useDevice();

  const isShow = computed(() => {
    let isShow;
      if(device.value === Device.XL) isShow = 'hidden'
      else isShow = 'visible'
    return isShow
  });

  const handleClick = () => {
    const isShow = {ButtonEtc_Nav_Header: true}
    stateStore.useState(isShow)
  }
</script>