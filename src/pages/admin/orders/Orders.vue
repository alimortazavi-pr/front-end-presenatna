<template>
  <div class="container">
    <div class="card m-0">
      <div class="card-header bg-gradient-dark">
        <h1>Orders</h1>
      </div>
      <div class="card-body">
        <table class="table bproduct bproduct-dark">
          <thead>
            <tr>
              <th class="text-center">#</th>
              <th class="text-center">Order ID</th>
              <th class="text-center">Name</th>
              <th class="text-center">Email</th>
              <th class="text-center">Created At</th>
              <th class="text-center">Price</th>
              <th class="text-center">Status</th>
              <th class="text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(order, i) in orders" :key="i">
              <td class="text-center">{{ i + 1 }}</td>
              <td class="text-center">
                {{ order._id }}
              </td>
              <td class="text-center">{{ order.user.name }}</td>
              <td class="text-center">{{ order.user.email }}</td>
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
                    name: 'SingleOrderAdmin',
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
    <pagination :page="page" :pages="pages" :changePage="changePage" />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import api from "@/api";
import { useStore } from "vuex";
import { watchEffect } from "@vue/runtime-core";

//Import Components
import Pagination from "@/components/layouts/Pagination.vue";

export default {
  components: { Pagination },
  setup() {
    const store = useStore();

    const orders = ref([]);
    const pages = ref(1);
    const page = ref(1);

    store.dispatch("loading", true);
    watchEffect(() => {
      if (store.getters.user.token) {
        api
          .get(`/admin/orders?page=${page.value}`, {
            headers: { token: store.getters.user.token },
          })
          .then((res) => {
            pages.value = res.data.data.pages;
            page.value = res.data.data.page;
            orders.value = res.data.data.docs;
            store.dispatch("loading", false);
          })
          .catch((err) => {
            console.log(err);
            store.dispatch("loading", false);
          });
      }
    });

    function changePage(count) {
      store.dispatch("loading", true);
      page.value = count;
    }

    return { orders, pages, page, changePage };
  },
};
</script>

<style></style>
