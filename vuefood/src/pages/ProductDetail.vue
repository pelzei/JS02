<template>
  <section>
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
          <h5>{{ short }}</h5>
          <p>{{ desc }}</p>
          <div class="product__actions">
            <base-button class="outline" link to="/foods"
              >Tillbaka till menyn</base-button
            >
            <base-button @click="addToCart">Lägg till 1 portion</base-button>
          </div>
        </div>
      </div>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      selectedFood: null,
    };
  },
  computed: {
    image() {
      return this.selectedFood.image;
    },
    name() {
      return this.selectedFood.name;
    },
    short() {
      return this.selectedFood.short;
    },
    desc() {
      return this.selectedFood.desc;
    },
    price() {
      return this.selectedFood.price;
    },
  },
  created() {
    this.selectedFood = this.$store.getters["food/products"].find(
      (product) => product._id === this.id
    );
    console.log(this.$store.userId);
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
  font-size: 3rem;
  margin: 0 0 0.5rem 0;
}

.product__text h5 {
  font-family: "Berkshire Swash";
  font-size: 1.5rem;
  margin: 0.5 0 0rem 0;
}

.product__text h4 {
  margin: 0;
}

.product__actions {
  display: flex;
  justify-content: space-between;
}

li {
  margin: 1rem auto;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  text-align: center;
  max-width: 25rem;
  background: whitesmoke;
}

img {
  width: 38rem;
  height: 30rem;
  border-radius: 5%;
  object-fit: cover;
}

p {
  font-size: 1.2rem;
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
</style>
