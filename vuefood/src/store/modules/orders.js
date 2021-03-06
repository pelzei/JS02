import axios from "@/axios";

export default {
  namespaced: true,
  state() {
    return {
      orders: [],
    };
  },
  actions: {
    async sendOrder(context, payload) {
      console.log(payload);
      //const newOrder = {
      //order: this.$store.getters["cart/products"],
      //};
      const userId = localStorage.getItem("userId");
      const response = fetch(
        `https://vue-inlamningsuppgift-default-rtdb.europe-west1.firebasedatabase.app/orders/${userId}.json`,
        {
          method: "POST",
          body: JSON.stringify(payload),
        }
      );

      const responseData = await response.json();

      console.log(responseData);

      if (!response.ok) {
        const error = new Error(
          responseData.message || "Det gick inte att skicka in beställningen!"
        );
        throw error;
      }

      newOrder.id = responseData.name;
      newOrder.userId = userId;

      context.commit("addOrder", newOrder);
    },
  },
  mutations: {
    addOrder(state, payload) {
      state.orders.push(payload);
    },
  },
};
