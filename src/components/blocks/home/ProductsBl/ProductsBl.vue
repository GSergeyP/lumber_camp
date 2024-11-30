<template>
  <TagsMo :data="blockData">
    <LogoEl />
    <ButtonEl v-if="stateStore.state.Card_Home_Products"/>
    <template v-else />
    <TagsMo :data="itemData">
      <CardEl>
        <template v-slot:loading>
          <LoadingEl  />
        </template>
        <template v-slot:error>
          <ErrorEl />
        </template>
      </CardEl>
    </TagsMo>
  </TagsMo>
</template>

<script setup lang="ts">
import { useStateStore } from '@/stores/state.stores';
import { blockData, itemData } from './ProductsBl.data';
import TagsMo from '@modifiers/TagsMo.vue';
import CardEl from '@elements/homeProducts/CardEl/CardEl.vue';
import LoadingEl from '@elements/common/LoadingEl/LoadingEl.vue';
import ErrorEl from '@elements/common/ErrorEl/ErrorEl.vue';
import LogoEl from '@elements/homeProducts/LogoEl/LogoEl.vue';
import ButtonEl from '@elements/homeProducts/ButtonEl/ButtonEl.vue';

  const stateStore = useStateStore();
</script>