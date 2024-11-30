<template>
  <TagsMo :data="data">
    <BreadcrumbsEl />
  </TagsMo>
</template>

<script setup lang="ts">
import { data } from './BannerBl.data';
import TagsMo from '@modifiers/TagsMo.vue';
import BreadcrumbsEl from '@elements/banner/BreadcrumbsEl/BreadcrumbsEl.vue';
</script>