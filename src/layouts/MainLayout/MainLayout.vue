<template>
  <HeaderBl />
  <FormModalBl />
  <slot></slot>
  <FooterBl />
</template>

<script setup lang="ts">
import HeaderBl from '@blocks/common/HeaderBl/HeaderBl.vue';
import FormModalBl from '@blocks/common/FormModalBl/FormModalBl.vue';
import FooterBl from '@blocks/common/FooterBl/FooterBl.vue';
</script>
