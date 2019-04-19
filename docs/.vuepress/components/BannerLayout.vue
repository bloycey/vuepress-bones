<template>
  <div class="banner">
    <div class="container">
      <p>HERE IS THE BANNER</p>
      <h1 v-html="title"></h1>
      <p>{{author}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Banner"
};
</script>