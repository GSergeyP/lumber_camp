<template>
  <SelectUI v-for="(item, key) in isArray" 
    :key="key" 
    v-on="
          !item.click &&
          !item.mouseover &&
          !item.input &&
          item.tags !== 'form'
    ? {}
    : {
        click: item.click ? () => useEventEmits({emits: Emits.EVENT_CLICK_TAGS, key: key, data: item.click}): null,
        mouseover: item.mouseover ? () => useEventEmits({emits: Emits.EVENT_MOUSEOVER_TAGS, key: key, data: item.mouseover}): null,
        mouseout: item.mouseout ? () => useEventEmits({emits: Emits.EVENT_MOUSEOUT_TAGS, key: key, data: item.mouseout}): null,
        eventUpdateInputSubsidiary: item.input ? (data: Record<string, string>) => useEventEmits({emits: Emits.EVENT_UPDATE_INPUT, key: key, data: data}) : null,
        eventSubmitFormSubsidiary: item.tags === 'form' ? (data: Record<string, string>) => useEventEmits({emits: Emits.EVENT_SUBMIT_FORM, data: data}) : null
      }"
    v-bind="Object.fromEntries(
      Object.entries(item).filter(([key]) => 
        key !== 'click' &&
        key !== 'mouseover' &&
        key !== 'mouseout' &&
        key !== 'input' &&
        key !== 'eventUpdateInputSubsidiary' &&
        key !== 'eventSubmitFormSubsidiary' &&
        key !== 'icon' &&
        key !== 'subTitle'
      ))" 
  >
    <slot></slot>
    
    <TagsMo  v-if="item.icon" :data="{...item.icon, tags: 'icon'}" />
    <template v-else />

    <TagsMo  v-if="item.subTitle" :data="{...item.subTitle, tags: 'span'}" />
    <template v-else />
  </SelectUI>
</template>

<script setup lang="ts">
import { computed, ref, toRefs } from 'vue';
import { Emits } from '@constants/emits.constants';
import TagsMo from '@modifiers/TagsMo.vue'
import SelectUI from './SelectUI/SelectUI.vue';

  const props = defineProps<{ data: Array<{}> | Record<string, any>}>();
  const { data } = toRefs(props);

  const isArray = computed(() => {
    let isArray;
      if (Array.isArray(data.value)) isArray = data.value;
      else isArray = [data.value];
    return isArray;
  });
  
  const emits = defineEmits([
                              Emits.EVENT_CLICK_TAGS, 
                              Emits.EVENT_MOUSEOVER_TAGS,
                              Emits.EVENT_MOUSEOUT_TAGS,
                              Emits.EVENT_UPDATE_INPUT, 
                              Emits.EVENT_SUBMIT_FORM
                            ]);

  const useEventEmits = (data: Record<string, any>) => {
    return emits(data.emits, {key: data.key, data: data.data})
  }
</script>