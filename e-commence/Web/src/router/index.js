import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductsVue from "../views/Products.vue";
import AboutViewVue from "../views/AboutView.vue";
import Index from "../views/Index.vue"
import Men from "../components/Men.vue"
import Women from "../components/Women.vue"
import Kid from "../components/Kid.vue"
import Accessories from "../components/Accessories.vue"
import Detial from "../components/Detial.vue"
import Cart from "../components/Cart.vue"
import Checkout from "../components/Checkout.vue"
import Payment from "../components/Payment.vue"
import Paycheck from "../components/Paycheck.vue"
import ThankPage from "../components/ThankPage.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutViewVue,
    },
    {
      path: "/product",
      name: "product",
      component: ProductsVue,
    },
    {
      path: "/index",
      name: "index",
      component: Index,
    },
    {
      path: "/men",
      name: "men",
      component: Men,
    },
    {
      path: "/women",
      name: "women",
      component: Women,
    },
    {
      path: "/kid",
      name: "kid",
      component: Kid,
    },
    {
      path: "/accessories",
      name: "accessories",
      component: Accessories,
    },
    {
      path: "/detial/:id",
      name: "detial",
      component: Detial,
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart,
    },
    {
      path: "/checkout",
      name: "checkout",
      component: Checkout,
    },
    {
      path: "/payment",
      name: "payment",
      component: Payment,
    },
    {
      path: "/paycheck",
      name: "paycheck",
      component: Paycheck,
    },
    {
      path: "/thank",
      name: "thank",
      component: ThankPage,
    },

  ],
});

export default router;
