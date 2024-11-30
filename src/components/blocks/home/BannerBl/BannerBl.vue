<template>
  <TagsMo :data="blockData">
    <TagsMo :data="topItemData">
      <HgroupEl />
      <ButtonEl />
    </TagsMo>
    <TagsMo :data="bottomItemData">
      <CardEl />
    </TagsMo>
  </TagsMo>
</template>

<script setup lang="ts">
import { blockData, topItemData, bottomItemData } from './BannerBl.data';
import TagsMo from '@modifiers/TagsMo.vue';
import HgroupEl from '@elements/homeBanner/HgroupEl/HgroupEl.vue';
import ButtonEl from '@elements/homeBanner/ButtonEl/ButtonEl.vue';
import CardEl from '@elements/homeBanner/CardEl/CardEl.vue';
</script>