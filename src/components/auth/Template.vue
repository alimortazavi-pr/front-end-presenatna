<template>
  <slot></slot>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";

//Import Components
import { watchEffect } from "@vue/runtime-core";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    watchEffect(() => {
      if (store.getters.login !== null) {
        if (store.getters.login) {
          router.push({ name: "Home" });
        }
      }
    });
  },
};
</script>

<style></style>
