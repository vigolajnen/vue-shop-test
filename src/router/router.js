import { createRouter, createWebHistory } from "vue-router";
import fhCatalog from "@/components/fh-catalog";
import pageCart from '@/components/page-cart';
import pageProduct from '@/components/page-product'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "catalog",
      component: fhCatalog,
    },
    {
      path: "/product",
      name: "product",
      component: pageProduct,
      props: true,
    },
    {
      path: "/cart",
      name: "cart",
      component: pageCart,
      props: true,
    },
  ],
});

export default router;
