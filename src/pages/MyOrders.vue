<template>
  <Nav />
  <section class="section Admin-Section bg-white">
    <div class="container">
      <div class="container">
        <div class="card m-0">
          <div class="card-header bg-gradient-dark">
            <h1>Order</h1>
          </div>
          <div class="card-body">
            <table class="table border border-dark">
              <thead>
                <tr>
                  <th class="text-center">#</th>
                  <th class="text-center">Beställnings -ID</th>
                  <th class="text-center">Skapad vid</th>
                  <th class="text-center">Pris</th>
                  <th class="text-center">Status</th>
                  <th class="text-right">Handlingar</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(order, i) in orders" :key="i">
                  <td class="text-center">{{ i + 1 }}</td>
                  <td class="text-center">
                    {{ order._id }}
                  </td>
                  <td class="text-center">
                    {{ new Date(order.createdAt).toDateString() }}
                  </td>
                  <td class="text-center">
                    <i class="fa-light fa-crown"></i> {{ order.price }}
                  </td>
                  <td class="text-center">{{ order.status }}</td>
                  <td class="td-actions text-right">
                    <router-link
                      :to="{
                        name: 'SingleOrder',
                        params: { order: order._id },
                      }"
                      class="btn btn-warning btn-icon btn-sm btn-simple"
                    >
                      <i class="fa-duotone fa-eye"></i>
                    </router-link>
                  </td>
                </tr>
              </tbody>
            </table>
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
import { useRouter } from "vue-router";

//Import Components
import Nav from "@/components/layouts/Nav.vue";
import Footer from "@/components/layouts/Footer.vue";

export default {
  components: { Nav, Footer },
  setup() {
    const store = useStore();
    const router = useRouter();

    const orders = ref([]);

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
          .get("/profile", {
            headers: { token: store.getters.user.token },
          })
          .then((res) => {
            orders.value = res.data.data.orders;
            store.dispatch("loading", false);
          })
          .catch((err) => {
            console.log(err);
            store.dispatch("loading", false);
          });
      }
    });

    return { orders };
  },
};
</script>

<style></style>
