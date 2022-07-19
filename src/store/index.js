import Vue from "vue";
import Vuex from "vuex";
import home from "@/store/home/index";
import search from "@/store/search/index";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    home,
    search,
  },
});
