<template>
  <div class="text-center">
    <h3>steg 3 av 3</h3>
    <h1>VÄLJ DITT KORT</h1>
    <p>
      Välj det perfekta kortet för tillfället från vårt urval av exklusiva
      mönster. Vårt team skriver varje anteckning för att hålla dina kort
      personliga. (Dessutom har vi bra handstil.)
    </p>
  </div>
  <div class="row my-5 bproduct bproduct-dark" v-if="store.getters.card.title">
    <div class="col-md-12 row p-4">
      <div class="col-md-4">
        <img
          :src="`http://localhost:5000/${store.getters.card.images[0].path}`"
          alt="..."
        />
      </div>
      <div class="col-md-8">
        <form>
          <div class="form-group" v-if="!checkMsg">
            <label for="title">Meddelande:</label
            ><textarea
              type="text"
              placeholder="Meddelande"
              class="form-control TextArea"
              v-model="message"
            />
            <p class="" id="msgL">{{ msgL }} Tecken kvar</p>
          </div>
          <div class="form-check">
            <label class="form-check-label">
              <input class="form-check" type="checkbox" v-model="checkMsg" />
              Klicka här om ni vill att vi skickar ett tomt kort så skriver ni
              det ni önskar skriva
            </label>
          </div>
          <div class="text-center mt-3">
            <button
              type="submit"
              class="btn btn-success btn-block"
              @click.prevent="submit"
              :disabled="
                checkMsg == false
                  ? message.length === 0
                    ? true
                    : message.length > 120
                    ? true
                    : false
                  : false
              "
            >
              Lägg till i kundvagn
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div>
    <div class="text-center mt-5" v-if="cards.length === 0">
      <h4>There is no card ...</h4>
    </div>

    <div class="row" v-else>
      <div class="col-6 col-md-4" v-for="(card, i) in cards" :key="i">
        <div class="card card-product">
          <div class="card-image">
            <router-link to="#">
              <img
                :src="`http://localhost:5000/${card.images[0].path}`"
                alt="..."
              />
            </router-link>
          </div>
          <div class="card-body">
            <div class="card-footer">
              <validations-errors :errors="errors" />
              <button
                @click.prevent="addCard(card)"
                class="btn btn-primary btn-block mt-3"
              >
                Välj
              </button>
            </div>
          </div>
        </div>
        <!-- end card -->
      </div>
    </div>
    <Pagination :page="page" :pages="pages" :changePage="changePage" />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import api from "@/api";
import { useStore } from "vuex";
import { watch, watchEffect } from "@vue/runtime-core";

//Import Components
import Pagination from "@/components/layouts/Pagination.vue";
import ValidationsErrors from "@/components/layouts/ValidationsErrors.vue";
import { Toast } from "@/assets/js/Swal";

export default {
  components: { Pagination, ValidationsErrors },
  setup() {
    const store = useStore();
    const router = useRouter();

    const cards = ref([]);
    const message = ref("");
    const msgL = ref(120);
    const checkMsg = ref(false);
    const pages = ref(1);
    const page = ref(1);
    const errors = ref([]);

    if (
      !store.getters.box.title || store.getters.gifts.length === 0
        ? store.getters.giftBoxes.length === 0
          ? true
          : false
        : false
    ) {
      router.push({ name: "StepOne" });
    }

    watchEffect(() => {
      store.dispatch("loading", true);
      api
        .get(`/cards?page=${page.value}`)
        .then((res) => {
          pages.value = res.data.data.pages;
          page.value = res.data.data.page;
          cards.value = res.data.data.docs;
          store.dispatch("loading", false);
        })
        .catch((err) => {
          console.log(err.response);
          store.dispatch("loading", false);
        });
    });

    function addCard(card) {
      store.dispatch("addCard", card);
    }

    function changePage(count) {
      store.dispatch("loading", true);
      page.value = count;
    }

    watch(message, () => {
      msgL.value = 120 - message.value.length;
      if (message.value.length > 120) {
        document.querySelector("#msgL").classList.add("text-danger");
      } else {
        document.querySelector("#msgL").classList.remove("text-danger");
      }
    });

    function submit() {
      store.dispatch("loading", true);
      if (!checkMsg.value) {
        store.dispatch("addMessage", message.value);
      } else {
        store.dispatch("addMessage", "");
      }
      api
        .post(
          `/products`,
          {
            box: store.getters.box._id,
            card: store.getters.card._id,
            gifts: store.getters.gifts,
            giftBoxes: store.getters.giftBoxes,
            message: store.getters.message,
            price: store.getters.price,
          },
          { headers: { token: store.getters.user.token } }
        )
        .then(() => {
          store.dispatch("loading", false);
          let cart = store.getters.cart + 1;
          store.dispatch("cart", cart);

          store.dispatch("reset");

          Toast.fire({
            icon: "success",
            title: "Kontrollera din kundvagn",
          });
          router.push({ name: "StepFour" });
        })
        .catch((err) => {
          errors.value = err.response.data.data;
          console.log(err.response);
          store.dispatch("loading", false);
        });
    }

    return {
      cards,
      pages,
      page,
      changePage,
      store,
      addCard,
      message,
      submit,
      checkMsg,
      msgL,
      errors,
    };
  },
};
</script>

<style>
.TextArea {
  max-height: none !important;
  min-height: 250px;
}
</style>
