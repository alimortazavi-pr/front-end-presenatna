<template>
  <Nav />
  <section class="section Admin-Section bg-white m-10">
    <div class=" pb-0">
      <div class="container bg-white Top-Radius shadow">
        <div class="row">
          <div class="col-md-3">
            <div class="info info-hover">
              <div class="icon icon-primary">
                <!-- <img
                        class="bg-blob"
                        src="@/assets/img/feature-blob/primary.png"
                      /> -->
                <img
                  src="https://cdn.shopify.com/s/files/1/0427/4615/1068/files/Artboard_1.png?v=1602415032"
                  width="100"
                />
              </div>
              <h4 class="info-title text-dark font-weight-bolder">
                Välj en presentlåda
              </h4>
            </div>
          </div>
          <div class="col-md-3">
            <div class="info info-hover">
              <div class="icon icon-info">
                <!-- <img
                        class="bg-blob"
                        src="@/assets/img/feature-blob/info.png"
                      /> -->
                <img
                  src="https://cdn.shopify.com/s/files/1/0427/4615/1068/files/Artboard_2.png?v=1602415032"
                  width="100"
                />
              </div>
              <h4 class="info-title  text-dark font-weight-bolder">
                Välj dina presenter
              </h4>
            </div>
          </div>
          <div class="col-md-3">
            <div class="info info-hover">
              <div class="icon icon-warning">
                <!-- <img
                        class="bg-blob"
                        src="@/assets/img/feature-blob/warning.png"
                      /> -->
                <img
                  src="https://cdn.shopify.com/s/files/1/0427/4615/1068/files/Artboard_3.png?v=1602415032"
                  width="100"
                />
              </div>
              <h4 class="info-title text-dark font-weight-bolder">
                Välj ett hälsningskort
              </h4>
            </div>
          </div>
          <div class="col-md-3">
            <div class="info info-hover">
              <div class="icon icon-success">
                <!-- <img
                        class="bg-blob"
                        src="@/assets/img/feature-blob/success.png"
                      /> -->
                <img
                  src="https://cdn.shopify.com/s/files/1/0427/4615/1068/files/Artboard_4.png?v=1602415036"
                  width="100"
                />
              </div>
              <h4 class="info-title  text-dark font-weight-bolder">
                Njut!
              </h4>
            </div>
          </div>
        </div>
        <!-- <div class="row">
          <ul
            class="nav nav-tabs nav-tabs-danger justify-content-around text-dark w-100 my-3"
            role="tablist"
          >
            <li class="nav-item">
              <a
                :class="`nav-link text-dark ${route.name === 'StepOne' ? 'active' : ''}`"
              >
                <i class="fa-duotone fa-box-open-full"></i> Step 1 - Packaging
              </a>
            </li>
            <li class="nav-item">
              <a
                :class="`nav-link text-dark text-dark ${route.name === 'StepTwo' ? 'active' : ''}`"
              >
                <i class="fa-duotone fa-gifts"></i> Step 2 - Gifts
              </a>
            </li>
            <li class="nav-item">
              <a
                :class="
                  `nav-link text-dark ${route.name === 'StepThree' ? 'active' : ''}`
                "
              >
                <i class="fa-duotone fa-note-sticky"></i> Step 3 - Card
              </a>
            </li>
            <li class="nav-item">
              <a
                :class="`nav-link text-dark ${route.name === 'StepFour' ? 'active' : ''}`"
              >
                <i class="fa-duotone fa-clipboard-check"></i> Step 4 - Done!
              </a>
            </li>
          </ul>
        </div> -->
      </div>
    </div>
    <div class="card container Card mt-0">
      <div class="card-header">
        <ul
          class="nav nav-tabs nav-tabs-primary justify-content-between"
          role="tablist"
        >
          <li class="nav-item">
            <a :class="`nav-link ${route.name === 'StepOne' ? 'active' : ''}`">
              <i class="fa-duotone fa-box-open-full"></i> Steg 1 - Förpackning
            </a>
          </li>
          <li class="nav-item">
            <a :class="`nav-link ${route.name === 'StepTwo' ? 'active' : ''}`">
              <i class="fa-duotone fa-gifts"></i> Steg 2 - Presenter
            </a>
          </li>
          <li class="nav-item">
            <a
              :class="`nav-link ${route.name === 'StepThree' ? 'active' : ''}`"
            >
              <i class="fa-duotone fa-note-sticky"></i> Steg 3 - Hälsningskort
            </a>
          </li>
          <li class="nav-item">
            <a :class="`nav-link ${route.name === 'StepFour' ? 'active' : ''}`">
              <i class="fa-duotone fa-clipboard-check"></i> Steg 4 - Klart!
            </a>
          </li>
        </ul>
        <div
          class="progress-container progress-success mt-3"
          v-if="route.name === 'StepOne'"
        >
          <span class="progress-badge">Förpackning</span>
          <div class="progress">
            <div
              class="progress-bar progress-bar-warning"
              role="progressbar"
              aria-valuenow="0"
              aria-valuemin="0"
              aria-valuemax="100"
              style="width: 0%;"
            >
              <span class="progress-value">0%</span>
            </div>
          </div>
        </div>
        <div
          class="progress-container progress-success mt-3"
          v-else-if="route.name === 'StepTwo'"
        >
          <span class="progress-badge">Gåvor</span>
          <div class="progress">
            <div
              class="progress-bar progress-bar-warning"
              role="progressbar"
              aria-valuenow="33"
              aria-valuemin="33"
              aria-valuemax="100"
              style="width: 33%;"
            >
              <span class="progress-value">33%</span>
            </div>
          </div>
        </div>
        <div
          class="progress-container progress-success mt-3"
          v-else-if="route.name === 'StepThree'"
        >
          <span class="progress-badge">kort</span>
          <div class="progress">
            <div
              class="progress-bar progress-bar-warning"
              role="progressbar"
              aria-valuenow="66"
              aria-valuemin="66"
              aria-valuemax="100"
              style="width: 66%;"
            >
              <span class="progress-value">66%</span>
            </div>
          </div>
        </div>
        <div
          class="progress-container progress-success mt-3"
          v-else-if="route.name === 'StepFour'"
        >
          <span class="progress-badge">Gjort!</span>
          <div class="progress">
            <div
              class="progress-bar progress-bar-warning"
              role="progressbar"
              aria-valuenow="100"
              aria-valuemin="100"
              aria-valuemax="100"
              style="width: 100%;"
            >
              <span class="progress-value">100%</span>
            </div>
          </div>
        </div>
      </div>
      <div class="card-body">
        <!-- Tab panes -->
        <div class="tab-content tab-space">
          <div class="tab-pane active" id="packaging">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { watchEffect } from "@vue/runtime-core";

//Import Components
import Nav from "@/components/layouts/Nav.vue";
import Footer from "@/components/layouts/Footer.vue";

export default {
  components: { Nav, Footer },
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();

    watchEffect(() => {
      if (store.getters.login !== null) {
        if (!store.getters.login) {
          router.push({ name: "Login" });
        }
      }
    });

    return { route };
  },
};
</script>

<style>
.BG-GRAY {
  background-color: rgb(82, 95, 127);
  border-radius: 1rem;
}

.Card {
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}

.Top-Radius {
  border-top-right-radius: 7px;
  border-top-left-radius: 7px;
}

.m-10{
  margin-top: 6rem;
}
</style>
