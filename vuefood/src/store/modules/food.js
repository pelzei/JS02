import axios from "@/axios";

export default {
  namespaced: true,
  state() {
    return {
      products: [],
    };
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload;
    },
  },
  actions: {
    async loadFoods(context) {
      const response = await axios.get("products/");
      context.commit("setProducts", response.data);
    },
  },
  getters: {
    products(state) {
      return state.products;
    },
  },
};
