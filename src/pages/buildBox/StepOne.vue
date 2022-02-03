<template>
  <div class="text-center">
    <h3>steg 1 av 3</h3>
    <h1>VÄLJ DIN Låda</h1>
    <p>
      Välkommen till det enklaste sättet att skicka någon en anpassad present i
      tre enkla steg. Lägg i varukorgen och upprepa för flera lådor, eller
      uppdatera din mängd i vagnen
    </p>
  </div>
  <div class="row mt-5">
    <div class="col-md-6" v-for="(box, i) in boxes" :key="i">
      <img
        class="img-fluid"
        :src="`http://localhost:5000/${box.image[0].path}`"
        alt="..."
      />
      <button class="btn btn-info btn-block mt-3" @click.prevent="addBox(box)">
        {{ box.title }}
      </button>
    </div>
  </div>
</template>

<script>
import { ref, watchEffect } from "@vue/runtime-core";
import { useStore } from "vuex";
import api from "@/api";
import { useRouter } from "vue-router";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    const boxes = ref([]);

    watchEffect(() => {
      store.dispatch("loading", true);
      api
        .get(`/boxes`)
        .then((res) => {
          boxes.value = res.data.data.docs;
          store.dispatch("loading", false);
        })
        .catch((err) => {
          console.log(err.response);
          store.dispatch("loading", false);
        });
    });

    function addBox(box) {
      store.dispatch("addBox", box);
      store.dispatch("changePrice", box.price);
      router.push({ name: "StepTwo" });
    }

    return { boxes, addBox };
  },
};
</script>

<style></style>
