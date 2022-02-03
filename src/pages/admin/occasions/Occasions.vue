<template>
  <div class="container">
    <div class="card m-0">
      <div class="card-header bg-gradient-dark">
        <h1>Occasions</h1>
      </div>
      <div class="card-body">
        <table class="table">
          <thead>
            <tr>
              <th class="text-center">#</th>
              <th>Title</th>
              <th class="text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(occasion, i) in occasions" :key="occasion._id">
              <td class="text-center">{{ i + 1 }}</td>
              <td>{{ occasion.title }}</td>
              <td class="td-actions text-right">
                <router-link
                  :to="{ name: 'EditOccasion', params: { id: occasion._id } }"
                  class="btn btn-success btn-icon btn-sm btn-simple mr-2"
                >
                  <i class="fa-duotone fa-pen-to-square"></i>
                </router-link>
                <button
                  @click="destroy(occasion._id)"
                  class="btn btn-danger btn-icon btn-sm btn-simple"
                >
                  <i class="fa-duotone fa-xmark"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <router-link
          :to="{ name: 'CreateOccasion' }"
          class="btn btn-primary btn-simple btn-block"
          >New Occasion</router-link
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

    const occasions = ref([]);
    const pages = ref(1);
    const page = ref(1);

    store.dispatch("loading", true);
    watchEffect(() => {
      if (store.getters.user.token) {
        api
          .get(`/admin/occasions?page=${page.value}`, {
            headers: { token: store.getters.user.token },
          })
          .then((res) => {
            pages.value = res.data.data.pages;
            page.value = res.data.data.page;
            occasions.value = res.data.data.docs;
            store.dispatch("loading", false);
          })
          .catch((err) => {
            console.log(err.response);
            store.dispatch("loading", false);
          });
      }
    });

    function destroy(occasionId) {
      Swal.fire({
        title: "Are you sure?",
        showDenyButton: true,
        confirmButtonText: "Yes",
        denyButtonText: `No`,
      }).then((result) => {
        if (result.isConfirmed) {
          store.dispatch("loading", true);

          api
            .delete(`admin/occasions/${occasionId}`, {
              headers: { token: store.getters.user.token },
            })
            .then(() => {
              store.dispatch("loading", false);

              Toast.fire({
                icon: "warning",
                title: "Occasion Deleted",
              });

              occasions.value = occasions.value.filter(
                (occasion) => occasion._id !== occasionId
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

    return { occasions, destroy, pages, page, changePage };
  },
};
</script>

<style></style>
