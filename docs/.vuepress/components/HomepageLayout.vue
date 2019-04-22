<template>
  <div class="homepage-wrapper">
    <Header/>
    <Banner/>
  </div>
</template>
<script>
import Header from "./Header";
import Banner from "./Banner";
export default {
  name: "homepage",
  components: {
    Header,
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
