<template>
  <TagsMo :data="data">
    <HeadingDeliveryEl />
    <CardDeliveryEl />
    <HeadingPaymentEl />
    <CardPaymentEl />
  </TagsMo>
</template>

<script setup lang="ts">
import { data } from './DeliveryPaymentBl.data';
import TagsMo from '@modifiers/TagsMo.vue';
import HeadingDeliveryEl from '@elements/deliveryPaymentDelivery/HeadingDeliveryEl/HeadingDeliveryEl.vue';
import CardDeliveryEl from '@elements/deliveryPaymentDelivery/CardDeliveryEl/CardDeliveryEl.vue';
import HeadingPaymentEl from '@elements/deliveryPaymentPayment/HeadingPaymentEl/HeadingPaymentEl.vue';
import CardPaymentEl from '@elements/deliveryPaymentPayment/CardPaymentEl/CardPaymentEl.vue';
</script>