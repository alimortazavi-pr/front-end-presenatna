<template>
  <div class="container">
    <div class="card m-0">
      <div class="card-header bg-gradient-dark">
        <h1>Categories</h1>
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
            <tr v-for="(category, i) in categories" :key="category._id">
              <td class="text-center">{{ i + 1 }}</td>
              <td>{{ category.title }}</td>
              <td class="td-actions text-right">
                <router-link
                  :to="{ name: 'EditCategory', params: { id: category._id } }"
                  class="btn btn-success btn-icon btn-sm btn-simple mr-2"
                >
                  <i class="fa-duotone fa-pen-to-square"></i>
                </router-link>
                <button
                  @click="destroy(category._id)"
                  class="btn btn-danger btn-icon btn-sm btn-simple"
                >
                  <i class="fa-duotone fa-xmark"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <router-link
          :to="{ name: 'CreateCategory' }"
          class="btn btn-primary btn-simple btn-block"
          >New Category</router-link
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

    const categories = ref([]);
    const pages = ref(1);
    const page = ref(1);

    store.dispatch("loading", true);
    watchEffect(() => {
      if (store.getters.user.token) {
        api
          .get(`/admin/categories?page=${page.value}`, {
            headers: { token: store.getters.user.token },
          })
          .then((res) => {
            pages.value = res.data.data.pages;
            page.value = res.data.data.page;
            categories.value = res.data.data.docs;
            store.dispatch("loading", false);
          })
          .catch((err) => {
            console.log(err.response);
            store.dispatch("loading", false);
          });
      }
    });

    function destroy(categoryId) {
      Swal.fire({
        title: "Are you sure?",
        showDenyButton: true,
        confirmButtonText: "Yes",
        denyButtonText: `No`,
      }).then((result) => {
        if (result.isConfirmed) {
          store.dispatch("loading", true);

          api
            .delete(`admin/categories/${categoryId}`, {
              headers: { token: store.getters.user.token },
            })
            .then(() => {
              store.dispatch("loading", false);
              Toast.fire({
                icon: "warning",
                title: "Category Deleted",
              });

              categories.value = categories.value.filter(
                (category) => category._id !== categoryId
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

    return { categories, destroy, pages, page, changePage };
  },
};
</script>

<style></style>
