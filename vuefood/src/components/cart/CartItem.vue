<template>
  <li>
    <base-card>
      <div>
        <div class="item__data">
          <div>
            <h3>{{ name }}</h3>
          </div>
          <div>
            <img :src="image" :alt="name" />
          </div>
        </div>
      </div>
      <div>
        <div class="item__data">
          <div>
            Pris per portion:
            <strong>{{ price }} kr</strong>
          </div>
          <div>
            Antal portioner:
            <strong>{{ qty }}</strong>
          </div>
        </div>
        <div class="item__total">Summa: {{ itemTotal }} kr</div>
        <base-button @click="remove">Ta bort</base-button>
      </div>
    </base-card>
  </li>
</template>

<script>
export default {
  props: ["prodId", "name", "image", "price", "qty"],
  computed: {
    itemTotal() {
      return (this.price * this.qty).toFixed(0);
    },
  },
  methods: {
    remove() {
      this.$store.dispatch("cart/removeFromCart", { productId: this.prodId });
    },
  },
};
</script>

<style scoped>
/* li {
  margin: 1rem auto;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  text-align: center;
  max-width: 25rem;
  background: whitesmoke;
} */

img {
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  object-fit: cover;
}

h3 {
  font-family: "Berkshire Swash";
  font-size: 1.5rem;
  color: crimson;
}

.item__data {
  display: flex;
  justify-content: space-between;
}

.item__total {
  font-weight: bold;
  margin: 1rem 0;
  border-top: 1px solid #474747;
  border-bottom: 2px solid #474747;
  padding: 0.25rem 0;
  width: auto;
}

/* button {
  font: inherit;
  border: 1px solid #8f0030;
  background-color: #8f0030;
  color: white;
  border-radius: 30px;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
}

button:hover,
button:active {
  background-color: #53001c;
  border-color: #53001c; */
/* } */
</style>
