import { createRouter, createWebHistory } from "vue-router";

import store from "./store/index.js";

import ProductsList from "./pages/ProductsList.vue";
import ProductDetail from "./pages/ProductDetail.vue";
import UserCart from "./pages/UserCart.vue";
import Profil from "./pages/Profil.vue";
import UserAuth from "./pages/UserAuth.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/foods" },
    { path: "/foods", component: ProductsList },
    {
      path: "/foods/:id",
      component: ProductDetail,
      props: true,
    },
    { path: "/cart", component: UserCart },
    { path: "/profil", component: Profil, meta: { requiresAuth: true } },
    { path: "/auth", component: UserAuth, meta: { requiresNotAuth: true } },
  ],
});

router.beforeEach(function (to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next("/auth");
  } else if (to.meta.requiresNotAuth && store.getters.requiresNotAuth) {
    next("/foods");
  } else {
    next();
  }
});

export default router;
