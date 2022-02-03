<template>
  <Nav />
  <section class="section Admin-Section bg-white">
    <div class="wrapper bg-white">
      <div class="section">
        <div class="container bg-gray p-4">
          <div class="row">
            <div class="col-lg-6 col-md-12 ">
              <div
                id="productCarousel"
                class="carousel slide"
                data-ride="carousel"
                data-interval="8000"
              >
                <ol class="carousel-indicators mt-5">
                  <li
                    v-for="(image, i) in gift.images"
                    :key="i"
                    data-target="#productCarousel"
                    :data-slide-to="i"
                    class="active"
                  ></li>
                </ol>
                <div class="carousel-inner" role="listbox">
                  <div
                    v-for="(image, i) in gift.images"
                    :key="i"
                    :class="`carousel-item ${i == 0 ? 'active' : ''}`"
                  >
                    <img
                      class="d-block"
                      :src="`http://localhost:5000/${image.path}`"
                      alt="slide"
                    />
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#productCarousel"
                  role="button"
                  data-slide="prev"
                >
                  <button
                    type="button"
                    class="btn btn-warning btn-icon btn-round btn-sm"
                    name="button"
                  >
                    <i class="fa-light fa-chevron-left"></i>
                  </button>
                </a>
                <a
                  class="carousel-control-next"
                  href="#productCarousel"
                  role="button"
                  data-slide="next"
                >
                  <button
                    type="button"
                    class="btn btn-warning btn-icon btn-round btn-sm"
                    name="button"
                  >
                    <i class="fa-light fa-chevron-right"></i>
                  </button>
                </a>
              </div>
            </div>
            <div class="col-lg-6 col-md-12 mx-auto">
              <h2 class="title text-dark">{{ gift.title }}</h2>
              <h4 class="title text-dark">{{ gift.brand }}</h4>
              <br />
              <h2 class="main-price text-dark">{{ gift.title }}</h2>
              <h5 class="category text-dark">beskrivning</h5>
              <p class="description text-dark">
                {{ gift.description }}
              </p>
              <br />
              <div class="row pick-size">
                <div class="col-md-6">
                  <label>Antal</label>
                  <div class="input-group align-items-center">
                    <div class="input-group-btn">
                      <button
                        id="down"
                        class="btn btn-danger btn-round btn-simple"
                        @click.prevent="down"
                      >
                        <i class="fa-light fa-minus"></i>
                      </button>
                    </div>
                    <h3 class="m-0 p-0 text-dark">{{ gift.length }}</h3>
                    <div class="input-group-btn">
                      <button
                        id="up"
                        class="btn btn-danger btn-round btn-simple"
                        @click.prevent="up"
                      >
                        <i class="fa-light fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div class="row justify-content-start">
                <button class="btn btn-warning ml-3" @click.prevent="addGift">
                  Lägg till &nbsp;<i class="fa-duotone fa-box"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
export default {
  components: { Nav, Footer },
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();

    const gift = ref({
      title: "",
      brand: "",
      description: "",
      length: 1,
    });

    store.dispatch("loading", true);
    watchEffect(() => {
      api
        .get(`/gifts/${route.params.gift}`)
        .then((res) => {
          gift.value = { ...res.data.data, length: 1 };
          store.dispatch("loading", false);
        })
        .catch((err) => {
          console.log(err.response);
          store.dispatch("loading", false);
        });
    });

    function down() {
      if (gift.value.length > 1) {
        gift.value.length--;
      }
    }

    function up() {
      gift.value.length++;
    }

    function addGift() {
      store.dispatch("addGift", {
        ...gift.value,
        startLength: gift.value.length,
      });
      store.dispatch("changePrice", gift.value.price * gift.value.length);
      router.push({ name: "StepOne" });
    }

    return { gift, addGift, up, down };
  },
};
</script>

<style></style>
