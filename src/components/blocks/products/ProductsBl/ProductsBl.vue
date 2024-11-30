<template>
  <TagsMo :data="data">
    <CardEl>
      <template v-slot:loading>
        <LoadingEl  />
      </template>
      <template v-slot:error>
        <ErrorEl />
      </template>
    </CardEl>
  </TagsMo>
</template>

<script setup lang="ts">
import { data } from './ProductsBl.data';
import TagsMo from '@modifiers/TagsMo.vue';
import CardEl from '@elements/products/CardEl/CardEl.vue';
import LoadingEl from '@elements/common/LoadingEl/LoadingEl.vue';
import ErrorEl from '@elements/common/ErrorEl/ErrorEl.vue';
</script>