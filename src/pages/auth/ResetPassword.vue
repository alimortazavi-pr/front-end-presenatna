<template>
  <Template>
    <div class="register-page">
      <!-- End Navbar -->
      <div class="wrapper">
        <div class="page-header">
          <div class="page-header-image"></div>
          <div class="container">
            <div class="row">
              <div class="col-lg-5 col-md-12 mx-auto">
                <div id="square7" class="square square-7"></div>
                <div id="square8" class="square square-8"></div>
                <div class="card card-register">
                  <div class="card-header">
                    <img
                      class="card-img"
                      src="@/assets/img/square1.png"
                      alt="Card image"
                    />
                    <h4 class="card-title">Återställ lösenord</h4>
                  </div>
                  <div class="card-body">
                    <form class="form">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <div class="input-group-text p-0 pl-3">
                            <i class="fa-duotone fa-envelope"></i>
                          </div>
                        </div>
                        <input
                          type="text"
                          placeholder="E-post"
                          class="form-control"
                          name="email"
                          v-model="form.email"
                        />
                      </div>
                      <div class="input-group input-lg">
                        <div class="input-group-prepend">
                          <span class="input-group-text p-0 pl-3">
                            <i class="fa-duotone fa-lock-keyhole"></i>
                          </span>
                        </div>
                        <input
                          type="password"
                          class="form-control"
                          placeholder="nytt lösenord"
                          v-model="form.password"
                          name="password"
                        />
                      </div>
                      <validations-errors :errors="errors" />
                    </form>
                  </div>
                  <div class="card-footer mt-0">
                    <button
                      class="btn btn-info btn-round btn-lg btn-block"
                      @click.prevent="submit"
                    >
                      återställa
                    </button>
                    <hr class="w-100 bproduct-light" />
                    <router-link
                      :to="{ name: 'Home' }"
                      class="btn btn-secondary btn-round btn-lg btn-block"
                      >Hem</router-link
                    >
                    <div class="mt-3 text-center d-block">
                      <h6>
                        <router-link :to="{ name: 'Login' }"
                          >tillbaka till login</router-link
                        >
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="register-bg"></div>
          <div id="square1" class="square square-1"></div>
          <div id="square2" class="square square-2"></div>
          <div id="square3" class="square square-3"></div>
          <div id="square4" class="square square-4"></div>
          <div id="square5" class="square square-5"></div>
          <div id="square6" class="square square-6"></div>
        </div>
        <Footer />
      </div>
    </div>
  </Template>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import { useRoute, useRouter } from "vue-router";
import api from "@/api";
import { useStore } from "vuex";

//Import Components
import Template from "@/components/auth/Template.vue";
import ValidationsErrors from "@/components/layouts/ValidationsErrors.vue";
import { Toast } from "@/assets/js/Swal";
import Footer from "@/components/layouts/Footer.vue";

export default {
  components: { Template, Footer, ValidationsErrors },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();

    const form = reactive({
      email: "",
      token: route.params?.token,
      password: "",
    });
    const errors = ref([]);

    function submit() {
      store.dispatch("loading", true);

      api
        .post("/auth/password/reset", form)
        .then(() => {
          Toast.fire({
            icon: "success",
            title: "Gjort",
          });
          store.dispatch("loading", false);

          router.push("/login");
        })
        .catch((err) => {
          errors.value = err.response.data.data;
          store.dispatch("loading", false);
        });
    }

    return { form, submit, errors };
  },
};
</script>

<style></style>
