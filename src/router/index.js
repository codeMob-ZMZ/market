import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home/index";
import Login from "@/views/Login/index";
import Register from "@/views/Register/index";
import Search from "@/views/Search/index";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      component: Home,
      meta: {
        showFooter: true,
      },
    },
    {
      path: "/login",
      component: Login,
      meta: {
        showFooter: false,
      },
    },
    {
      path: "/register",
      component: Register,
      meta: {
        showFooter: false,
      },
    },
    {
      name: "search",
      path: "/search",
      component: Search,
      meta: {
        showFooter: true,
      },
    },
  ],
});
