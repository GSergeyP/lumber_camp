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
    const inputModalNameClear = document.getElementById(ID.INPUT_MODAL_NAME),
          inputModalPhoneClear = document.getElementById(ID.INPUT_MODAL_PHONE),
          inputModalEmailClear = document.getElementById(ID.INPUT_MODAL_EMAIL),
          
          inputModalName = data.data.target[ID.INPUT_MODAL_NAME].value,
          inputModalPhone = data.data.target[ID.INPUT_MODAL_PHONE].value,
          inputModalEmail = data.data.target[ID.INPUT_MODAL_EMAIL].value;


    alert('Name: ' + inputModalName + '\n' +
          'Phone: ' + inputModalPhone + '\n' +
          'Email: ' + inputModalEmail + '\n')
    
    if (inputModalNameClear) (inputModalNameClear as HTMLInputElement).value = ""
    if (inputModalPhoneClear) (inputModalPhoneClear as HTMLInputElement).value = ""
    if (inputModalEmailClear) (inputModalEmailClear as HTMLInputElement).value = ""
  }

</script>