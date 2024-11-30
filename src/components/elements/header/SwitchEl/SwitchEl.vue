<template>
  <TagsMo :data="blockData" v-if="device !== Device.XL">
    <TagsMo :data="currentItemData" @event-click-tags="handleClick" />
  </TagsMo>
  <template v-else />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useStateStore } from '@/stores/state.stores';
import { Device, useDevice } from '@services/useDevice';
import { blockData, itemData } from './SwitchEl.data';
import TagsMo from '@modifiers/TagsMo.vue';

  const device = useDevice();
  const stateStore = useStateStore();
  const currentItemData = ref(itemData);

  const handleClick = (data: Record<string, string>) => {
    (currentItemData.value).map((item: Record<string, any>, key: number) => {
      if(key === Number(data.key)) {
        item.classesActive = true
      }
      else item.classesActive = false
    })
    if(Number(data.key) === 1) stateStore.useState({Switch_Header: true})
    else stateStore.useState({Switch_Header: false})
  }
</script>