<template>
  <div class="page">
    <div class="container">
      <h1 v-html="title"></h1>
      <h2 v-html="author"></h2>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    title: function() {
      return this.$page.title;
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
</style>
