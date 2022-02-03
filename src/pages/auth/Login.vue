<template>
  <Template>
    <div class="login-page">
      <div class="squares square1"></div>
      <div class="squares square2"></div>
      <div class="squares square3"></div>
      <div class="squares square4"></div>
      <div class="squares square5"></div>
      <div class="squares square6"></div>
      <div class="page-header">
        <div class="page-header-image"></div>
        <div class="container">
          <div class="col-lg-5 col-md-8 mx-auto">
            <div class="card card-login">
              <form class="form">
                <div class="card-header">
                  <img
                    class="card-img"
                    src="@/assets/img/square-purple-1.png"
                    alt="Card image"
                  />
                  <h4 class="card-title">Logg in</h4>
                </div>
                <div class="card-body">
                  <div class="input-group input-lg">
                    <div class="input-group-prepend">
                      <span class="input-group-text p-0 pl-3">
                        <i class="fa-duotone fa-envelope"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="E-post"
                      v-model="form.email"
                      name="email"
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
                      placeholder="Lösenord"
                      v-model="form.password"
                      name="password"
                    />
                  </div>
                  <validations-errors :errors="errors" />
                </div>
                <div class="card-footer text-center">
                  <button
                    class="btn btn-primary btn-round btn-lg btn-block"
                    @click.prevent="submit"
                  >
                    <span
                      class="spinner-grow spinner-grow-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Logga in
                  </button>
                  <hr class="w-100 bproduct-light" />
                  <router-link
                    :to="{ name: 'Home' }"
                    class="btn btn-secondary btn-round btn-lg btn-block"
                    >Hem</router-link
                  >
                </div>
                <div class="mx-3 mb-3 d-flex justify-content-between">
                  <h6>
                    <router-link
                      :to="{ name: 'Register' }"
                      class="link footer-link"
                      >Skapa ett konto</router-link
                    >
                  </h6>
                  <h6>
                    <router-link
                      :to="{ name: 'ForgetPassword' }"
                      class="link footer-link"
                      >Glöm lösenord</router-link
                    >
                  </h6>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </Template>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import api from "@/api";

//Import Components
import Template from "@/components/auth/Template.vue";
// import ValidationsErrors from "@/components/layouts/ValidationsErrors.vue";
import { Toast } from "@/assets/js/Swal";
import Footer from "@/components/layouts/Footer.vue";
import ValidationsErrors from "@/components/layouts/ValidationsErrors.vue";

export default {
  components: { Template, Footer, ValidationsErrors },
  setup() {
    const store = useStore();
    const router = useRouter();

    const form = reactive({
      email: "",
      password: "",
    });
    const errors = ref([]);

    function submit() {
      store.dispatch("loading", true);
      api
        .post("/auth/login", form)
        .then((response) => {
          localStorage.setItem("token", response.data.data.token);
          store.dispatch("login", {
            token: response.data.data.token,
            user: response.data.data.user,
          });
          errors.value = [];
          form.value = {
            email: "",
            password: "",
          };
          Toast.fire({
            icon: "success",
            title: "Logga in framgångsrikt",
          });
          store.dispatch("loading", false);
          router.push("/");
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
