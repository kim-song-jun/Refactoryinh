import {createRouter, createWebHistory} from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
    },
    {
      path: '/MainPage',
      component: () => import('../pages/main/MainPage.vue'),
    },
    {
      path: '/SelectPage',
      component: () => import('../pages/select/SelectPage.vue'),
    },
    {
      path: '/MainPage/ReadyPage',
      component: () => import('../pages/main/ready/ReadyPage.vue'),
    },
  ],
});

export default router;
