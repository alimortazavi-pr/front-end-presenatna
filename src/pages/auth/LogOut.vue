<template>
  <Loading />
</template>

<script>
import { useRouter } from "vue-router";
import { useStore } from "vuex";

//Import Components
import { Toast } from "@/assets/js/Swal";
import Loading from '@/components/layouts/Loading.vue';
export default {
  components: { Loading },
  setup() {
    const router = useRouter();
    const store = useStore();

    store.dispatch("logOut");
    localStorage.removeItem("token");
    Toast.fire({
      icon: "warning",
      title: "Logout successfully",
    });
    router.push({ name: "Home" });
  },
};
</script>

<style></style>
