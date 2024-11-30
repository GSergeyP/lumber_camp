<template>
  <TagsMo :data="blockData">
    <ContactsEl>
      <template v-slot="{ signalSlot }">
        <ButtonEl :signalSlot="signalSlot" />
      </template>
    </ContactsEl>
    <TagsMo :data="itemData">
      <HeadingEl />
      <RequisiteEl />
    </TagsMo>
  </TagsMo>
</template>

<script setup lang="ts">
import { blockData, itemData } from './ContactsBl.data';
import TagsMo from '@modifiers/TagsMo.vue';
import ContactsEl from '@elements/contactsContacts/ContactsEl/ContactsEl.vue';
import HeadingEl from '@elements/contactsRequisite/HeadingEl/HeadingEl.vue';
import RequisiteEl from '@elements/contactsRequisite/RequisiteEl/RequisiteEl.vue';
import ButtonEl from '@elements/contactsContacts/ButtonEl/ButtonEl.vue';
</script>