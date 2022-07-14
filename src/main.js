import Vue from "vue";
import App from "./App.vue";
import router from "@/router/index";
import TypeNav from "@/views/Home/TypeNav";

Vue.config.productionTip = false;

Vue.component(TypeNav.name, TypeNav);
import { reqCategoryList } from "@/api/index";
new Vue({
  render: (h) => h(App),
  router,
  mounted(){
    reqCategoryList()
  }
}).$mount("#app");
