<template>
  <TagsMo v-if="isShow" :data="blockData">
    <TagsMo :data="itemData" />
  </TagsMo>
  <template v-else />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStateStore } from '@/stores/state.stores';
import { useRoute } from 'vue-router';
import { RouteName } from '@/router/router.constants';
import { Device, useDevice } from '@services/useDevice';
import { blockData, itemData } from './NavOtherEl.data';
import TagsMo from '@modifiers/TagsMo.vue';

  const stateStore = useStateStore();
  const route = useRoute();
  const device = useDevice();

  const isShow = computed(() => {
    let isShow;
      if (device.value === Device.XL && route.name !== RouteName.HOME) isShow = true
      else if (device.value !== Device.XL && stateStore.state.Switch_Header) isShow =true
      else isShow = false
    return isShow
  })
</script>