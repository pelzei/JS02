<template>
  <base-card>
    <section>
      <h2>Välkommen!</h2>
      <p>Ditt användar-id är: {{ userName }}</p>
    </section>
  </base-card>
</template>

<script>
export default {
  computed: {
    userName() {
      return this.$store.getters["userId"];
    },
  },
};
</script>

<style scoped>
section {
  text-align: center;
  margin: none;
  max-width: 40rem;
  border: none;
  border-radius: 12px;
}
</style>
