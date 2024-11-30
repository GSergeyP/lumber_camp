<template>
  <TagsMo :data="blockData">
    <TagsMo :data="itemData" />
    <slot></slot>
  </TagsMo>
</template>

<script setup lang="ts">
import { blockData, itemData } from './HgroupEl.data';
import TagsMo from '@modifiers/TagsMo.vue';
</script>