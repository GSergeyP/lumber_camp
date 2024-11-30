<template>
  <TagsMo :data="blockData">
    <template v-for="(item, key) in itemData" :key="key">
      <TagsMo :data="item.card">
        <TagsMo :data="item.numberIcon" />
        <TagsMo :data="item.h2" />
        <TagsMo :data="item.p" />
      </TagsMo>
    </template> 
  </TagsMo>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { blockData, useItemData } from './CardPaymentEl.data';
import TagsMo from '@modifiers/TagsMo.vue';

  const itemData = computed(() => {
    return useItemData()
  })
</script>