<template>
  <TagsMo :data="blockData">
    <template v-for="(item, key) in itemData" :key="key">
      <TagsMo :data="item.card">
        <TagsMo :data="item.topCard">
          <TagsMo :data="item.numberIcon" />
        </TagsMo>
        <TagsMo :data="item.bottomCard">
          <TagsMo :data="item.h2" />
          <TagsMo :data="item.p" />
        </TagsMo>
      </TagsMo>
      <TagsMo v-if="key < 2" :data="arrowIcon" />
      <template v-else />
    </template> 
  </TagsMo>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { blockData, arrowIcon, useItemData } from './CardDeliveryEl.data';
import TagsMo from '@modifiers/TagsMo.vue';

  const itemData = computed(() => {
    return useItemData()
  })
</script>