<template>
  <ul class="pagination pagination-primary mt-4 justify-content-center">
    <li
      v-for="(pg, i) in pages"
      :key="i"
      :class="`page-item ${pg == page ? 'active' : ''}`"
    >
      <button class="page-link" @click.prevent="changePage(pg)">{{ pg }}</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["page", "pages","changePage"],
};
</script>

<style></style>
