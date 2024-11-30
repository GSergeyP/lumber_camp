<template>
  <TagsMo 
    v-for="(item, key) in itemLeftData" 
    :key="key" 
    :data="blockData"
  >
    <TagsMo :data="leftData">
      <TagsMo :data="item" />
    </TagsMo>
    <TagsMo :data="rightData">
      <slot :signalSlot="`${key}`"></slot>
      <TagsMo v-if="device !== Device.XS && device !== Device.SM" :data="itemRightData[key]" />
      <TagsMo v-else-if="stateStore.state.Contacts_Contacts[key]" :data="itemRightData[key]" />
      <template v-else />
    </TagsMo>
  </TagsMo>
</template>

<script setup lang="ts">
import { useStateStore } from '@/stores/state.stores';
import { Device, useDevice } from '@/services/useDevice';
import { blockData, leftData, itemLeftData, rightData, itemRightData } from './ContactsEl.data';
import TagsMo from '@modifiers/TagsMo.vue';

  const device = useDevice();
  const stateStore = useStateStore();
</script>
