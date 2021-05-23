<template>
  <div>
    <the-header></the-header>
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from "./components/nav/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
  computed: {
    didAutoLogout() {
      return this.$store.didAutoLogout;
    },
  },
  created() {
    this.$store.dispatch("autoLogin");
  },
  watch: {
    didAutoLogout(curValue, oldValue) {
      if (curValue && curValue !== oldValue) {
        this.$router.replace("/foods");
      }
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Berkshire+Swash&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
  background: orange;
}
</style>
