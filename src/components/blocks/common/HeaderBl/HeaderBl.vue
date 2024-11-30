<template>
  <TagsMo :data="blockData">
    <TagsMo :data="itemTopData">
      <LogoEl />
      <ButtonBurgerEl />
    </TagsMo>
    <TagsMo v-if="isShow" :data="itemBottomData" >
      <SwitchEl />
      <NavEl />
      <NavOtherEl />
      <FormSearchEl ref="componentRef">
        <ModalEl />
      </FormSearchEl>
      <ButtonEtcEl />
      <ButtonCrossEl />
    </TagsMo>
    <template v-else />
  </TagsMo>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useStateStore } from '@/stores/state.stores'; 
import { Device, useDevice } from '@services/useDevice';
import { useDetectOutsideClick }  from '@services/useDetectOutsideClick';
import { blockData, itemTopData, itemBottomData } from './HeaderBl.data';
import TagsMo from '@modifiers/TagsMo.vue';
import LogoEl from '@elements/header/LogoEl/LogoEl.vue';
import SwitchEl from '@elements/header/SwitchEl/SwitchEl.vue';
import NavEl from '@elements/header/NavEl/NavEl.vue';
import NavOtherEl from '@elements/header/NavOtherEl/NavOtherEl.vue';
import ButtonEtcEl from '@elements/header/ButtonEtcEl/ButtonEtcEl.vue';
import ButtonBurgerEl from '@elements/header/ButtonBurgerEl/ButtonBurgerEl.vue';
import ButtonCrossEl from '@elements/header/ButtonCrossEl/ButtonCrossEl.vue';
import FormSearchEl from '@elements/header/FormSearchEl/FormSearchEl.vue';
import ModalEl from '@elements/header/ModalEl/ModalEl.vue';


  const stateStore = useStateStore();
  const device = useDevice();
  const componentRef = ref();

  const isShow = computed(() => {
    let isShow;
      if (device.value === Device.XL) isShow = true
      else if (stateStore.state.ButtonEtc_Nav_Header) isShow = true
      else isShow = false
    return isShow
  })

  useDetectOutsideClick(componentRef, () => { 
    if(stateStore.state.Search_Modal_Header) {
      stateStore.useState({Search_Modal_Header: null});
    }
  })
</script>