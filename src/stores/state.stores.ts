import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useStateStore = defineStore('state', () => {
  const state = ref<Record<string, any>>({
                                          ButtonEtc_Nav_Header: false,
                                          Form_Modal: false,
                                          Search_Modal_Header: null,
                                          Switch_Header: false,
                                          Card_Home_Products: null,
                                          Company_Modal_Show: false,
                                          Contacts_Contacts: []
                                        });
  const useState = (data: Record<string, any>) => {
    state.value = Object.assign(state.value, data)
  };
  return { state, useState };
});