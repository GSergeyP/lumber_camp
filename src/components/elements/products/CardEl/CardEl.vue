<template>
  <template v-if="initialState.loading">
    <slot name="loading"></slot>
  </template>
  <template v-else-if="initialState.error">
    <slot name="error"></slot>
  </template>
  <TagsMo v-else :data="blockData">
    <TagsMo 
      v-for="(item, key) in initialState.data" 
      :key="key"
      :data="cardData"
    >
      <TagsMo :data="{...imgData, src: item.src, alt: item.alt}" />
      <TagsMo :data="{...h4Data, title: item.title}" />
      <TagsMo :data="{...pData, title: item.msg}" />
    </TagsMo>
  </TagsMo >
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { fetchingData, type IInitialState } from '@/api/fetchingData.api';
import { blockData, cardData, imgData, h4Data, pData } from './CardEl.data';
import TagsMo from '@modifiers/TagsMo.vue';

  const route = useRoute();
  const initialState = ref<IInitialState>({ loading: true,
                                            data: null,
                                            error: false 
                                          });
  const baseUrl = import.meta.env.VITE_BASE_PRODUCT_URL;

  const fetchData = (data: string | string[]) => {
    fetchingData(baseUrl + data + '.data.mock.json', 'GET').then(data => {
      initialState.value = { loading: data.loading, data: data.data, error: data.error }
    })
  }
  watch(() => route.params.product, fetchData, { immediate: true })
</script>