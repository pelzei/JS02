<template>
  <div>
    <the-header></the-header>
    <transition name="route" mode="out-in">
      <router-view></router-view>
    </transition>
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

.route-leave-from,
.route-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.route-leave-active {
  transition: all 0.3s ease-in;
}
.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}
</style>
