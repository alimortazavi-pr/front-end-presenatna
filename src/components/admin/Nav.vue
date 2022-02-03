<template>
  <nav class="navbar navbar-expand-xl fixed-top navbar-transparent navbar-dark">
    <div class="container-fluid">
      <div class="navbar-translate">
        <router-link
          :to="{ name: 'Home' }"
          class="navbar-brand"
          rel="tooltip"
          data-placement="bottom"
        >
          <!-- <img src="@/assets/img/Logo.png" alt="logo" width="60" /> -->
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
            <div class="col-6 collapse-brand">
              <router-link to="#">
                <img src="@/assets/img/Logo.png" alt="logo" width="100" />
                <!-- Simply
                <span> Gift </span> -->
              </router-link>
            </div>
            <div class="col-6 collapse-close text-right">
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
              :to="{ name: 'Orders' }"
              class="nav-link font-weight-bold"
            >
              <i class="fa-thin fa-cart-flatbed-boxes"></i>
              Orders
            </router-link>
          </li>
          <li class="dropdown nav-item">
            <router-link
              :to="{ name: 'Gifts' }"
              class="nav-link font-weight-bold"
            >
              <i class="fa-thin fa-gift"></i>
              Gifts
            </router-link>
          </li>
          <li class="dropdown nav-item">
            <router-link
              :to="{ name: 'GiftBoxes' }"
              class="nav-link font-weight-bold"
            >
              <i class="fa-thin fa-gifts"></i>
              Gift Boxes
            </router-link>
          </li>
          <li class="dropdown nav-item">
            <router-link
              :to="{ name: 'Boxes' }"
              class="nav-link font-weight-bold"
            >
              <i class="fa-thin fa-box"></i>
              Boxes
            </router-link>
          </li>
          <li class="dropdown nav-item">
            <router-link
              :to="{ name: 'Cards' }"
              class="nav-link font-weight-bold"
            >
              <i class="fa-thin fa-note-sticky"></i>
              Cards
            </router-link>
          </li>
          <li class="dropdown nav-item">
            <router-link
              :to="{ name: 'Occasions' }"
              class="nav-link font-weight-bold"
            >
              <i class="fa-thin fa-party-horn"></i>
              Occasions
            </router-link>
          </li>
          <li class="dropdown nav-item">
            <router-link
              :to="{ name: 'Categories' }"
              class="nav-link font-weight-bold"
            >
              <i class="fa-thin fa-layer-group"></i>
              Categories
            </router-link>
          </li>
          <li class="dropdown nav-item">
            <router-link
              :to="{ name: 'Profile' }"
              class="nav-link font-weight-bold"
            >
              <i class="fa-thin fa-user"></i>
              Profile
            </router-link>
          </li>
          <li class="dropdown nav-item">
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

export default {
  setup() {
    const store = useStore();
    const login = ref(false);
    const admin = ref(false);

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
        document.querySelectorAll(".nav-link").forEach((nav) => {
          nav.classList.add("text-dark");
        });
      } else {
        document.querySelector(".navbar").classList.add("navbar-transparent");
        document.querySelector(".navbar").classList.add("navbar-dark");
        document.querySelectorAll(".nav-link").forEach((nav) => {
          nav.classList.remove("text-dark");
        });
      }
    });

    return { login, admin };
  },
};
</script>

<style></style>
