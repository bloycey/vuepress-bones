<template>
  <div class="banner-outer" v-bind:style="{ backgroundImage: 'url(' + getInfo.image + ')' }">
    <div class="container">
      <div class="banner-title">
        <h2>{{ getInfo.title }}</h2>
      </div>
    </div>
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

<style scoped>
.banner-outer {
  height: 600px;
  width: 100%;
  background-position: center center;
}

.banner-outer .container {
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner-title {
  background-color: rgba(34, 30, 31, 0.98);
  display: inline-block;
  padding: 2.5em 5em;
  border-radius: 5px;
  max-width: 50%;
}

h2 {
  text-align: center;
  font-size: 2.5em;
  color: #ffffff;
  font-weight: 700;
  text-decoration: none;
  border: none;
}
</style>
