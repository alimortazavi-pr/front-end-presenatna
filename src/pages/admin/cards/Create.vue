<template>
  <div class="container">
    <div class="card m-0">
      <div class="card-header bg-gradient-dark">
        <h4 class="text-white">New Card</h4>
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
          <div class="form-group">
            <label for="image">Image:</label>
            <button class="btn btn-primary btn-round btn-file btn-block">
              <span class="fileinput-new">Select image</span>
              <input type="hidden" value="" name="..." /><input
                type="file"
                name="image"
                ref="image"
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

//Import Components
import ValidationsErrors from "@/components/layouts/ValidationsErrors.vue";
import { Toast } from "@/assets/js/Swal";

export default {
  components: { ValidationsErrors },
  setup() {
    const store = useStore();
    const router = useRouter();

    const image = ref(null);
    const form = ref({
      title: "",
    });
    const errors = ref([]);

    function submit() {
      store.dispatch("loading", true);
      const data = new FormData();
      data.append("title", form.value.title);
      data.append("image", image.value.files[0]);

      api
        .post("/admin/cards", data, {
          headers: { token: store.getters.user.token },
        })
        .then(() => {
          store.dispatch("loading", false);

          Toast.fire({
            icon: "success",
            title: "Card Created",
          });
          router.push({ name: "Cards" });
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
