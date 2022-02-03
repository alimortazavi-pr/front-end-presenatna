<template>
  <div class="container">
    <div class="card m-0">
      <div class="card-header bg-gradient-dark">
        <h4 class="text-white">Edit GiftBox</h4>
      </div>
      <div class="card-body">
        <form>
          <div class="form-group row">
            <div class="col-md-6">
              <label for="title">Title:</label
              ><input
                type="text"
                placeholder="title"
                id="title"
                class="form-control"
                v-model="form.title"
              />
            </div>
            <div class="col-md-6">
              <label for="brand">Brand:</label
              ><input
                type="text"
                placeholder="brand"
                id="brand"
                class="form-control"
                v-model="form.brand"
              />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-md-4">
              <label for="category">Category:</label>
              <select
                class="form-control bg-dark"
                id="category"
                placeholder="category"
                v-model="form.category"
              >
                <option value="" disabled>Please Select Category ...</option>
                <option
                  v-for="(category, i) in categories"
                  :key="i"
                  :value="category._id"
                  :selected="category._id === form.category"
                  >{{ category.title }}</option
                >
              </select>
            </div>
            <div class="col-md-4">
              <label for="status">Status:</label>
              <select
                class="form-control bg-dark"
                id="status"
                placeholder="status"
                v-model="form.status"
              >
                <option value="true">Available</option>
                <option value="false">Unavailable</option>
              </select>
            </div>
            <div class="col-md-4">
              <label for="price">Price:</label>
              <div class="input-group">
                <input
                  id="price"
                  type="number"
                  class="form-control"
                  placeholder="price"
                  v-model="form.price"
                />
                <div class="input-group-append">
                  <span class="input-group-text p-0 pr-3"
                    ><i class="fa-light fa-crown"></i
                  ></span>
                </div>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label for="brand">Description:</label
            ><textarea
              placeholder="description"
              id="description"
              class="form-control"
              v-model="form.description"
            />
          </div>
          <div class="form-group">
            <label for="images">Images:</label>
            <button class="btn btn-primary btn-round btn-file btn-block">
              <span class="fileinput-new">Select images</span>
              <input type="hidden" value="" name="..." /><input
                type="file"
                name="images"
                ref="images"
                multiple
              />
            </button>
          </div>
          <div class="row">
            <div class="col-md-4" v-for="(image, i) in form.images" :key="i">
              <img
                class="img-fluid rounded"
                :src="`https://presentana.herokuapp.com/${image.path}`"
                alt=""
                height="500"
              />
              <button
                class="btn btn-danger mt-2 btn-block btn-simple"
                @click.prevent="destroyImage(image._id)"
              >
                Delete
              </button>
            </div>
          </div>
          <ValidationsErrors :errors="errors" />
          <div class="text-center mt-3">
            <button
              type="submit"
              class="btn bg-gradient-success"
              @click.prevent="submit"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import api from "@/api";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import { watchEffect } from "@vue/runtime-core";

//Import Components
import ValidationsErrors from "@/components/layouts/ValidationsErrors.vue";
import Swal, { Toast } from "@/assets/js/Swal";

export default {
  components: { ValidationsErrors },
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();

    const images = ref(null);
    const form = ref({
      title: "",
      brand: "",
      category: "",
      status: "",
      price: "",
      description: "",
    });
    const categories = ref([]);
    const errors = ref([]);

    store.dispatch("loading", true);
    watchEffect(() => {
      if (store.getters.user.token) {
        api
          .get(`/admin/gift-boxes/${route.params.id}`, {
            headers: { token: store.getters.user.token },
          })
          .then((res) => {
            form.value = res.data.data;
            form.value.image = res.data.data.images[0].path;
            store.dispatch("loading", false);
          })
          .catch((err) => {
            console.log(err.response);
            store.dispatch("loading", false);
          });
        api
          .get("/admin/categories", {
            headers: { token: store.getters.user.token },
          })
          .then((res) => {
            categories.value = res.data.data.docs;
            store.dispatch("loading", false);
          })
          .catch((err) => {
            console.log(err.response);
            store.dispatch("loading", false);
          });
      }
    });

    function destroyImage(imageId) {
      Swal.fire({
        title: "Are you sure?",
        showDenyButton: true,
        confirmButtonText: "Yes",
        denyButtonText: `No`,
      }).then((result) => {
        if (result.isConfirmed) {
          store.dispatch("loading", true);
          api
            .delete(`/admin/images/${imageId}`, {
              headers: { token: store.getters.user.token },
            })
            .then(() => {
              store.dispatch("loading", false);

              form.value.images = form.value.images.filter(
                (image) => image._id !== imageId
              );

              Toast.fire({
                icon: "warning",
                title: "Image Deleted",
              });
            })
            .catch((err) => {
              if (err.response.status === 403) {
                Swal.fire({
                  icon: "error",
                  title: "Error",
                  text: "The gift box must have at least one image!",
                });
              } else {
                console.log(err.response);
              }
              store.dispatch("loading", false);
            });
        }
      });
    }

    function submit() {
      store.dispatch("loading", true);
      const data = new FormData();
      data.append("title", form.value.title);
      data.append("brand", form.value.brand);
      data.append("price", form.value.price);
      data.append("category", form.value.category);
      data.append("status", form.value.status);
      data.append("description", form.value.description);
      if (!images.value.files) return;
      for (var i = 0; i < images.value.files.length; i++) {
        let image = images.value.files[i];
        data.append(`images[${i}]`, image);
      }

      api
        .put(`/admin/gift-boxes/${route.params.id}`, data, {
          headers: { token: store.getters.user.token },
        })
        .then(() => {
          store.dispatch("loading", false);

          Toast.fire({
            icon: "success",
            title: "GiftBox Updated",
          });
          router.push({ name: "GiftBoxes" });
        })
        .catch((err) => {
          errors.value = err.response.data.data;
          store.dispatch("loading", false);
        });
    }

    return { submit, form, errors, images, categories, destroyImage };
  },
};
</script>

<style></style>
