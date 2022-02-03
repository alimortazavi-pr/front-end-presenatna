<template>
  <Nav />
  <section class="section Admin-Section">
    <div class="container bg-gray p-4">
      <div class="col-md-12">
        <div class="card card-plain">
          <div class="card-header">
            <h4 class=" font-bold text-dark">Kundvagn</h4>
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
                  <tr v-for="(product, i) in cart" :key="i">
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
                            `https://presentana.herokuapp.com/${product.box.image[0].path}`
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
                            : "Build Box"
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
                      <div style="font-size : 0.8rem;">
                        Kort:
                        <span class="text-primary">{{
                          product.card.title
                        }}</span>
                      </div>
                      <div style="font-size : 0.8rem;">
                        Meddelande:
                        <span class="text-primary">{{ product.message }}</span>
                      </div>
                      <div
                        style="font-size : 0.8rem;"
                        v-if="!product.giftBoxType"
                      >
                        <div>Artiklar :</div>
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
                      <!-- <div class="btn-group">
                        <button class="btn btn-info btn-sm">
                          <i class="tim-icons icon-simple-delete"></i>
                        </button>
                        <button class="btn btn-info btn-sm">
                          <i class="tim-icons icon-simple-add"></i>
                        </button>
                      </div> -->
                    </td>
                    <td class="td-number text-dark">
                      <small><i class="fa-light fa-crown"></i></small>
                      {{ product.price }}
                    </td>
                    <td class="td-actions">
                      <button
                        type="button"
                        class="btn btn-link btn-danger"
                        @click.prevent="deleteProduct(product._id)"
                      >
                        <i class="fa-regular fa-xmark"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <hr class="bproduct-light" />
              <h4 class="text-dark">
                Total
              </h4>
              <h4 class="text-dark">
                <small><i class="fa-light fa-crown"></i></small> {{ price }}
              </h4>
              <div>
                <button
                  class="btn btn-info btn-round"
                  :disabled="cart.length === 0"
                  @click.prevent="pushCheckOut"
                >
                  Genomföra köp
                  <i class="fa-solid fa-chevron-right"></i>
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
import { ref, watchEffect } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import api from "@/api";

//Import Components
import Nav from "@/components/layouts/Nav.vue";
import Footer from "@/components/layouts/Footer.vue";
import Swal, { Toast } from "@/assets/js/Swal";

export default {
  components: { Nav, Footer },
  setup() {
    const store = useStore();
    const router = useRouter();

    const cart = ref([]);
    const price = ref(0);

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
          .get(`/cart`, {
            headers: { token: store.getters.user.token },
          })
          .then((res) => {
            cart.value = res.data.data.products;
            price.value = res.data.data.price;
            store.dispatch("loading", false);
          })
          .catch((err) => {
            console.log(err.response);
            store.dispatch("loading", false);
          });
      }
    });

    function deleteProduct(productId) {
      Swal.fire({
        title: "Är du säker?",
        showDenyButton: true,
        confirmButtonText: "Ja",
        denyButtonText: `Nej`,
      }).then((result) => {
        if (result.isConfirmed) {
          store.dispatch("loading", true);

          api
            .delete(`/products/${productId}`, {
              headers: { token: store.getters.user.token },
            })
            .then(() => {
              store.dispatch("loading", false);
              let cartLength = parseInt(store.getters.cart) - 1;
              store.dispatch("cart", cartLength);

              Toast.fire({
                icon: "warning",
                title: "Produkten raderad",
              });

              cart.value = cart.value.filter((cr) => {
                if (cr._id === productId) {
                  price.value -= parseInt(cr.price);
                } else {
                  return cr;
                }
              });
            })
            .catch((err) => {
              console.log(err.response);
              store.dispatch("loading", false);
            });
        }
      });
    }

    function pushCheckOut() {
      router.push({ name: "CheckOut" });
    }

    return { cart, price, deleteProduct, pushCheckOut };
  },
};
</script>

<style></style>
