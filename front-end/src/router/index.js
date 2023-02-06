/** @format */

import { createRouter, createWebHistory } from "vue-router";

import ListProduct from "../components/ListProduct.vue";
import ProductDetail from "../components/ProductDetail.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "list-product",
      component: <ListProduct />,
    },
    {
      path: "/detail",
      name: "detail",
      component: <ProductDetail />,
    },
  ],
});

export default router;
