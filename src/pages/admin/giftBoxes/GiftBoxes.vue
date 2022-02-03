<template>
  <div class="container">
    <div class="card m-0">
      <div class="card-header bg-gradient-dark">
        <h1>Gift Boxes</h1>
      </div>
      <div class="card-body">
        <table class="table">
          <thead>
            <tr>
              <th class="text-center">#</th>
              <th>Title</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Category</th>
              <th>Status</th>
              <th class="text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(giftBox, i) in giftBoxes" :key="giftBox._id">
              <td class="text-center">{{ i + 1 }}</td>
              <td>{{ giftBox.title }}</td>
              <td>{{ giftBox.brand }}</td>
              <td>{{ giftBox.price }}</td>
              <td>{{ giftBox.category.title }}</td>
              <td>
                <span
                  :class="
                    `badge ${
                      giftBox.status
                        ? 'badge badge-success'
                        : 'badge badge-danger'
                    }`
                  "
                  >{{ giftBox.status ? "Available" : "Unavailable" }}</span
                >
              </td>
              <td class="td-actions text-right">
                <router-link
                  :to="{ name: 'EditGiftBox', params: { id: giftBox._id } }"
                  class="btn btn-success btn-icon btn-sm btn-simple mr-2"
                >
                  <i class="fa-duotone fa-pen-to-square"></i>
                </router-link>
                <button
                  @click="destroy(giftBox._id)"
                  class="btn btn-danger btn-icon btn-sm btn-simple"
                >
                  <i class="fa-duotone fa-xmark"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <router-link
          :to="{ name: 'CreateGiftBox' }"
          class="btn btn-primary btn-simple btn-block"
          >New GiftBox</router-link
        >
      </div>
    </div>
    <Pagination :page="page" :pages="pages" :changePage="changePage" />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import api from "@/api";
import { useStore } from "vuex";
import { watchEffect } from "@vue/runtime-core";

//Import Components
import Swal, { Toast } from "@/assets/js/Swal";
import Pagination from "@/components/layouts/Pagination.vue";

export default {
  components: { Pagination },
  setup() {
    const store = useStore();

    const giftBoxes = ref([]);
    const pages = ref(1);
    const page = ref(1);

    store.dispatch("loading", true);
    watchEffect(() => {
      if (store.getters.user.token) {
        api
          .get(`/admin/gift-boxes?page=${page.value}`, {
            headers: { token: store.getters.user.token },
          })
          .then((res) => {
            pages.value = res.data.data.pages;
            page.value = res.data.data.page;
            giftBoxes.value = res.data.data.docs;
            store.dispatch("loading", false);
          })
          .catch((err) => {
            console.log(err.response);
            store.dispatch("loading", false);
          });
      }
    });

    function destroy(giftBoxId) {
      Swal.fire({
        title: "Are you sure?",
        showDenyButton: true,
        confirmButtonText: "Yes",
        denyButtonText: `No`,
      }).then((result) => {
        if (result.isConfirmed) {
          store.dispatch("loading", true);

          api
            .delete(`admin/gift-boxes/${giftBoxId}`, {
              headers: { token: store.getters.user.token },
            })
            .then(() => {
              store.dispatch("loading", false);

              Toast.fire({
                icon: "warning",
                title: "GiftBox Deleted",
              });

              giftBoxes.value = giftBoxes.value.filter(
                (giftBox) => giftBox._id !== giftBoxId
              );
            })
            .catch((err) => {
              console.log(err.response);
              store.dispatch("loading", false);
            });
        }
      });
    }

    function changePage(count) {
      store.dispatch("loading", true);
      page.value = count;
    }

    return { giftBoxes, destroy, pages, page, changePage };
  },
};
</script>

<style></style>
