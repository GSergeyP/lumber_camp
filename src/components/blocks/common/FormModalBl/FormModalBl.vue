<template>
  <TagsMo v-if="stateStore.state.Form_Modal" :data="blockData">
    <TagsMo :data="itemData">
      <ButtonEl />
      <FormEl />
    </TagsMo>
  </TagsMo>
  <template v-else />
</template>

<script setup lang="ts">
import { useStateStore } from '@/stores/state.stores';
import { blockData, itemData } from './FormModalBl.data';
import TagsMo from '@modifiers/TagsMo.vue';
import ButtonEl from '@elements/formModal/ButtonEl/ButtonEl.vue';
import FormEl from '@elements/formModal/FormEl/FormEl.vue';

  const stateStore = useStateStore();
</script>