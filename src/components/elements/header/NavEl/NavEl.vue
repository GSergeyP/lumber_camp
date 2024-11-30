<template>
  <TagsMo v-if="isShow" :data="blockData">
    <TagsMo :data="itemData"  />
  </TagsMo>
  <template v-else />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStateStore } from '@/stores/state.stores';
import { Device, useDevice } from '@/services/useDevice';
import { blockData, itemData } from './NavEl.data';
import TagsMo from '@modifiers/TagsMo.vue';

  const stateStore = useStateStore();
  const device = useDevice();

  const isShow = computed(() => {
    let isShow;
      if (device.value === Device.XL) isShow = true
      else if (stateStore.state.Switch_Header) isShow = false
      else isShow = true
    return isShow
  })


</script>