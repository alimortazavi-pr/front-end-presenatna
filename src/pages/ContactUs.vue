<template>
  <div class="contact-page">
    <Nav />
    <div class=" wrapper">
      <div class="page-header header-filter contactus-3 mb-0">
        <div class="page-header-image Bg-contact"></div>
        <div class="container">
          <div class="row ">
            <div class="col-md-12 text-center">
              <h1 class="title">Har du en fundering?</h1>
              <h3>Vi svarar jätte gärna på dina funderingar</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="main bg-white">
        <div class="container-fluid">
          <div class="row infos mb-5">
            <div class="col-12  mt-5">
              <div class="info info-hover">
                <div class="icon icon-primary">
                  <img
                    class="bg-blob"
                    src="@/assets/img/feature-blob/primary.png"
                  />
                  <i class="fa-duotone fa-map-location"></i>
                </div>
                <h4 class="info-title text-dark">Adress</h4>
                <p class="description text-dark">12124 First Street</p>
              </div>
            </div>
          </div>
          <div class="row mt-5 mb-4 pt-5 bg-white">
            <div class="col-md-8 ml-auto mr-auto text-center mt-5">
              <span class="badge badge-info ">Skicka ett meddelande</span>
            </div>
          </div>
          <div class="row bg-white">
            <div class="col-md-10 mx-auto ">
              <form class="p-3" id="contact-form">
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-6 text-dark">
                      <label>namn</label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text p-0 px-2 bg-dark"
                            ><i class="fa-thin fa-user "></i
                          ></span>
                        </div>
                        <input
                          type="text"
                          class="form-control text-dark"
                          placeholder="namn"
                          aria-label="namn"
                          v-model="form.name"
                        />
                      </div>
                    </div>
                    <div class="col-md-6 text-dark">
                      <label>E-postadress</label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text p-0 px-2 bg-dark "
                            ><i class="fa-thin fa-envelope"></i
                          ></span>
                        </div>
                        <input
                          type="text"
                          class="form-control text-dark"
                          placeholder="Mejla här..."
                          v-model="form.email"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group text-dark">
                    <label>Ditt meddelande</label>
                    <textarea
                      name="message"
                      class="form-control text-dark"
                      id="message"
                      placeholder="Ditt meddelande"
                      v-model="form.message"
                    ></textarea>
                  </div>
                  <ValidationsErrors :errors="errors" />
                  <div class="row">
                    <div class="col-md-6 ml-auto">
                      <button
                        type="button"
                        class="btn btn-primary btn-round pull-right"
                        @click.prevent="submit"
                      >
                        Skicka
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import api from "@/api";

//Import Components
import Nav from "@/components/layouts/Nav.vue";
import Footer from "@/components/layouts/Footer.vue";
import ValidationsErrors from "@/components/layouts/ValidationsErrors.vue";
import { Toast } from "@/assets/js/Swal";

export default {
  components: { Nav, Footer, ValidationsErrors },
  setup() {
    const router = useRouter();
    const store = useStore();

    const form = reactive({
      name: "",
      email: "",
      message: "",
    });
    const errors = ref([]);

    function submit() {
      store.dispatch("loading", true);
      api
        .post("/contact-us", form)
        .then(() => {
          Toast.fire({
            icon: "success",
            title: "Meddelande skickat",
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

<style>
.Bg-contact {
  background-image: url("../assets/img/andre-benz.jpg");
}
</style>
