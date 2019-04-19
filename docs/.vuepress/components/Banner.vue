<template>
  <div class="banner">
    <p>Banner Incoming</p>
    <p>{{ getInfo.title }}</p>
    <p>{{ getInfo.image }}</p>
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
