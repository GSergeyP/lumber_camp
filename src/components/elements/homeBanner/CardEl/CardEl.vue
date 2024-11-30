<template>
  <TagsMo :data="blockData">
    <TagsMo 
      v-for="(item, key) in currentItemData" 
      :key="key" 
      :data="{
                ...item.card, 
                mouseover: `${key}`,
                mouseout: `${key}`
              }"
      @event-mouseover-tags="handleMouseOver"
      @event-mouseout-tags="handleMouseOut"
    >
      <TagsMo :data="item.header" />
      <TagsMo :data="item.h" />
      <TagsMo :data="item.p" />
      <TagsMo :data="{...item.a, click: `${key}`}" @event-click-tags="handleMouseOut"/>
    </TagsMo>
  </TagsMo>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { blockData, useItemData } from './CardEl.data';
import TagsMo from '@modifiers/TagsMo.vue';

  const itemData = useItemData();
  const currentItemData = ref(itemData);

  const handleMouseOver = (data: Record<string, string>) => {
    if(!currentItemData.value[Number(data.data)].card.classesActive) currentItemData.value[Number(data.data)].card.classesActive = true
  }
  const handleMouseOut = (data: Record<string, string>) => {
    if(currentItemData.value[Number(data.data)].card.classesActive) currentItemData.value[Number(data.data)].card.classesActive = false
  }
</script>
