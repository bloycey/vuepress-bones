<template>
  <div class="page">
    <div class="container">
      <h1>{{ title }}</h1>
      <Content/>
    </div>
  </div>
</template>
<script>
export default {
  title: "PostLayout",
  computed: {
    title() {
      return this.$page.title;
    }
  }
};
</script>