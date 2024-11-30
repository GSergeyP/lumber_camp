<template>
  <TagsMo :data="blockData" @event-submit-form="onSubmit">
    <TagsMo :data="itemData" />
  </TagsMo>
</template>

<script setup lang="ts">
import { ID } from '@/constants/id.constants';
import { blockData, itemData } from './FormEl.data';
import TagsMo from '@modifiers/TagsMo.vue';

  const onSubmit = (data: Record<string, any>) => {
    const inputSearchClear = document.getElementById(ID.INPUT_SEND_EMAIL),
          inputSearch = data.data.target[ID.INPUT_SEND_EMAIL].value;
    alert(inputSearch)
    if (inputSearchClear) (inputSearchClear as HTMLInputElement).value = ""
  }
</script>