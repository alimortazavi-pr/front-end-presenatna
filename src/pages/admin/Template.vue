<template>
  <Nav />
  <section class="section Admin-Section bg-white">
    <router-view class="container"></router-view>
  </section>
  <Footer />
</template>

<script>
import { watchEffect } from "@vue/runtime-core";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

//Import Components
import Nav from "@/components/admin/Nav.vue";
import Footer from "@/components/layouts/Footer.vue";

export default {
  components: { Nav, Footer },
  setup() {
    const store = useStore();
    const router = useRouter();

    watchEffect(() => {
      if (store.getters.login !== null) {
        if (!store.getters.login || !store.getters.user.admin) {
          router.push({ name: "Home" });
        }
      }
    });
  },
};
</script>

<style>
.Admin-Section {
  min-height: 100vh;
  margin-top: 6rem;
  background-color: white;
}
</style>
