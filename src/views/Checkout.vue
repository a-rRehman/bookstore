<template>
  <v-container>
    <v-row>
      <!-- The Left column (orderSummary)  -->
      <v-col cols="12" md="4">
        <h2 class="mb-3 slider-text">Order Summary</h2>
        <v-card class="items-card">
          <v-card-text>
            <div
              class="totel-text"
              v-for="(cartItem, index) in cart"
              :key="index"
            >
              <p>{{ cartItem.book.title }} x {{ cartItem.quantity }}</p>
            </div>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-text>
            <div class="d-flex justify-between">
              <p class="slider-mini-text">Total Items:</p>
              <p class="slider-mini-text">{{ totalItems }}</p>
            </div>
            <div class="d-flex justify-between">
              <p class="totel-text">Total Price:</p>
              <p class="slider-mini-text">${{ calculateTotalPrice() }}</p>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Right Column Form (PAyment integration)  -->
      <v-col cols="12" md="8">
        <!--The Shipping Address Form -->
        <v-card class="items-card">
          <v-card-title>Shipping Address</v-card-title>
          <v-card-text>
            <v-form @submit="submitOrder">
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="shippingInfo.name"
                    label="Full Name"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="shippingInfo.email"
                    label="Email"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="shippingInfo.address"
                    label="Address"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="shippingInfo.city"
                    label="City"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="shippingInfo.postalCode"
                    label="Postal Code"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>

        <!-- The Payment Information Form -->
        <v-card class="items-card mt-3">
          <v-card-title>Payment Information</v-card-title>
          <v-card-text>
            <v-form @submit="submitOrder">
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="paymentInfo.cardNumber"
                    label="Card Number"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="paymentInfo.expiryDate"
                    label="Expiry Date (MM/YY)"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="paymentInfo.cvc"
                    label="CVC"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>

        <!-- Button to Place Order Button -->
        <div class="text-center mt-5">
          <v-btn @click="submitOrder" class="slider-btn"> Place Order </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      cart: [
        {
          book: {
            title: "Harry Potter",
          },
          quantity: 2,
        },
        {
          book: {
            title: "Fortty Rules",
          },
          quantity: 1,
        },
      ],
      shippingInfo: {
        name: "",
        email: "",
        address: "",
        city: "",
        postalCode: "",
      },
      paymentInfo: {
        cardNumber: "",
        expiryDate: "",
        cvc: "",
      },
    };
  },
  computed: {
    totalItems() {
      return this.cart.reduce(
        (total, cartItem) => total + cartItem.quantity,
        0
      );
    },
  },
  methods: {
    calculateTotalPrice() {
      return 100;
    },
    submitOrder() {},
  },
};
</script>

<style scoped>
.slider-text {
  font-size: 58px !important;
  font-weight: 600;
  color: #125a18 !important;
  letter-spacing: 2px !important;
  line-height: 60px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif !important;
}

.slider-mini-text {
  font-size: 28px !important;
  font-weight: 600;
  color: #125a18 !important;
  letter-spacing: 2px !important;
  line-height: 40px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif !important;
}
.totel-text {
  font-size: 28px !important;
  font-weight: 600;
  color: #ff6d40ef !important;
  letter-spacing: 2px !important;
  line-height: 50px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif !important;
}

.items-card {
  border: 1px solid rgba(0, 0, 0, 0.411);
}
.slider-btn {
  border-radius: 0px !important;
  font-size: 16px;
  background-color: #125a18 !important;
  color: white;
}
</style>
