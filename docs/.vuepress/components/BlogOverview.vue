<template>
  <div class="container">
    <h2>Blog Overview Page</h2>
    <ul class="menu-wrapper">
      <li v-for="blog in getBlogItems">
        <router-link :to="blog.path">{{blog.frontmatter.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { getPagesArray } from "../utils/getData.js";
export default {
  name: "BlogOverview",
  computed: {
    getBlogItems: function() {
      return getPagesArray(this.$site.pages, "/gulp-test/").filter(
        blog => blog.path !== "/blog/"
      );
    }
  }
};
</script>

<style>
@import "../utils/core.css";
</style>
