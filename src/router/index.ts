import { createRouter, createWebHistory } from 'vue-router';
import { RoutePath, RouteName, RouteTitle, RouteParams } from './router.constants';
import { useStateStore } from '@/stores/state.stores';
import MainLayout from '@layouts/MainLayout/MainLayout.vue';
import HomeView from '@views/HomeView/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: RoutePath.HOME,
      name: RouteName.HOME,
      component: HomeView,
      meta: {
        layout: MainLayout,
        title: RouteTitle.HOME,
        breadcrumb: {}
      }
    },
    {
      path: RoutePath.COMPANY,
      name: RouteName.COMPANY,
      component: () => import('@views/CompanyView/CompanyView.vue'),
      meta: {
        layout: MainLayout,
        title: RouteTitle.COMPANY,
        breadcrumb: {
            name: RouteName.HOME,
            title: RouteTitle.HOME
        }
      }
    },
    {
      path: RoutePath.DELIVERY_PAYMENT,
      name: RouteName.DELIVERY_PAYMENT,
      component: () => import('@views/DeliveryPaymentView/DeliveryPaymentView.vue'),
      meta: {
        layout: MainLayout,
        title: RouteTitle.DELIVERY_PAYMENT,
        breadcrumb: {
            name: RouteName.HOME,
            title: RouteTitle.HOME
        }
      }
    },
    {
      path: RoutePath.CONTACTS,
      name: RouteName.CONTACTS,
      component: () => import('@views/ContactsView/ContactsView.vue'),
      meta: {
        layout: MainLayout,
        title: RouteTitle.CONTACTS,
        breadcrumb: {
            name: RouteName.HOME,
            title: RouteTitle.HOME
        }
      }
    },
    {
      path: `${RoutePath.PRODUCTS}/:${RouteParams.PRODUCT}`,
      name: RouteName.PRODUCTS,
      component: () => import('@views/ProductsView/ProductsView.vue'),
      meta: {
        layout: MainLayout,
        name: RouteName.PRODUCTS,
        breadcrumb: {
          name: RouteName.HOME,
          title: RouteTitle.HOME
        }
      }
    },
    {
      path: RoutePath.NOTFOUND,
      name: RouteName.NOTFOUND,
      redirect: { name: RouteName.HOME },
    } 
  ],

  scrollBehavior(to, from, savedPosition) {  
    return { top: 0, left: 0 };  
  }
});


router.afterEach((to, from) => {
  const stateStore = useStateStore();
  if (stateStore.state.ButtonEtc_Nav_Header) stateStore.useState({ButtonEtc_Nav_Header: false})
});

export default router;