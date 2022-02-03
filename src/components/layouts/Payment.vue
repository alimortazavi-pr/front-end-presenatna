<template>
  <div
    class="text-center mt-3"
    v-show="showPaypalButton"
    id="paypal-button-container"
  ></div>
</template>

<script>
import Swal from "sweetalert2";
import api from "@/api";

export default {
  props: {
    showPaypalButton: {
      type: Boolean,
      default: false,
    },
    price: {
      required: true,
    },
    form: {
      required: true,
    },
  },
  watch: {
    showPaypalButton(newVal) {
      if (newVal) {
        global.paypal
          .Buttons({
            // Set up the transaction
            createOrder: (data, actions) => {
              return actions.order.create({
                intent: 'CAPTURE',
                purchase_units: [
                  {
                    amount: {
                      value: this.price + 260,
                      currency_code: "SEK"
                    },
                  },
                ],
                // application_context: {
                //   shipping_preference: "NO_SHIPPING",
                // },
              });
            },
            // Finalize the transaction
            onApprove: (data, actions) => {
              return actions.order
                .capture()
                .then(() => {
                  api
                    .post(`/orders`, this.form, {
                      headers: { token: this.$store.getters.user.token },
                    })
                    .then(() => {
                      //   store.dispatch("loading", false);
                      //   isPaypalPayment.value = true;
                    })
                    .catch((err) => {
                      console.log(err);
                      //   errors.value = err.response.data.data;
                      //   store.dispatch("loading", false);
                    });
                })
                .then(() => {
                  // Show a success message to the buyer
                  Swal.fire({
                    title: "Success",
                    text: `Your payment was successful`,
                    icon: "success",
                  });
                  setTimeout(function() {
                    location.href = "/profile/orders";
                  }, 2000);
                })
                .catch((error) => {
                  Swal.fire({
                    text: error.message,
                    icon: "error",
                  });
                });
            },
          })
          .render("#paypal-button-container");
      }
    },
  },
};
</script>
