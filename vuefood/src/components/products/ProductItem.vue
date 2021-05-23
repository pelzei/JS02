<template>
  <li class="product">
    <base-card>
      <div class="product__data">
        <div class="product__image">
          <img :src="image" :alt="name" />
        </div>
        <div class="product__text">
          <h2>{{ name }}</h2>
          <base-badge mode="highlight" :no-margin-left="true">
            <h4>{{ price }} kr</h4>
          </base-badge>
          <p>{{ short }}</p>
          <div class="product__actions">
            <base-button class="outline" link :to="productDetailsLink">
              <h4>Läs mer</h4>
            </base-button>
            <base-button @click="addToCart">Lägg till 1 portion </base-button>
          </div>
        </div>
      </div>
    </base-card>
  </li>
</template>

<script>
export default {
  props: ["id", "image", "name", "price", "desc", "short"],
  data() {
    return {
      quantity: 1,
    };
  },
  computed: {
    productDetailsLink() {
      return this.$route.path + "/" + this.id;
    },
  },
  methods: {
    addToCart() {
      this.$store.dispatch("cart/addToCart", {
        id: this.id,
      });
    },
  },
};
</script>

<style scoped>
.class button {
  display: inline-block;
  padding: 0.15rem 1.25rem;
  margin: 0 0.75rem;
  border-radius: 30px;
  background-color: #f0b800;
  color: black;
}

input {
  width: 2.5rem;
}
.product__data {
  display: flex;
}

.product__image {
  margin-right: 1rem;
}

.product__image img {
  height: 10rem;
  width: 10rem;
  object-fit: cover;
}

.product__text h2 {
  font-family: "Berkshire Swash";
  margin: 0 0 0.5rem 0;
}

.product__text h4 {
  margin: 0;
}

.product__actions {
  display: flex;
  justify-content: space-between;
}
</style>
