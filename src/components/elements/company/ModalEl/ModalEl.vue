<template>
  <TagsMo v-if="stateStore.state.Company_Modal_Show" :data="blockData">
    <TagsMo :data="itemData" @event-click-tags="handleClick" />
  </TagsMo>
  <template v-else />
</template>

<script setup lang="ts">
import { useStateStore } from '@/stores/state.stores';
import { blockData, itemData } from './ModalEl.data';
import TagsMo from '@modifiers/TagsMo.vue';

  const stateStore = useStateStore();
  const handleClick = () => {
    stateStore.useState({Company_Modal_Show: false})
  }
</script>
