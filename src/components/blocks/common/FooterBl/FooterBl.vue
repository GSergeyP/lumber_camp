<template>
  <TagsMo :data="data">
    <LogoEl />
    <NavProductsEl />
    <NavInfoEl />
    <HgroupEl />
    <FormEl />
  </TagsMo>
</template>

<script setup lang="ts">
import { data } from './FooterBl.data';
import TagsMo from '@modifiers/TagsMo.vue';
import LogoEl from '@elements/footer/LogoEl/LogoEl.vue';
import NavProductsEl from '@elements/footer/NavProductsEl/NavProductsEl.vue';
import NavInfoEl from '@elements/footer/NavInfoEl/NavInfoEl.vue';
import HgroupEl from '@elements/footer/HgroupEl/HgroupEl.vue';
import FormEl from '@elements/footer/FormEl/FormEl.vue';


</script>