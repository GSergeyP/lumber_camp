<template>
  <TagsMo v-if="isShow" :data="blockData">
    <TagsMo :data="itemData" @event-submit-form="onSubmit">
      <TagsMo :data="inputData" @event-update-input="updateData" />
    </TagsMo>
    <slot></slot>
  </TagsMo>
  <template v-else />
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { RouteName } from '@/router/router.constants';
import { useStateStore } from '@/stores/state.stores';
import { Device, useDevice } from '@/services/useDevice';
import { ID } from '@/constants/id.constants';
import { blockData, itemData, inputData } from './FormSearchEl.data';
import TagsMo from '@modifiers/TagsMo.vue';

  const route = useRoute();
  const device = useDevice();
  const stateStore = useStateStore();

  const isShow = computed(() => {
    let isShow;
      if (device.value === Device.XL && route.name !== RouteName.HOME) isShow = true
      else if (device.value !== Device.XL) isShow = true
      else isShow = false
    return isShow
  })

  const updateData = (data: Record<string, any>) => {
    stateStore.useState({Search_Modal_Header: data.data[ID.INPUT_SEARCH]})
  }

  const onSubmit = (data: Record<string, any>) => {
    const inputSearchClear =  document.getElementById(ID.INPUT_SEARCH);
    const inputSearch = data.data.target[ID.INPUT_SEARCH].value;

      alert(inputSearch);
      (inputSearchClear as HTMLInputElement).value = '';
      stateStore.useState({Search_Modal_Header: null});
  }
</script>
