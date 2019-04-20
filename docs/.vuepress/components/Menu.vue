<template>
  <div>
    <h3>MENU GOES HERE</h3>
    <ul v-for="item in getMenuItems">
      <li>
        <a v-bind:href="item.frontmatter.url">{{item.frontmatter.title}}</a>
      </li>
    </ul>
  </div>
</template>
<script>
import { getPagesArray } from "../utils/getData.js";
export default {
  name: "Menu",
  computed: {
    getMenuItems: function() {
      return getPagesArray(this.$site.pages, "/menu-items/");
    }
  }
};
</script>
<style>
</style>

