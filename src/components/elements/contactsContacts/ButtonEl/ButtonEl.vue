<template>
  <TagsMo 
    v-if="isShow" 
    :data="{...data, 
            title: stateStore.state.Contacts_Contacts[Number(signalSlot)] 
                    ? 'Закрыть карту'
                    : 'Открыть карту',
            classesActive: stateStore.state.Contacts_Contacts[Number(signalSlot)] 
                    ? true
                    : false,
           }" 
    @event-click-tags="handleClick" 
  />
  <template v-else />
</template>

<script setup lang="ts">
import { computed, toRefs, watchEffect } from 'vue';
import { useStateStore } from '@/stores/state.stores';
import { Device, useDevice } from '@/services/useDevice';
import { data } from './ButtonEl.data';
import TagsMo from '@modifiers/TagsMo.vue';


  const props = defineProps<{ signalSlot: string }>();
  const { signalSlot } = toRefs(props);

  const stateStore = useStateStore();
  const device = useDevice();

    watchEffect(() => {
      let state = [];
        state = stateStore.state.Contacts_Contacts;
        if(signalSlot.value) {
          state.push(false)
          stateStore.useState({Contacts_Contacts: state})
        }
    })

  const isShow = computed(() => {
    let isShow;
      if(device.value === Device.SM || device.value === Device.XS) isShow = true
      else isShow = false
    return isShow
  })

  const handleClick = () => {
    let state = stateStore.state.Contacts_Contacts
    state[Number(signalSlot.value)] = !stateStore.state.Contacts_Contacts[Number(signalSlot.value)]
    stateStore.useState({Contacts_Contacts: state})
  }

</script>