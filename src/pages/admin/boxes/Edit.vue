<template>
  <div class="container">
    <div class="card m-0">
      <div class="card-header bg-gradient-dark">
        <h4 class="text-white">Edit Box</h4>
      </div>
      <div class="card-body">
        <form>
          <div class="form-group row">
            <div class="col-md-4">
              <label for="title">Title:</label
              ><input
                type="text"
                id="title"
                placeholder="title"
                class="form-control"
                v-model="form.title"
              />
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
          </div>
          <div class="form-group">
            <label for="image">Image:</label>
            <button class="btn btn-primary btn-round btn-file btn-block">
              <span class="fileinput-new">Change image</span>
              <input type="hidden" value="" name="..." /><input
                type="file"
                name="image"
                ref="image"
              />
            </button>
          </div>
          <div class="text-center">
            <img
              class="img rounded"
              :src="`http://localhost:5000/${form.image}`"
              alt=""
              height="500"
            />
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
import { Toast } from "@/assets/js/Swal";

export default {
  components: { ValidationsErrors },
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();

    const image = ref(null);
    const form = ref({
      title: "",
      price: 0,
      image: "",
      status: true,
    });
    const errors = ref([]);

    store.dispatch("loading", true);
    watchEffect(() => {
      if (store.getters.user.token) {
        api
          .get(`/admin/boxes/${route.params.id}`, {
            headers: { token: store.getters.user.token },
          })
          .then((res) => {
            form.value = res.data.data;
            form.value.image = res.data.data.image[0].path;
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
      data.append("price", form.value.price);
      data.append("status", form.value.status);
      data.append("image", image.value.files[0]);

      api
        .put(`/admin/boxes/${route.params.id}`, data, {
          headers: { token: store.getters.user.token },
        })
        .then(() => {
          store.dispatch("loading", false);

          Toast.fire({
            icon: "success",
            title: "Box Updated",
          });
          router.push({ name: "Boxes" });
        })
        .catch((err) => {
          errors.value = err.response.data.data;
          store.dispatch("loading", false);
        });
    }

    return { submit, form, errors, image };
  },
};
</script>

<style></style>
