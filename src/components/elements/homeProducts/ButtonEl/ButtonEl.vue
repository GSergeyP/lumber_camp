<template>
  <TagsMo :data="blockData">
    <TagsMo :data="itemData" @event-click-tags="handleclick" />
  </TagsMo>
</template>

<script setup lang="ts">
import { useStateStore } from '@/stores/state.stores';
import { blockData, itemData } from './ButtonEl.data';
import TagsMo from '@modifiers/TagsMo.vue';

  const stateStore = useStateStore();
  const handleclick = (data: Record<string, string>) => {
    let index,
        key_DISMANTLED,
        key_CurrentData,
        currentData = [];

    if (data.data === 'prev' ) {
      index = 1;
      key_DISMANTLED = stateStore.state.Card_Home_Products.length - 1;
      key_CurrentData = 0;
    }
    else {
      index = 0;
      key_DISMANTLED = 0;
      key_CurrentData = stateStore.state.Card_Home_Products.length - 1;
    }
    
    const { [key_DISMANTLED]: DISMANTLED, ...dismantlingData } = stateStore.state.Card_Home_Products;

      for (let item in dismantlingData) {
        currentData[index] = dismantlingData[item];
        index++;
      } 

    currentData[key_CurrentData] = DISMANTLED;
    stateStore.useState({Card_Home_Products: currentData})
  }
</script>