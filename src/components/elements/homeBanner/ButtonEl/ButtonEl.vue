<template>
  <TagsMo :data="data" @event-click-tags="handleclick" />
</template>

<script setup lang="ts">
import { useStateStore } from '@/stores/state.stores';
import { data } from './ButtonEl.data';
import TagsMo from '@modifiers/TagsMo.vue'; 

  const stateStore = useStateStore();

  const handleclick = () => {
    stateStore.useState({Form_Modal: true})
  }
</script>