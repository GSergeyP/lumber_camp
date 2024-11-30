<template>
  <TagsMo :data="data">
    <HgroupEl>
      <ButtonEl />
    </HgroupEl>
    <ModalEl />
  </TagsMo>
</template>

<script setup lang="ts">
import { data } from './CompanyBl.data';
import TagsMo from '@modifiers/TagsMo.vue';
import HgroupEl from '@elements/company/HgroupEl/HgroupEl.vue';
import ButtonEl from '@elements/company/ButtonEl/ButtonEl.vue';
import ModalEl from '@elements/company/ModalEl/ModalEl.vue';
</script>