<template>
  <div class="container">
    <div class="card m-0">
      <div class="card-header bg-gradient-dark">
        <h4 class="text-white">Edit Occasion</h4>
      </div>
      <div class="card-body">
        <form>
          <div class="form-group">
            <label for="title">Title:</label
            ><input
              type="text"
              id="title"
              placeholder="title"
              class="form-control"
              v-model="form.title"
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

    const form = ref({
      title: "",
    });
    const errors = ref([]);

    store.dispatch("loading", true);
    watchEffect(() => {
      if (store.getters.user.token) {
        api
          .get(`/admin/occasions/${route.params.id}`, {
            headers: { token: store.getters.user.token },
          })
          .then((res) => {
            form.value = res.data.data;
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

      api
        .put(
          `/admin/occasions/${route.params.id}`,
          { ...form.value },
          {
            headers: { token: store.getters.user.token },
          }
        )
        .then(() => {
          store.dispatch("loading", false);

          Toast.fire({
            icon: "success",
            title: "Occasion Updated",
          });
          router.push({ name: "Occasions" });
        })
        .catch((err) => {
          errors.value = err.response.data.data;
          store.dispatch("loading", false);
        });
    }

    return { submit, form, errors };
  },
};
</script>

<style></style>
