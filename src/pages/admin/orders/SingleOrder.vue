<template>
    <div class="container bg-gray p-4" v-if="order.status">
      <div class="row">
      <div class="col-md-4 my-5">
        <h4 class="text-dark">User :</h4>
        <div class="text-dark">
          <table class="table bproduct bproduct-dark">
            <thead>
              <tr>
                <th class="text-center text-dark">Name</th>
                <th class="text-center text-dark">Email</th>
                <th class="text-center text-dark">Mobile</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-center text-dark">{{ order.user.name }}</td>
                <td class="text-center text-dark">{{ order.user.email }}</td>
                <td class="text-center text-dark">{{ order.user.mobile }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-md-4 my-5">
        <h4 class="text-dark">Status :</h4>
        <div class="form-group">
          <select
            class="form-control bg-dark"
            placeholder="status"
            v-model="status"
          >
            <option value="" disabled>Please Select Status ...</option>
            <option value="Registrerad">Registrerad</option>
            <option value="Bearbetning">Bearbetning</option>
            <option value="Postad">Postad</option>
            <option value="Mottagen">Mottagen</option>
          </select>
        </div>
        <button class="btn btn-warning btn-sm" @click.prevent="changeStatus">
          Save
        </button>
      </div>
        <div class="col-md-4 my-5 d-flex align-items-center">
          <h4 class="mr-3 text-dark">Shipping Method :</h4>
          <h4 class="text-primary text-dark">{{ order.method == 'ship' ? 'Shipping' : 'Pick Up' }}</h4>
        </div>
        <div class="col-12 my-5" v-if="order.method == 'ship'">
          <h4 class="text-dark">Information :</h4>
          <div class="">
            <table class="table bproduct bproduct-dark">
              <thead>
                <tr>
                  <th class="text-center text-dark">Country</th>
                  <th class="text-center text-dark">City</th>
                  <th class="text-center text-dark">Postal Code</th>
                  <th class="text-center text-dark">Address</th>
                  <th class="text-center text-dark">Mobile</th>
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
              <h4 class="font-bold text-dark">Products :</h4>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table tablesorter table-shopping" id="">
                  <thead class="">
                    <tr>
                      <th class="text-center text-dark"></th>
                      <th class="text-dark">
                        Product
                      </th>
                      <th class="text-right text-dark">
                        Qty
                      </th>
                      <th class="text-right text-dark">
                        Price
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
                              `http://localhost:5000/${product.giftBox.images[0].path}`
                            "
                            alt="..."
                          />
                          <img
                            v-else
                            :src="
                              `http://localhost:5000/${product.box.image.path}`
                            "
                            alt="..."
                          />
                        </div>
                      </td>
                      <td class="td-name">
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
                          class="text-dark"
                        >
                          Box:
                          <span class="text-primary">{{
                            product.box.title
                          }}</span>
                        </div>
                        <div style="font-size : 0.8rem;" class="text-dark">
                          Card:
                          <span class="text-primary">{{
                            product.card.title
                          }}</span>
                        </div>
                        <div style="font-size : 0.8rem;" class="text-dark">
                          Message:
                          <span class="text-primary">{{
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
</template>

<script>
import { ref } from "@vue/reactivity";
import api from "@/api";
import { useStore } from "vuex";
import { watchEffect } from "@vue/runtime-core";
import { useRoute } from "vue-router";

//Import Components
import { Toast } from "@/assets/js/Swal";

export default {
  setup() {
    const store = useStore();
    const route = useRoute();

    const order = ref([]);
    const status = ref("");

    store.dispatch("loading", true);
    watchEffect(() => {
      if (store.getters.user.token) {
        api
          .get(`/admin/orders/${route.params.order}`, {
            headers: { token: store.getters.user.token },
          })
          .then((res) => {
            order.value = res.data.data;
            status.value = res.data.data.status;
            store.dispatch("loading", false);
          })
          .catch((err) => {
            console.log(err.response);
            store.dispatch("loading", false);
          });
      }
    });

    function changeStatus() {
      store.dispatch("loading", true);
      api
        .put(
          `/admin/orders/status/${route.params.order}`,
          {
            status : status.value
          },
          {
            headers: { token: store.getters.user.token },
          }
        )
        .then(() => {
          store.dispatch("loading", false);

          Toast.fire({
            icon: "success",
            title: "Order Updated",
          });
        })
        .catch((err) => {
          console.log(err.response);
          store.dispatch("loading", false);
        });
    }

    return { order, status, changeStatus };
  },
};
</script>

<style></style>
