<template>
  <!-- <img
    src="@/assets/img/Logo.png"
    alt="logo"
    width="100"
    class="img-nav BG-BLACK"
  /> -->
  <nav class="navbar navbar-expand-xl fixed-top navbar-transparent navbar-dark">
    <div class="container-fluid">
      <div class="navbar-translate">
        <router-link
          :to="{ name: 'Home' }"
          class="navbar-brand p-0"
          rel="tooltip"
          data-placement="bottom"
        >
          <img
            src="@/assets/img/light-logo.png"
            alt="logo"
            width="150"
            class="light-logo"
          />
          <img
            src="@/assets/img/dark-logo.png"
            alt="logo"
            width="150"
            class="dark-logo d-none"
          />
          <!-- <span>Simply</span> Gift -->
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navigation"
          aria-controls="navigation-index"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-bar bar1"></span>
          <span class="navbar-toggler-bar bar2"></span>
          <span class="navbar-toggler-bar bar3"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse bg-light" id="navigation">
        <div class="navbar-collapse-header">
          <div class="row">
            <div class="col-6 collapse-brand ">
              <router-link to="#">
                <img src="@/assets/img/light-logo.png" alt="logo" width="200" />
                <!-- Simply
                <span> Gift </span> -->
              </router-link>
            </div>
            <div class="col-6 collapse-close text-right ">
              <button
                type="button"
                class="navbar-toggler"
                data-toggle="collapse"
                data-target="#navigation"
                aria-controls="navigation-index"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i class="fa-thin fa-xmark"></i>
              </button>
            </div>
          </div>
        </div>
        <ul class="navbar-nav ml-auto">
          <li class="dropdown nav-item">
            <router-link
              :to="{ name: 'Home' }"
              class="nav-link font-weight-bold"
            >
              <i class="fa-thin fa-house"></i>
              Hem
            </router-link>
          </li>
          <li class="dropdown nav-item">
            <router-link
              :to="{ name: 'StepOne' }"
              class="nav-link font-weight-bold"
            >
              <i class="fa-thin fa-gift"></i>
              Bygg din egen present
            </router-link>
          </li>
          <li class="dropdown nav-item">
            <router-link
              :to="{ name: 'GiftBoxesHome' }"
              class="nav-link font-weight-bold"
            >
              <i class="fa-thin fa-gifts"></i>
              Färdiga presenter
            </router-link>
          </li>
          <li class="dropdown nav-item">
            <router-link
              to=""
              class="dropdown-toggle nav-link font-weight-bold"
              data-toggle="dropdown"
            >
              <i class="fa-thin fa-balloons"></i> Present för tillfällen
            </router-link>
            <div class="dropdown-menu dropdown-with-icons bg-dark pt-4">
              <router-link
                v-for="(occasion, i) in occasions"
                :key="i"
                :to="{ name: 'GiftsHome', params: { occasion: occasion._id } }"
                class="dropdown-item m-0 pt-0 text-light"
              >
                <i class="fa-duotone fa-party-horn"></i> {{ occasion.title }}
              </router-link>
            </div>
          </li>
          <li class="dropdown nav-item">
            <router-link
              :to="{ name: 'ContactUs' }"
              class="nav-link font-weight-bold"
            >
              <i class="fa-thin fa-phone"></i>
              Kontakta Oss
            </router-link>
          </li>
          <li class="dropdown nav-item">
            <router-link
              :to="{ name: 'AboutUs' }"
              class="nav-link font-weight-bold"
            >
              <i class="fa-thin fa-circle-info"></i>
              Om Oss
            </router-link>
          </li>
          <li class="dropdown nav-item" v-if="!login">
            <router-link
              :to="{ name: 'Register' }"
              class="nav-link font-weight-bold"
            >
              <i class="fa-thin fa-user-plus"></i>
              Registrera
            </router-link>
          </li>
          <li class="dropdown nav-item" v-if="!login">
            <router-link
              :to="{ name: 'Login' }"
              class="nav-link font-weight-bold"
            >
              <i class="fa-thin fa-arrow-right-to-bracket"></i>
              Logga in
            </router-link>
          </li>
          <li class="dropdown nav-item" v-if="login">
            <router-link
              :to="admin ? { name: 'Gifts' } : { name: 'Profile' }"
              class="nav-link font-weight-bold"
            >
              <i class="fa-thin fa-user"></i>
              {{ admin ? "Admin Panel" : "profil" }}
            </router-link>
          </li>
          <li class="dropdown nav-item" v-if="login">
            <router-link
              :to="{ name: 'Cart' }"
              class="nav-link font-weight-bold position-relative"
            >
              <i class="fa-thin fa-basket-shopping-simple"></i>
              Vagn
              <span
                class="badge badge-danger ml-1"
                v-if="store.getters.cart > 0"
                >{{ store.getters.cart }}</span
              >
            </router-link>
          </li>
          <li class="dropdown nav-item" v-if="login">
            <router-link
              :to="{ name: 'LogOut' }"
              class="nav-link font-weight-bold"
            >
              <i class="fa-thin fa-arrow-right-from-bracket"></i>
              Logga ut
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
import { watchEffect } from "@vue/runtime-core";
import api from "@/api";

export default {
  setup() {
    const store = useStore();

    const login = ref(false);
    const admin = ref(false);
    const occasions = ref([]);

    watchEffect(() => {
      login.value = store.getters.login;
      admin.value = store.getters.user.admin;
    });

    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        document
          .querySelector(".navbar")
          .classList.remove("navbar-transparent");
        document.querySelector(".navbar").classList.remove("navbar-dark");
        document.querySelector(".navbar").classList.add("navbar-light");
        document.querySelector(".light-logo").classList.add("d-none");
        document.querySelector(".dark-logo").classList.remove("d-none");
        // document.querySelector(".img-nav").classList.add("BG-DARK");
        document.querySelectorAll(".font-weight-bold").forEach((nav) => {
          nav.classList.add("text-dark");
        });
      } else {
        document.querySelector(".navbar").classList.add("navbar-transparent");
        document.querySelector(".navbar").classList.add("navbar-dark");
        document.querySelector(".light-logo").classList.remove("d-none");
        document.querySelector(".dark-logo").classList.add("d-none");
        // document.querySelector(".img-nav").classList.remove("BG-DARK");
        document.querySelectorAll(".font-weight-bold").forEach((nav) => {
          nav.classList.remove("text-dark");
        });
      }
    });

    store.dispatch("loading", true);
    api
      .get("/occasions")
      .then((res) => {
        occasions.value = res.data.data;
        store.dispatch("loading", false);
      })
      .catch((err) => {
        console.log(err);
        store.dispatch("loading", false);
      });

    store.dispatch("loading", true);
    watchEffect(() => {
      if (store.getters.user.token) {
        api
          .get(`/cart`, {
            headers: { token: store.getters.user.token },
          })
          .then((res) => {
            store.dispatch("cart", res.data.data.products.length);
          })
          .catch((err) => {
            console.log(err.response);
            store.dispatch("loading", false);
          });
      }
    });

    return { login, admin, occasions, store };
  },
};
</script>

<style>
.navbar-toggler-bar {
  background-color: rgb(161, 50, 142) !important;
}

.img-nav {
  position: fixed;
  margin: 0.5rem;
  /* background-color: rgba(0, 0, 0, 0.726); */
  padding: 1rem;
  z-index: 9999;
  top: 0;
}

.BG-DARK {
  background-color: black;
}
</style>
