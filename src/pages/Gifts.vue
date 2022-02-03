<template>
  <Nav />
  <section class="section Admin-Section bg-white">
    <div class="container">
      <div class="title">
        <h3 class="text-dark">
          Present för tillfällen
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
        <div class="col-6">
          <label for="occasion">Occasion:</label>
          <select
            class="form-control bg-dark"
            id="occasion"
            placeholder="occasion"
            v-model="occasion"
          >
            <option value="all">All</option>
            <option
              v-for="(oc, i) in occasions"
              :key="i"
              :value="oc._id"
              :selected="oc._id === occasion"
              >{{ oc.title }}</option
            >
          </select>
        </div>
      </div>

      <div class="text-center mt-5" v-if="gifts.length === 0">
        <h4>There is no gift ...</h4>
      </div>

      <div class="row" v-else>
        <div class="col-md-4" v-for="(gift, i) in gifts" :key="i">
          <div class="card card-product">
            <div class="card-image">
              <router-link :to="{name : 'SingleGift' , params : {gift : gift._id}}">
                <img
                  :src="`http://localhost:5000/${gift.images[0].path}`"
                  alt="..."
                />
              </router-link>
            </div>
            <div class="card-body">
              <h6 class="category text-danger">
                {{ gift.brand }}
              </h6>
              <router-link :to="{name : 'SingleGift' , params : {gift : gift._id}}">
                <h4 class="card-title">{{ gift.title }}</h4>
              </router-link>
              <div class="card-footer">
                <div class="price-container">
                  <span class="price"> <i class="fa-light fa-crown"></i> {{ gift.price }}</span>
                </div>
                <button
                  @click.prevent="addGift(gift)"
                  class="btn btn-primary btn-block mt-3"
                >
                  Add To Box
                </button>
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
import { useRoute, useRouter } from "vue-router";

//Import Components
import Nav from "@/components/layouts/Nav.vue";
import Footer from "@/components/layouts/Footer.vue";
import Pagination from "@/components/layouts/Pagination.vue";

export default {
  components: { Nav, Footer, Pagination },
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();

    const gifts = ref([]);
    const categories = ref([]);
    const occasions = ref([]);
    const category = ref("");
    const occasion = ref(route.params.occasion);
    const pages = ref(1);
    const page = ref(1);

    watchEffect(() => {
      store.dispatch("loading", true);
      api
        .get(
          `/gifts?page=${page.value}&&category=${category.value}&occasion=${occasion.value}`
        )
        .then((res) => {
          pages.value = res.data.data.gifts.pages;
          page.value = res.data.data.gifts.page;
          gifts.value = res.data.data.gifts.docs;
          categories.value = res.data.data.categories;
          occasions.value = res.data.data.occasions;
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

    function addGift(gift) {
      store.dispatch("addGift", gift);
      store.dispatch("changePrice", gift.price);
      router.push({ name: "StepOne" });
    }

    return {
      gifts,
      categories,
      category,
      occasions,
      occasion,
      pages,
      page,
      changePage,
      addGift,
    };
  },
};
</script>

<style></style>
