<template>
<TagsMo :data="data">
  <HgroupEl />
  <ButtonEl />
</TagsMo>
</template>

<script setup lang="ts">
import { data } from './AboutCompanyBl.data';
import TagsMo from '@modifiers/TagsMo.vue';
import HgroupEl from '@elements/homeAboutCompany/HgroupEl/HgroupEl.vue';
import ButtonEl from '@elements/homeAboutCompany/ButtonEl/ButtonEl.vue';
</script>