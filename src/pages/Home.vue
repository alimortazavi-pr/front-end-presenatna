<template>
  <div class="ecommerce-page">
    <Nav />
    <!-- End Navbar -->
    <div class="wrapper">
      <div class="header header-1">
        <div class="page-header">
          <div class="page-header-image bg-gift" data-parallax="true"></div>
          <div class="container ">
            <div
              class="row justify-content-center align-items-center w-100 h-100"
            >
              <div class="col-lg-8 col-md-8 text-center ">
                <h1 class="title">GIFTING MADE EASY!</h1>
                <p>
                  På Presentana är vårt kärleksspråk presentgivning - och vi
                  levererar det ett paket i taget. Unika och anpassade
                  presentförpackningar för alla tillfällen
                </p>
                <br />
                <!-- <div class="buttons">
                  <router-link
                    :to="{ name: 'StepOne' }"
                    class="btn btn-round btn-lg mr-3 pulse"
                  >
                    <i class="fa-thin fa-gifts" style="font-size:1.2rem;"></i>
                  </router-link>
                  <p>Build Your Box Now!</p>
                </div> -->
                <router-link
                  :to="{ name: 'StepOne' }"
                  class="btn btn-primary btn-lg BTN"
                >
                  <!-- <i class="fa-thin fa-gifts mr-2" style="font-size:1.2rem;"></i> -->
                  Bygg din present nu
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="main">
        <section class="section section-lg bg-white pb-0">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-12">
                <h1 class="text-center text-dark FW-600">Hur fungerar det</h1>
                <div class="row row-grid justify-content-center">
                  <div class="col-lg-4">
                    <div class="info">
                      <!-- <div class="icon icon-info">
                        <i class="fa-duotone fa-gift"></i>
                      </div> -->
                      <h4 class="info-title text-dark FW-600 FS-15">
                        Behöver du present?
                      </h4>
                      <hr class="line-info" />
                      <p class="text-center text-dark">
                        Vilken anledning som helst, vilken säsong som helst. Vi
                        är här för att hålla saker eftertänksamma.
                      </p>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="info">
                      <!-- <div class="icon icon-warning">
                        <i class="fa-duotone fa-cart-shopping"></i>
                      </div> -->
                      <h4 class="info-title text-dark FW-600 FS-15">
                        Behöver du present
                      </h4>
                      <hr class="line-warning" />
                      <p class="text-center text-dark">
                        Vi samlar de bästa produkterna så att du kan skapa de
                        mest personliga gåvorna.
                      </p>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="info">
                      <!-- <div class="icon icon-success">
                        <i class="fa-duotone fa-truck"></i>
                      </div> -->
                      <h4 class="info-title text-dark FW-600 FS-15">
                        Vi tar hand om resten
                      </h4>
                      <hr class="line-success" />
                      <p class="text-center text-dark">
                        Vi tar ditt mästerverk, packar det till perfektion och
                        skickar det direkt till deras tröskel (eller kontor). De
                        älskar det - och du!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="contactus-3 Bg-contactus-3">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-3">
                  <div class="info info-hover">
                    <div class="icon icon-primary">
                      <!-- <img
                        class="bg-blob"
                        src="@/assets/img/feature-blob/primary.png"
                      /> -->
                      <img src="@/assets/img/icons/1.png" />
                    </div>
                    <h4 class="info-title">Välj en presentlåda</h4>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="info info-hover">
                    <div class="icon icon-info">
                      <!-- <img
                        class="bg-blob"
                        src="@/assets/img/feature-blob/info.png"
                      /> -->
                      <img src="@/assets/img/icons/2.png" />
                    </div>
                    <h4 class="info-title">Välj dina presenter</h4>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="info info-hover">
                    <div class="icon icon-warning">
                      <!-- <img
                        class="bg-blob"
                        src="@/assets/img/feature-blob/warning.png"
                      /> -->
                      <img src="@/assets/img/icons/3.png" />
                    </div>
                    <h4 class="info-title">Välj ett hälsningskort</h4>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="info info-hover">
                    <div class="icon icon-success">
                      <!-- <img
                        class="bg-blob"
                        src="@/assets/img/feature-blob/success.png"
                      /> -->
                      <img src="@/assets/img/icons/4.png" />
                    </div>
                    <h4 class="info-title">Enjoy gifting</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="section section-lg bg-white">
          <div class="container">
            <div class="row">
              <div class="col-md-10 mx-auto text-center">
                <h3 class="desc my-5 text-dark">Nyinkomna presenter</h3>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="row">
                  <div
                    class="col-md-4"
                    v-for="(giftBox, i) in newArrivals"
                    :key="i"
                  >
                    <div class="card card-product">
                      <div class="card-image">
                        <router-link
                          :to="{
                            name: 'SingleGiftBox',
                            params: { giftBox: giftBox._id },
                          }"
                        >
                          <img
                            :src="
                              `http://localhost:5000/${giftBox.images[0].path}`
                            "
                            alt="..."
                          />
                        </router-link>
                      </div>
                      <div class="card-body">
                        <router-link to="#">
                          <h4 class="card-title">{{ giftBox.title }}</h4>
                        </router-link>
                        <div class="card-footer">
                          <div class="price-container">
                            <span class="price">
                              <i class="fa-light fa-crown"></i>
                              {{ giftBox.price }}</span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- end card -->
                  </div>
                  <div class="col-md-12 ml-auto mr-auto mt-5 text-center">
                    <router-link
                      :to="{ name: 'GiftBoxesHome' }"
                      class="btn btn-primary btn-round btn-simple"
                    >
                      More...
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- <section class="subscribe-line">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-md-10 ml-auto mr-auto">
                <div class="text-center">
                  <h1 class="title">Få 10% rabatt på din första beställning vid prenumereringen på nyhetsbrev</h1>
                  <p class="description">
                    When you sign up for our mailing list.
                  </p>
                </div>
                <div class="card card-raised card-form-horizontal">
                  <div class="card-body">
                    <form method="" action="#">
                      <div class="row">
                        <div class="col-sm-8">
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text p-0 pl-3"
                                ><i class="fa-duotone fa-envelope"></i
                              ></span>
                            </div>
                            <input
                              type="email"
                              class="form-control"
                              placeholder="Your Email..."
                            />
                          </div>
                        </div>
                        <div class="col-sm-4">
                          <button type="button" class="btn btn-primary">
                            Subscribe
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> -->
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import api from "@/api";
import { useStore } from "vuex";

//Import Components
import Nav from "@/components/layouts/Nav.vue";
import Footer from "@/components/layouts/Footer.vue";

export default {
  components: { Nav, Footer },
  setup() {
    const store = useStore();

    const newArrivals = ref([]);

    store.dispatch("loading", true);
    api
      .get("/gift-boxes/new-arrivals")
      .then((res) => {
        newArrivals.value = res.data.data;
        store.dispatch("loading", false);
      })
      .catch((err) => {
        console.log(err.response);
        store.dispatch("loading", false);
      });

    return { newArrivals };
  },
};
</script>

<style>
.Bg-contactus-3 {
  background-color: rgb(15, 20, 91);
  font-weight: 800 !important;
}

.BTN {
  font-size: 1.5rem !important;
  font-weight: 700 !important;
}

.FW-600 {
  font-weight: 600 !important;
}

.FS-15 {
  font-size: 1.5rem;
}
</style>
