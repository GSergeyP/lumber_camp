<template>
  <template v-if="initialState.loading">
    <slot name="loading"></slot>
  </template>
  <template v-else-if="initialState.error">
    <slot name="error"></slot>
  </template>
  <template v-else>
    <TagsMo 
      v-for="(item, key) in stateStore.state.Card_Home_Products.slice(0, setCards)" 
      :key="key" 
      :data="{
              ...item.card,
              mouseover: `${key}`,
              mouseout: `${key}`
            }"
      @event-mouseover-tags="handleMouseOver"
      @event-mouseout-tags="handleMouseOut"
    >
      <TagsMo :data="item.header">
        <TagsMo :data="item.img" />
      </TagsMo>
      <TagsMo :data="item.h4" />
      <TagsMo :data="item.p" />
      <TagsMo :data="item.a" />
    </TagsMo>
  </template>
</template>
  
<script setup lang="ts">
import { computed, ref, watch, watchEffect } from 'vue';
import { useStateStore } from '@/stores/state.stores';
import { useDevice, Device } from '@services/useDevice';
import { fetchingData, type IInitialState } from '@/api/fetchingData.api';
import { baseData } from './CardEl.data';
import TagsMo from '@modifiers/TagsMo.vue';

  const baseUrl = import.meta.env.VITE_BASE_PRODUCTS_URL;
  const stateStore = useStateStore();
  const device = useDevice();
  const initialState = ref<IInitialState>({
                                            loading: true,
                                            data: null,
                                            error: false 
                                          });
    const setCards = computed(() => {
      let sum;
      if (device.value === Device.XL) sum = 4
      else if (device.value === Device.LG) sum = 4
      else if (device.value === Device.MD) sum = 3
      else if (device.value === Device.SM) sum = 3
      else sum =2
      return sum
    })

    watchEffect(() => {
        fetchingData(baseUrl, 'GET').then(data => {
        initialState.value = { loading: data.loading, data: data.data, error: data.error }
      })
    })

    watch(() => initialState.value.data, (data: Record<string, any>) => {
      let currentDataTmp: Record<string, any>[] = [] ;
        data.map((item: Record<string, any>) => {  
          currentDataTmp.push({
            card: Object.assign({}, baseData.card),
            header: Object.assign({}, baseData.header),
            img: {
              ...Object.assign({}, baseData.img), 
              src: item.src,
              alt: item.alt
            },
            h4: {
              ...Object.assign({}, baseData.h4), 
              title: item.title
            },
            p: {
              ...Object.assign({}, baseData.p), 
              title: item.msg
            },
            a: {
              ...Object.assign({}, baseData.a),
              params: {
                product: item.product
              }
            }
          })
      })
      stateStore.useState({ Card_Home_Products: currentDataTmp })
    })
  const handleMouseOver = (data: Record<string, string>) => {
    let currentData = stateStore.state.Card_Home_Products;

      if (!currentData[Number(data.data)].card.classesActive) {
        currentData[Number(data.data)].card['classesActive'] = true
        stateStore.useState({Card_Home_Products: currentData})
      }
  }
  const handleMouseOut = (data: Record<string, string>) => {
    let currentData = stateStore.state.Card_Home_Products;
    
      if (currentData[Number(data.data)].card.classesActive) {
        currentData[Number(data.data)].card['classesActive'] = false
        stateStore.useState({Card_Home_Products: currentData})
      }
  }
</script>