<template>
  <div class="container">
    <div class="card m-0">
      <div class="card-header bg-gradient-dark">
        <h4 class="text-white">New Gift</h4>
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
                <option value="" disabled>Please Select Status ...</option>
                <option value="true">Available</option>
                <option value="false">Unavailable</option>
              </select>
            </div>
            <div class="col-md-4">
              <label for="occasion">Ocassion:</label>
              <select
                class="form-control bg-dark"
                id="occasion"
                placeholder="occasion"
                v-model="form.occasion"
              >
                <option value="" disabled>Please Select Ocassion ...</option>
                <option
                  v-for="(occasion, i) in occasions"
                  :key="i"
                  :value="occasion._id"
                  >{{ occasion.title }}</option
                >
              </select>
            </div>
          </div>
          <div class="form-group">
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
          <ValidationsErrors :errors="errors" />
          <div class="text-center mt-3">
            <button
              type="submit"
              class="btn bg-gradient-success"
              @click.prevent="submit"
            >
              Submit
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
import { useRouter } from "vue-router";
import { watchEffect } from "@vue/runtime-core";

//Import Components
import ValidationsErrors from "@/components/layouts/ValidationsErrors.vue";
import { Toast } from "@/assets/js/Swal";

export default {
  components: { ValidationsErrors },
  setup() {
    const store = useStore();
    const router = useRouter();

    const images = ref(null);
    const form = ref({
      title: "",
      brand: "",
      category: "",
      occasion: "",
      status: "",
      price: "",
      description: "",
    });
    const categories = ref([]);
    const occasions = ref([]);
    const errors = ref([]);

    store.dispatch("loading", true);
    watchEffect(() => {
      if (store.getters.user.token) {
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
        api
          .get("/admin/occasions", {
            headers: { token: store.getters.user.token },
          })
          .then((res) => {
            occasions.value = res.data.data.docs;
            store.dispatch("loading", false);
          })
          .catch((err) => {
            console.log(err.response);
            store.dispatch("loading", false);
          });
      }
    });

    function submit() {
      store.dispatch("loading", true);
      const data = new FormData();
      data.append("title", form.value.title);
      data.append("brand", form.value.brand);
      data.append("price", form.value.price);
      data.append("category", form.value.category);
      data.append("occasion", form.value.occasion);
      data.append("status", form.value.status);
      data.append("description", form.value.description);
      if (!images.value.files) return;
      for (var i = 0; i < images.value.files.length; i++) {
        let image = images.value.files[i];
        data.append(`images[${i}]`, image);
      }

      api
        .post("/admin/gifts", data, {
          headers: { token: store.getters.user.token },
        })
        .then(() => {
          store.dispatch("loading", false);

          Toast.fire({
            icon: "success",
            title: "Gift Created",
          });
          router.push({ name: "Gifts" });
        })
        .catch((err) => {
          errors.value = err.response.data.data;
          store.dispatch("loading", false);
        });
    }

    return { submit, form, errors, images, categories, occasions };
  },
};
</script>

<style></style>
