<template>
  <div class="container">
    <div class="card m-0">
      <div class="card-header bg-gradient-dark">
        <h4 class="text-white">New Occasion</h4>
      </div>
      <div class="card-body">
        <form>
          <div class="form-group">
            <label for="title">Title:</label
            ><input
              type="text"
              placeholder="title"
              id="title"
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
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import api from "@/api";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

//Import Components
import ValidationsErrors from "@/components/layouts/ValidationsErrors.vue";
import { Toast } from "@/assets/js/Swal";

export default {
  components: { ValidationsErrors },
  setup() {
    const store = useStore();
    const router = useRouter();

    const form = reactive({
      title: "",
    });
    const errors = ref([]);

    function submit() {
      store.dispatch("loading", true);

      api
        .post(
          "/admin/occasions",
          { ...form },
          {
            headers: { token: store.getters.user.token },
          }
        )
        .then(() => {
          store.dispatch("loading", false);

          Toast.fire({
            icon: "success",
            title: "Occasion Created",
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
