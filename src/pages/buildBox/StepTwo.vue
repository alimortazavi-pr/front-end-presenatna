<template>
  <div class="text-center">
    <h3>steg 2 av 3</h3>
    <h1>VÄLJ Dina presenter</h1>
    <p>
      Välkommen till det enklaste sättet att skicka någon en anpassad present i
      tre enkla steg. Lägg i varukorgen och upprepa för flera lådor, eller
      uppdatera din mängd i vagnen
    </p>
  </div>
  <div class="row my-5 bproduct bproduct-dark bg-white rounded">
    <div class="col-md-8 row">
      <div class=" col-md-2 my-2" v-if="box.title">
        <img
          class="img-fluid"
          :src="`http://localhost:5000/${box.image[0].path}`"
          alt="..."
        />
      </div>
      <div
        class=" col-md-2 my-2"
        v-for="(gift, i) in store.getters.gifts"
        :key="i"
      >
        <span class="CountGift">{{ gift.length }}</span>
        <img
          class="img-fluid"
          :src="`http://localhost:5000/${gift.images[0].path}`"
          alt="..."
        />
      </div>
    </div>
    <div class="col-md-4 p-4">
      <div class="text-center">
        <h3 class="text-dark">Innehållet</h3>
      </div>
      <div class="table-responsive">
        <table class="table tablesorter " id="">
          <!-- <thead class="">
            <tr>
              <th class="text-center">
                #
              </th>
              <th>
                Title
              </th>
              <th class="text-right">
                Actions
              </th>
            </tr>
          </thead> -->
          <tbody>
            <tr v-if="box.title">
              <td class="text-dark">
                {{ box.title }}
              </td>
              <td class="text-right text-dark">
                <i class="fa-light fa-crown"></i> {{ box.price }}
              </td>
            </tr>
            <tr v-for="(gift, i) in store.getters.gifts" :key="i">
              <td class="text-center text-dark">
                {{ gift.length }}
              </td>
              <td class="text-dark">
                {{ gift.title }}
              </td>
              <td class="text-right text-dark">
                <i class="fa-light fa-crown"></i> {{ gift.price }}
              </td>
              <td class="text-right text-dark">
                <button
                  type="button"
                  class="btn btn-danger btn-icon btn-sm "
                  @click.prevent="deleteGift(gift)"
                >
                  <i class="fa-solid fa-xmark"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="text-center">
        <h4 class="mb-0 text-dark">
          Summan : {{ store.getters.price }}
          <i class="fa-light fa-crown"></i>
        </h4>
      </div>
      <div class="text-center">
        <button
          class="btn btn-primary"
          :disabled="store.getters.gifts.length === 0"
          @click.prevent="pushToCard"
        >
          Välj ditt hälsningskort
        </button>
      </div>
    </div>
  </div>
  <div>
    <div class="row">
      <div class="col-6">
        <label for="category">Kategorier:</label>
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
        <label for="occasion">Tillfäll:</label>
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
      <div class="col-6 col-md-4" v-for="(gift, i) in gifts" :key="i">
        <div class="card card-product">
          <div class="card-image">
            <router-link to="#" data-toggle="modal" data-target="#giftModal" @click="openModal(gift)">
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
            <router-link to="#">
              <h4 class="card-title">{{ gift.title }}</h4>
            </router-link>
            <div class="card-footer">
              <div class="price-container">
                <span class="price">
                  <i class="fa-light fa-crown"></i> {{ gift.price }}</span
                >
              </div>
              <button
                @click.prevent="addGift(gift)"
                class="btn btn-primary btn-block mt-3"
              >
                Lägg till
              </button>
            </div>
          </div>
        </div>
        <!-- end card -->
      </div>

      <!-- Modal -->
      <div
        class="modal fade"
        id="giftModal"
        tabindex="-1"
        aria-labelledby="giftModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="giftModalLabel">{{giftSelect.title}}</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p class="text-dark">{{giftSelect.description}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Pagination :page="page" :pages="pages" :changePage="changePage" />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import api from "@/api";
import { useStore } from "vuex";
import { watchEffect } from "@vue/runtime-core";

//Import Components
import Pagination from "@/components/layouts/Pagination.vue";

export default {
  components: { Pagination },
  setup() {
    const store = useStore();
    const router = useRouter();

    const box = ref(store.getters.box);
    const gifts = ref([]);
    const categories = ref([]);
    const occasions = ref([]);
    const category = ref("");
    const occasion = ref("all");
    const pages = ref(1);
    const page = ref(1);
    const price = ref(0);
    const giftSelect = ref('');

    if (!store.getters.box.title) {
      router.push({ name: "StepOne" });
    }

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

    function addGift(gift) {
      store.dispatch("addGift", gift);
      store.dispatch("changePrice", gift.price);
    }

    function deleteGift(gift) {
      store.dispatch("delGift", gift);
      store.dispatch("changePrice", gift.price * -1 * gift.length);
    }

    function changePage(count) {
      store.dispatch("loading", true);
      page.value = count;
    }

    function pushToCard() {
      router.push({ name: "StepThree" });
    }

    function openModal(gift) {
      giftSelect.value = gift;
    }

    return {
      box,
      gifts,
      categories,
      category,
      occasions,
      occasion,
      pages,
      page,
      changePage,
      addGift,
      deleteGift,
      price,
      store,
      pushToCard,
      openModal,
      giftSelect
    };
  },
};
</script>

<style>
.CountGift {
  top: 5%;
  left: 5%;
  width: 1rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
}
</style>
