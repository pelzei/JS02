<template>
  <section>
    <h2>Din beställning</h2>

    <h3>
      Att betala: <base-badge mode="elegant"> {{ cartTotal }} kr</base-badge>
    </h3>
    <base-button @click="sendOrder" v-if="isAuthenticated"
      >Skicka in beställning (fungerar ej)</base-button
    >
    <base-button link to="/auth" v-else>Logga in för att beställa</base-button>
    <div>
      <ul>
        <cart-item
          v-for="item in cartItems"
          :key="item.productId"
          :prod-id="item.productId"
          :name="item.name"
          :image="item.image"
          :price="item.price"
          :qty="item.qty"
        ></cart-item>
      </ul>
    </div>
  </section>
</template>

<script>
import CartItem from "../components/cart/CartItem.vue";

export default {
  components: {
    CartItem,
  },
  computed: {
    cartTotal() {
      return this.$store.getters["cart/totalSum"];
    },
    cartItems() {
      return this.$store.getters["cart/products"];
    },
    isAuthenticated() {
      return this.$store.getters["isAuthenticated"];
    },
  },
  methods: {
    sendOrder() {
      this.$store.dispatch("orders/sendOrder", this.cartItems);
    },
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
}

.orders__header {
  display: flex;
  justify-content: space-between;
}

h2 {
  color: #292929;
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 1rem;
}

h3 {
  text-align: center;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
