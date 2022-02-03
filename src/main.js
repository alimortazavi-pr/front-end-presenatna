import { createApp } from 'vue'
import App from './App.vue'

//Import Assets
import "@/assets/css/style.css";
import "@/assets/icons/fontawesome/css/all.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

//Import Vuex
import store from "@/store";

//Import Router
import router from "@/router";

const Vue = createApp(App);
Vue.use(store);
Vue.use(router);
Vue.mount("#app");