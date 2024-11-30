<template>
  <TagsMo 
    v-if="stateStore.state.Search_Modal_Header" 
    
    :data="blockData" 
  >
    <TagsMo :data="{...itemData, title: `v1-${stateStore.state.Search_Modal_Header}`, click: `v1-${stateStore.state.Search_Modal_Header}`}" @event-click-tags="handleClick" />
    <TagsMo :data="{...itemData, title: `v2-${stateStore.state.Search_Modal_Header}`, click: `v2-${stateStore.state.Search_Modal_Header}`}" @event-click-tags="handleClick" />
    <TagsMo :data="{...itemData, title: `v3-${stateStore.state.Search_Modal_Header}`, click: `v3-${stateStore.state.Search_Modal_Header}`}" @event-click-tags="handleClick" />
  </TagsMo>
  <template v-else />
</template>

<script setup lang="ts">
import { useStateStore } from '@/stores/state.stores';
import { blockData, itemData } from './ModalEl.data';
import { ID } from '@/constants/id.constants';
import TagsMo from '@modifiers/TagsMo.vue';

  const stateStore = useStateStore();

  const handleClick = (data: Record<string, string>) => {
    alert(data.data)
    const inputSearchClear =  document.getElementById(ID.INPUT_SEARCH);
      stateStore.useState({Search_Modal_Header: null});
      (inputSearchClear as HTMLInputElement).value = '';
  }
</script>