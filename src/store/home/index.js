import { reqCategoryList } from "@/api";

// Home Store
const state = {
  categoryList: [],
};
const mutations = {
  GETCATEGORY(state, categoryList) {
    state.categoryList = categoryList.data;
  },
};
const actions = {
  async getCategory({ commit }) {
    let result = await reqCategoryList();
    if (result.code === 200) {
      commit("GETCATEGORY", result);
    }
  },
};
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
