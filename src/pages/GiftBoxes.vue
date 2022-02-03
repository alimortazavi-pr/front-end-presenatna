<template>
  <Nav />
  <section class="section Admin-Section">
    <div class="container">
      <div class="title">
        <h3 class="text-dark">
          Färdiga presenter
        </h3>
      </div>
      <div class="row">
        <div class="col-6">
          <label for="category">Category:</label>
          <select
            class="form-control bg-dark"
            id="category"
            placeholder="category"
            v-model="category"
          >
            <option value="">All</option>
            <option
              v-for="(category, i) in categories"
              :key="i"
              :value="category._id"
              >{{ category.title }}</option
            >
          </select>
        </div>
      </div>
      <div class="text-center mt-5" v-if="giftBoxes.length === 0">
        <h4>There is no gift ...</h4>
      </div>
      <div class="row" v-else>
        <div class="col-md-4" v-for="(giftBox, i) in giftBoxes" :key="i">
          <div class="card card-product">
            <div class="card-image">
              <router-link :to="{name : 'SingleGiftBox' , params : {giftBox : giftBox._id}}">
                <img
                  :src="`https://presentana.herokuapp.com/${giftBox.images[0].path}`"
                  alt="..."
                />
              </router-link>
            </div>
            <div class="card-body">
              <h6 class="category text-danger">
                {{ giftBox.brand }}
              </h6>
              <router-link :to="{name : 'SingleGiftBox' , params : {giftBox : giftBox._id}}">
                <h4 class="card-title">{{ giftBox.title }}</h4>
              </router-link>
              <div class="card-footer">
                <div class="price-container">
                  <span class="price"> <i class="fa-light fa-crown"></i> {{ giftBox.price }}</span>
                </div>
              </div>
            </div>
          </div>
          <!-- end card -->
        </div>
      </div>
    </div>
    <Pagination :page="page" :pages="pages" :changePage="changePage" />
  </section>
  <Footer />
</template>

<script>
import { ref } from "@vue/reactivity";
import api from "@/api";
import { useStore } from "vuex";
import { watchEffect } from "@vue/runtime-core";
import { useRouter } from 'vue-router';

//Import Components
import Nav from "@/components/layouts/Nav.vue";
import Footer from "@/components/layouts/Footer.vue";
import Pagination from "@/components/layouts/Pagination.vue";

export default {
  components: { Nav, Footer, Pagination },
  setup() {
    const store = useStore();
    const router = useRouter();

    const giftBoxes = ref([]);
    const categories = ref([]);
    const category = ref("");
    const pages = ref(1);
    const page = ref(1);

    watchEffect(() => {
      store.dispatch("loading", true);
      api
        .get(`/gift-boxes?page=${page.value}&&category=${category.value}`)
        .then((res) => {
          giftBoxes.value = res.data.data.giftBoxes.docs;
          categories.value = res.data.data.categories;
          store.dispatch("loading", false);
        })
        .catch((err) => {
          console.log(err.response);
          store.dispatch("loading", false);
        });
    });

    function changePage(count) {
      store.dispatch("loading", true);
      page.value = count;
    }

    function addGiftBox(giftBox) {
      store.dispatch("addGiftBox", giftBox);
      store.dispatch("changePrice", giftBox.price);
      router.push({ name: "StepOne" });
    }

    return { giftBoxes, categories, category, pages, page, changePage,addGiftBox };
  },
};
</script>

<style></style>
