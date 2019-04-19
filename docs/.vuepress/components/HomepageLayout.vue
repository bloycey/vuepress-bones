<template>
  <div class="page">
    <div class="container">
      <h1 class="text-center">{{ title }}</h1>
    </div>
    <Banner bannerTitle="I am a banner title"/>
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
    title: function() {
      return this.$siteTitle;
    }
  }
};
</script>
<style>
.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}
@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}
@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}

img {
  max-width: 100%;
}

.text-center {
  text-align: center;
}
</style>
