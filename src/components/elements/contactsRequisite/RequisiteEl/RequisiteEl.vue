<template>
 <TagsMo :data="blockData">
    <TagsMo v-for="(item, key) in itemHeadingData" :key="key" :data="item">
      <TagsMo :data="itemContentData[key]" />
    </TagsMo>
 </TagsMo>
</template>

<script setup lang="ts">
import { blockData, itemHeadingData, itemContentData } from './RequisiteEl.data';
import TagsMo from '@modifiers/TagsMo.vue';
</script>