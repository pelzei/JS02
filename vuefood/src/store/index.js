import { createStore } from "vuex";
import foodModule from "./modules/food.js";
import authModule from "./modules/auth.js";
import ordersModule from "./modules/auth.js";
import cartModule from "./modules/cart.js";

export default createStore({
  modules: {
    food: foodModule,
    auth: authModule,
    orders: ordersModule,
    cart: cartModule,
  },
});
