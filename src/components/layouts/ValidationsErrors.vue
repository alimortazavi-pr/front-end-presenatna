<template>
  <ul
    class="alert alert-danger"
    role="alert"
    style="list-style:none;bproduct : none;"
    v-if="errors.length !== 0"
  >
    <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
  </ul>
</template>

<script>
export default {
  props: ["errors"],
};
</script>

<style></style>
