<template>
  <TagsMo :data="data" @event-click-tags="handleClick" />
</template>

<script setup lang="ts">
import { useStateStore } from '@/stores/state.stores';
import { data } from './ButtonEl.data';
import TagsMo from '@modifiers/TagsMo.vue';

  const stateStore = useStateStore();
  const handleClick = () => {
    stateStore.useState({Company_Modal_Show: true})
  }
</script>