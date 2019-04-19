<template>
  <div class="banner">
    <p>Banner Incoming</p>
    <p>{{ getInfo.title }}</p>
    <img v-bind:src="getInfo.image" alt="Banner Image">
  </div>
</template>
<script>
import { getSinglePageInfo } from "../utils/getData.js";

export default {
  name: "Banner",
  computed: {
    getInfo: function() {
      return getSinglePageInfo(this.$site.pages, "/homepage-banner/");
    }
  }
};
</script>
<style>
</style>
