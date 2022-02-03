<template>
  <Nav />
  <section class="section Admin-Section">
    <div class="container bg-gray p-4">
      <div class="row">
        <div class="col-md-6 mt-3 d-flex align-items-center">
          <h4 class="mr-3 text-dark">Status :</h4>
          <h4 class="text-primary">{{ order.status }}</h4>
        </div>
        <div class="col-12 my-5" v-if="order.method == 'ship'">
          <h4 class="text-dark">Information :</h4>
          <div class="">
            <table class="table bproduct bproduct-dark">
              <thead>
                <tr>
                  <th class="text-center text-dark">Land</th>
                  <th class="text-center text-dark">Stad</th>
                  <th class="text-center text-dark">postnummer</th>
                  <th class="text-center text-dark">Adress</th>
                  <th class="text-center text-dark">Mobil</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-center text-dark">{{ order.country }}</td>
                  <td class="text-center text-dark">{{ order.city }}</td>
                  <td class="text-center text-dark">{{ order.postalCode }}</td>
                  <td class="text-center text-dark">{{ order.address }}</td>
                  <td class="text-center text-dark">{{ order.mobile }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col-md-12">
          <div class="card  card-plain">
            <div class="card-header">
              <h4 class="font-bold text-dark">Produkter :</h4>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table tablesorter  table-shopping" id="">
                  <thead class="">
                    <tr>
                      <th class="text-center text-dark"></th>
                      <th class="text-dark">
                        Produkt
                      </th>
                      <th class="text-right text-dark">
                        Antal
                      </th>
                      <th class="text-right text-dark">
                        Pris
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(product, i) in order.products" :key="i">
                      <td>
                        <div class="img-container">
                          <img
                            v-if="product.giftBoxType"
                            :src="
                              `https://presentana.herokuapp.com/${product.giftBox.images[0].path}`
                            "
                            alt="..."
                          />
                          <img
                            v-else
                            :src="
                              `https://presentana.herokuapp.com/${product.box.image.path}`
                            "
                            alt="..."
                          />
                        </div>
                      </td>
                      <td class="td-name text-dark">
                        <h4 class="text-dark">
                          {{
                            product.giftBoxType
                              ? product.giftBox.title
                              : "Bygglåda"
                          }}
                        </h4>
                        <div
                          style="font-size : 0.8rem;"
                          v-if="!product.giftBoxType"
                        >
                          Låda:
                          <span class="text-primary">{{
                            product.box.title
                          }}</span>
                        </div>
                        <div style="font-size : 0.8rem;" class="text-dark">
                          Kort:
                          <span class="text-primary text-dark">{{
                            product.card.title
                          }}</span>
                        </div>
                        <div style="font-size : 0.8rem;" class="text-dark">
                          Meddelande:
                          <span class="text-primary text-dark">{{
                            product.message
                          }}</span>
                        </div>
                        <div
                          style="font-size : 0.8rem;"
                          v-if="!product.giftBoxType"
                        >
                          <div class="text-dark">Items :</div>
                          <div
                            v-for="(gift, i) in product.gifts"
                            :key="i"
                            class="ml-3 text-primary"
                          >
                            {{ gift.length }} x {{ gift.title }}
                          </div>
                        </div>
                      </td>
                      <td class="td-number text-dark">
                        {{ product.length }}
                      </td>
                      <td class="td-number text-dark">
                        <small><i class="fa-light fa-crown"></i></small> {{ product.price }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <hr class="bproduct-light" />
                <h4 class="text-dark">
                  Total
                </h4>
                <h4 class="text-dark"><small><i class="fa-light fa-crown"></i></small> {{ order.price }}</h4>
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

    const order = ref({});

    watchEffect(() => {
      if (store.getters.login !== null) {
        if (!store.getters.login) {
          router.push({ name: "Home" });
        }
      }
    });

    store.dispatch("loading", true);
    watchEffect(() => {
      if (store.getters.user.token) {
        api
          .get(`/profile/${route.params.order}`, {
            headers: { token: store.getters.user.token },
          })
          .then((res) => {
            order.value = res.data.data;
            store.dispatch("loading", false);
          })
          .catch((err) => {
            console.log(err.response);
            store.dispatch("loading", false);
          });
      }
    });

    return { order };
  },
};
</script>

<style></style>
