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
                    v-for="(image, i) in giftBox.images"
                    :key="i"
                    data-target="#productCarousel"
                    :data-slide-to="i"
                    class="active"
                  ></li>
                </ol>
                <div class="carousel-inner" role="listbox">
                  <div
                    v-for="(image, i) in giftBox.images"
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
              <h2 class="title text-dark">{{ giftBox.title }}</h2>
              <h4 class="title text-dark">{{ giftBox.brand }}</h4>
              <br />
              <h2 class="main-price text-dark">
                {{ giftBox.price }} <i class="fa-light fa-crown"></i>
              </h2>
              <h5 class="category text-dark">beskrivning</h5>
              <p class="description text-dark">
                {{ giftBox.description }}
              </p>
              <hr />
              <button
                type="button"
                class="btn btn-primary"
                data-toggle="modal"
                data-target=".bd-example-modal-lg"
              >
                Välj hälsningskort
              </button>

              <div
                class="modal fade bd-example-modal-lg"
                tabindex="-1"
                role="dialog"
                aria-labelledby="myLargeModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-lg  ">
                  <div class="modal-content bg-white">
                    <div class="p-5">
                      <div class="text-center mt-5" v-if="cards.length === 0">
                        <h4>There is no card ...</h4>
                      </div>

                      <div class="row" v-else>
                        <div
                          class="col-6 col-md-4 my-3"
                          v-for="(card, i) in cards"
                          :key="i"
                        >
                          <div class="card card-product">
                            <div class="card-image">
                              <router-link to="#">
                                <img
                                  :src="
                                    `http://localhost:5000/${card.images[0].path}`
                                  "
                                  alt="..."
                                />
                              </router-link>
                            </div>
                            <div class="card-body">
                              <div class="card-footer">
                                <button
                                  @click.prevent="addCard(card)"
                                  class="btn btn-primary btn-block mt-3"
                                >
                                  Välj
                                </button>
                              </div>
                            </div>
                          </div>
                          <!-- end card -->
                        </div>
                      </div>
                      <Pagination
                        :page="page"
                        :pages="pages"
                        :changePage="changePage"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="row my-5 bproduct bproduct-dark"
                v-if="store.getters.card.title"
              >
                <div class="col-md-12 row p-4">
                  <div class="col-md-4">
                    <img
                      :src="
                        `http://localhost:5000/${store.getters.card.images[0].path}`
                      "
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <form>
                      <div class="form-group" v-if="!checkMsg">
                        <label for="title" class="text-dark">Message:</label
                        ><textarea
                          type="text"
                          placeholder="message"
                          class="form-control TextArea text-dark"
                          v-model="message"
                        />
                        <p class="text-dark" id="msgL">
                          {{ msgL }} characters remaining
                        </p>
                      </div>
                      <div class="form-check">
                        <label class="form-check-label text-dark">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            v-model="checkMsg"
                          />
                          <span class="form-check-sign"></span>
                          Click here and we’ll send the card blank for you to
                          write yourself!
                        </label>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <hr />
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
                    <h3 class="m-0 p-0 text-dark">{{ giftBox.length }}</h3>
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
                <button
                  class="btn btn-warning ml-3"
                  @click.prevent="addGiftBox"
                  :disabled="
                    checkMsg == false
                      ? message.length === 0
                        ? true
                        : message.length >= 120
                        ? true
                        : false
                      : false
                  "
                >
                  lägg till &nbsp;<i class="fa-duotone fa-cart-shopping"></i>
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
import { watch, watchEffect } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";

//Import Components
import Nav from "@/components/layouts/Nav.vue";
import Footer from "@/components/layouts/Footer.vue";
import Pagination from "@/components/layouts/Pagination.vue";
import Swal from "@/assets/js/Swal";

export default {
  components: { Nav, Footer, Pagination },
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();

    const giftBox = ref({
      title: "",
      brand: "",
      description: "",
      length: 1,
    });
    const cards = ref([]);
    const message = ref("");
    const msgL = ref(120);
    const checkMsg = ref(false);
    const pages = ref(1);
    const page = ref(1);

    store.dispatch("loading", true);
    watchEffect(() => {
      api
        .get(`/gift-boxes/${route.params.giftBox}`)
        .then((res) => {
          giftBox.value = { ...res.data.data, length: 1 };
          store.dispatch("loading", false);
        })
        .catch((err) => {
          console.log(err.response);
          store.dispatch("loading", false);
        });
    });

    function down() {
      if (giftBox.value.length > 1) {
        giftBox.value.length--;
      }
    }

    function up() {
      if (giftBox.value.length < 2) {
        giftBox.value.length++;
      }
    }

    watchEffect(() => {
      store.dispatch("loading", true);
      api
        .get(`/cards?page=${page.value}`)
        .then((res) => {
          pages.value = res.data.data.pages;
          page.value = res.data.data.page;
          cards.value = res.data.data.docs;
          store.dispatch("loading", false);
        })
        .catch((err) => {
          console.log(err.response);
          store.dispatch("loading", false);
        });
    });

    function addCard(card) {
      store.dispatch("addCard", card);
    }

    function changePage(count) {
      store.dispatch("loading", true);
      page.value = count;
    }

    watch(message, () => {
      msgL.value = 120 - message.value.length;
      if (message.value.length >= 120) {
        document.querySelector("#msgL").classList.add("text-danger");
        document.querySelector("#msgL").classList.remove("text-dark");
      } else {
        document.querySelector("#msgL").classList.add("text-dark");
        document.querySelector("#msgL").classList.remove("text-danger");
      }
    });

    function addGiftBox() {
      if (!store.getters.login) {
        return Swal.fire({
          title: "Fel",
          text: `Vänligen logga in`,
          icon: "error",
        });
      }
      store.dispatch("loading", true);
      if (!checkMsg.value) {
        store.dispatch("addMessage", message.value);
      } else {
        store.dispatch("addMessage", "");
      }
      api
        .post(
          `/products`,
          {
            card: store.getters.card._id,
            gifts: store.getters.gifts,
            giftBox: giftBox.value,
            message: store.getters.message,
            price: giftBox.value.price * giftBox.value.length,
            length: giftBox.value.length,
            giftBoxType: true,
          },
          { headers: { token: store.getters.user.token } }
        )
        .then(() => {
          store.dispatch("loading", false);

          store.dispatch("reset");

          Swal.fire({
            title: "Success",
            text: `Kontrollera din kundvagn`,
            icon: "success",
          });
          router.push({ name: "Home" });
        })
        .catch((err) => {
          console.log(err.response);
          store.dispatch("loading", false);
        });
    }

    return {
      giftBox,
      addGiftBox,
      up,
      down,
      cards,
      pages,
      page,
      changePage,
      store,
      addCard,
      message,
      checkMsg,
      msgL,
    };
  },
};
</script>

<style>
.bg-gray {
  background-color: rgba(128, 128, 128, 0.157);
  border-radius: 0.5rem;
}
</style>
