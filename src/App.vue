<template>
  <router-view></router-view>
  <Loading v-if="loading" />
</template>

<script>
import { onMounted, ref, watchEffect } from "@vue/runtime-core";
import { useStore } from "vuex";
import api from "@/api";
import Loading from "@/components/layouts/Loading.vue";

export default {
  components: { Loading },
  name: "App",
  setup() {
    const store = useStore();

    const loading = ref(false);

    onMounted(() => {
      const token = localStorage.getItem("token");
      if (token) {
        api
          .get(`/check-login`, {
            headers: {
              token: token,
            },
          })
          .then((response) => {
            store.dispatch("login", { token, user: response.data.data.user });
          })
          .catch(() => {
            store.dispatch("notLogin");
            localStorage.removeItem("token");
          });
      } else {
        store.dispatch("notLogin");
      }
    });

    watchEffect(() => {
      loading.value = store.getters.loading;
    });

    return { loading };
  },
};
</script>

<style>
body {
  height: 100%;
}

#app {
  height: 100%;
  position: relative;
}

.bg-gift {
  background-image: url("./assets/img/unnamed.jpg");
}
.section-signup .square-1 {
  height: 300px;
  width: 300px;
  background-image: url(./assets/img/square1.png);
  top: 80px;
  left: 100px;
  opacity: 0.3;
  animation-duration: 5s;
}
.section-signup .square-2 {
  height: 200px;
  width: 200px;
  background: url(./assets/img/square3.png);
  background-size: cover;
  bottom: 40px;
  left: 600px;
  opacity: 0.1;
  animation-duration: 8s;
}
.section-signup .square-3 {
  height: 100px;
  width: 100px;
  background: url(./assets/img/square2.png);
  background-size: cover;
  top: 300px;
  left: 700px;
  animation-duration: 5s;
}
.section-signup .square-4 {
  height: 250px;
  width: 250px;
  background: url(./assets/img/square3.png);
  background-size: cover;
  top: 0;
  right: 100px;
  opacity: 0.8;
  animation-duration: 9s;
}
.register-page .square-1 {
  height: 300px;
  width: 300px;
  background-image: url(./assets/img/square1.png);
  top: 175px;
  right: 150px;
  opacity: 0.8;
}
.register-page .square-2 {
  height: 120px;
  width: 120px;
  background-image: url(./assets/img/square2.png);
  opacity: 0.9;
  top: 310px;
  right: 390px;
}
.register-page .square-3 {
  width: 200px;
  height: 200px;
  background-image: url(./assets/img/square3.png);
  opacity: 0.3;
  top: -50px;
  right: 400px;
}
.register-page .square-4 {
  height: 200px;
  width: 200px;
  background-image: url(./assets/img/square4.png);
  right: -50px;
  top: 525px;
}
.register-page .square-5 {
  height: 150px;
  width: 150px;
  opacity: 0.5;
  top: 500px;
  right: 470px;
}
.register-page .square-5,
.register-page .square-6 {
  background-image: url(./assets/img/square5.png);
}
.register-page .square-6 {
  height: 70px;
  width: 70px;
  opacity: 0.9;
  top: 105px;
  right: 20px;
}
.register-page .square-7 {
  height: 200px;
  width: 200px;
  background-image: url(./assets/img/square5.png);
  left: -100px;
  top: 100px;
  opacity: 0.4;
}
.register-page .square-8 {
  height: 100px;
  width: 100px;
  background-image: url(./assets/img/square1.png);
  left: 300px;
  top: 400px;
  opacity: 0.4;
}
</style>
