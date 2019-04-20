<template>
  <div class="page">
    <div class="container">
      <h1 class="text-center">{{ siteTitle }}</h1>
    </div>
    <Banner/>
  </div>
</template>
<script>
import Banner from "./Banner";
export default {
  name: "homepage",
  components: {
    Banner
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
