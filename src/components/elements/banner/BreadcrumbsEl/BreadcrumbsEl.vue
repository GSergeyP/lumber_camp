<template>
  <TagsMo v-if="(routeData instanceof Object)" :data="blockData">
    {{ 
      route.params.product 
        ? RouteParamsTitle[`${route.params.product}`.toUpperCase() as keyof typeof RouteParamsTitle]  
        : routeData.title 
    }}
    <TagsMo :data="spanData">
      <TagsMo 
        :data="{
                  ...aData,
                  to: RouteName[routeData.breadcrumb.name.toUpperCase() as keyof typeof RouteName],
                  title: RouteTitle[routeData.breadcrumb.name.toUpperCase() as keyof typeof RouteTitle]
                }"
      >
      </TagsMo>
    </TagsMo>
  </TagsMo>
  <template v-else />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { RouteName, RouteTitle, RouteParamsTitle } from '@/router/router.constants';
import { blockData, spanData, aData } from './BreadcrumbsEl.data';
import TagsMo from '@modifiers/TagsMo.vue';

  const route = useRoute()
  const routeData: Record<string, any> = computed(() => {
    return route.meta;
  })
</script>