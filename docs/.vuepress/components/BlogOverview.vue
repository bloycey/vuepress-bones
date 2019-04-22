<template>
  <div class="blog-overview-page">
    <Header/>
    <div class="container">
      <h2>Blog Overview Page</h2>
      <ul class="menu-wrapper">
        <li v-for="blog in getBlogItems">
          <router-link :to="blog.path">{{blog.frontmatter.title}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from "./Header";
import { getPagesArray } from "../utils/getData.js";
export default {
  name: "BlogOverview",
  computed: {
    getBlogItems: function() {
      return getPagesArray(this.$site.pages, "/bones-blog/");
    }
  }
};
</script>

<style>
@import "../utils/core.css";
</style>
