<template>
  <div class="header-wrapper">
    <div class="container">
      <h1 class="text-center">{{ siteTitle }}</h1>
    </div>
    <Menu/>
  </div>
</template>

<script>
import Menu from "./Menu";
export default {
  name: "Header",
  components: {
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
</style>
