<template>
<TagsMo :data="data" @event-click-tags="handleclick"/>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { data } from './ButtonEl.data';
import TagsMo from '@modifiers/TagsMo.vue';

  const route = useRouter()
  const handleclick = (data: Record<string, string>) => {
    route.push({name: data.data})
  }
</script>