<template>
  <div id="klarna_container" class="text-center"></div>
  <div>
    <!--Button to trigger authorize call-->
    <button class="btn btn-primary btn-block mt-4" @click.prevent="submit">
      Beställ
    </button>
  </div>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
import api from "@/api";
import { useStore } from "vuex";

//Import Components
import "@/assets/js/klarna.js";
import Swal from "sweetalert2";

export default {
  props: {
    orders: {
      required: true,
    },
    price: {
      required: true,
    },
    form: {
      required: true,
    },
  },
  setup(props) {
    const store = useStore();

    onMounted(() => {
      Klarna.Payments.init({
        client_token:
          "eyJhbGciOiJSUzI1NiIsImtpZCI6IjgyMzA1ZWJjLWI4MTEtMzYzNy1hYTRjLTY2ZWNhMTg3NGYzZCJ9.eyJzZXNzaW9uX2lkIjoiYzdhNDM4ZjgtYTFkZi0xNWQyLWFlZmEtYjkzNjlmODA4MWUzIiwiYmFzZV91cmwiOiJodHRwczovL2pzLnBsYXlncm91bmQua2xhcm5hLmNvbS9ldS9rcC9sZWdhY3kvcGF5bWVudHMiLCJkZXNpZ24iOiJrbGFybmEiLCJsYW5ndWFnZSI6InN2IiwicHVyY2hhc2VfY291bnRyeSI6IlNFIiwiZW52aXJvbm1lbnQiOiJwbGF5Z3JvdW5kIiwibWVyY2hhbnRfbmFtZSI6IllvdXIgYnVzaW5lc3MgbmFtZSIsInNlc3Npb25fdHlwZSI6IlBBWU1FTlRTIiwiY2xpZW50X2V2ZW50X2Jhc2VfdXJsIjoiaHR0cHM6Ly9ldS5wbGF5Z3JvdW5kLmtsYXJuYWV2dC5jb20iLCJleHBlcmltZW50cyI6W3sibmFtZSI6ImluLWFwcC1zZGstbmV3LWludGVybmFsLWJyb3dzZXIiLCJ2YXJpYXRlIjoibmV3LWludGVybmFsLWJyb3dzZXItZW5hYmxlIiwicGFyYW1ldGVycyI6eyJ2YXJpYXRlX2lkIjoibmV3LWludGVybmFsLWJyb3dzZXItZW5hYmxlIn19LHsibmFtZSI6ImluLWFwcC1zZGstY2FyZC1zY2FubmluZyIsInZhcmlhdGUiOiJjYXJkLXNjYW5uaW5nLWVuYWJsZSIsInBhcmFtZXRlcnMiOnsidmFyaWF0ZV9pZCI6ImNhcmQtc2Nhbm5pbmctZW5hYmxlIn19XX0.CgWen6zAO8Vnu52VtfYmC1E7pQXgmJY9Ox8PAgkKKaTh46fzvk3hpq8LTivk6iyZKK6lixoB8G4-Oj0VtEZVPSQoDZnVROc6byax4FPMrjRyiIVQBrZmjGjZHq3hH2etIXirCS7GOz4guC0lqtp8w_rYk1Trf9UFRr3yEH25IV89Pf0nX26YC8powCQ-pzrpNQvc6lP5gQDg8vVL5rxtIF4MLaKV_TpPr3egB7ysVU6E1m9y3z0TAKSdA1U5w7L7x9ujla2h5TDBTz_DkMc7p9S7RP6Lto_Wmz6yuoHGXyZX038HXc9Zaimal81l-6OPCAp_J9hnzSle8jQyfDbgTw",
      });

      Klarna.Payments.load({
        container: "#klarna_container",
        payment_method_category: "pay_now",
      });
    });

    function submit() {
      let order_lines = props.orders.map((order) => {
        if (order.giftBoxType) {
          return {
            type: "physical",
            reference: order.giftBox.brand,
            name: order.giftBox.title,
            quantity: order.length,
            unit_price: (order.price / order.length) * 100,
            tax_rate: 0,
            total_amount: order.price * 100,
            total_discount_amount: 0,
            total_tax_amount: 0,
          };
        } else {
          return {
            type: "physical",
            reference: "build box",
            name: "Build Box",
            quantity: order.length,
            unit_price: (order.price / order.length) * 100,
            tax_rate: 0,
            total_amount: order.price * 100,
            total_discount_amount: 0,
            total_tax_amount: 0,
          };
        }
      });

      Klarna.Payments.authorize(
        {
          payment_method_category: "pay_now",
        },
        {
          purchase_country: "SE",
          purchase_currency: "SEK",
          locale: "sv-SE",
          order_amount: props.price * 100 + 26000,
          order_tax_amount: 0,
          order_lines: [
            ...order_lines,
            {
              type: "physical",
              reference: "shipping cost",
              name: "shipping cost",
              quantity: 1,
              unit_price: 26000,
              tax_rate: 0,
              total_amount: 26000,
              total_discount_amount: 0,
              total_tax_amount: 0,
            },
          ],
        },
        function (res) {
          if (res.approved) {
            api
              .post(`/orders`, props.form, {
                headers: { token: store.getters.user.token },
              })
              .then(() => {
                Swal.fire({
                  title: "Success",
                  text: `Your payment was successful`,
                  icon: "success",
                });
                setTimeout(function () {
                  location.href = "/profile/orders";
                }, 2000);
              })
              .catch((err) => {
                console.log(err);
              });
          } else {
            console.log(res);
          }
        }
      );
    }

    return { submit };
  },
};
</script>
