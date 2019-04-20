<template>
  <div class="page">
    <h1>{{ title }}</h1>
    <Content/>
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