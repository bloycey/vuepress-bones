<template>
  <div class="container">
    <ul class="menu-wrapper">
      <li v-for="item in getMenuItems">
        <router-link :to="item.frontmatter.url">{{ item.frontmatter.title }}</router-link>
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
      return getPagesArray(this.$site.pages, "/menu-items/").sort(
        (a, b) => b.frontmatter.sortorder - a.frontmatter.sortorder
      );
    }
  }
};
</script>
<style scoped>
.menu-wrapper {
  padding: 15px;
  text-align: center;
}

.menu-wrapper li {
  display: inline-block;
}

.menu-wrapper li a {
  padding: 15px 30px;
}
</style>


