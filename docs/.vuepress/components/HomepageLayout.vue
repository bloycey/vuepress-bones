<template>
  <div class="page">
    <div class="container">
      <h1 class="text-center">{{ siteTitle }}</h1>
    </div>
    <Menu/>
    <Banner/>
  </div>
</template>
<script>
import Banner from "./Banner";
import Menu from "./Menu";
export default {
  name: "homepage",
  components: {
    Banner,
    Menu
  },
  computed: {
    siteTitle: function() {
      return this.$siteTitle;
    }
  }
};
</script>
<style>
@import "../utils/core.css";
</style>
