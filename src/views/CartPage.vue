<template>
  <v-container>
    <h1 class="mb-5 slider-text">Your Cart</h1>
    <v-row>
      <!-- Looping Through the list of object with cards -->
      <v-col
        v-for="(cartItem, index) in getCartItems"
        :key="index"
        cols="12"
        sm="3"
      >
        <v-card class="mx-auto pb-2 card-zoom" max-width="344">
          <v-img :src="cartItem.book.coverImage" height="250px" cover></v-img>

          <v-div class="d-flex justify-start">
            <v-div
              ><v-card-title style="font-weight: 700">
                {{ cartItem.book.title }}
              </v-card-title>
            </v-div>
          </v-div>

          <!-- Adding counter button to increase and decrease the quantity  -->
          <v-div class="d-flex justify-start align-center ms-3 mt-2">
            <v-btn class="btn-counter" @click="increaseQuantity(index)">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
            <p class="mr-2 ml-2">{{ cartItem.quantity }}</p>
            <v-btn class="btn-counter" @click="decreaseQuantity(index)">
              <v-icon>mdi-minus</v-icon>
            </v-btn>
          </v-div>
          <v-div class="d-flex ms-4 mt-3">
            <p class="text-h6">
              {{
                `Price : $${Math.floor(
                  cartItem.book.price * cartItem.quantity
                )}`
              }}
            </p>
          </v-div>

          <!-- Button to remove the Currrent Book  -->
          <v-card-actions>
            <v-btn
              class="btn-remove ms-2"
              @click="removeItem(index)"
              color="error"
              >Remove</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <div class="text-center mt-5">
      <p class="text-h5" style="font-weight: 600">
        Total Price: ${{ Math.floor(calculateTotalPrice()) }}
      </p>
    </div>

    <div class="text-center mt-5">
      <v-btn @click="proceedToCheckout" class="btn-counter mb-5">
        Proceed to Checkout
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters("cart_module", ["getCartItems"]),
    ...mapActions("cart_module", ["fetchCartItems"]),
  },
  mounted() {
    this.fetchCartItems;
  },
  data() {
    return {};
  },
  methods: {
    // function to increase and decrease the book quantity

    increaseQuantity(index) {
      this.getCartItems[index].quantity++;
    },
    decreaseQuantity(index) {
      if (this.getCartItems[index].quantity > 1) {
        this.getCartItems[index].quantity--;
      }
    },

    // function to remove book.
    removeItem(index) {
      this.getCartItems.splice(index, 1);
    },

    // function to calculate totel price.
    calculateTotalPrice() {
      return this.getCartItems.reduce(
        (total, cartItem) => total + cartItem.book.price * cartItem.quantity,
        0
      );
    },
    // function for routing to checkout page.
    proceedToCheckout() {
      this.$router.push("/checkout");
    },
  },
};
</script>

<style scoped>
.btn-counter {
  background-color: #598c3f;
  color: white;
}

.btn-remove {
  background-color: #ff6d40ef;
  color: white !important;
}
.slider-text {
  font-size: 48px !important;
  font-weight: 600;
  color: #ff6d40ef !important;
  letter-spacing: 2px !important;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif !important;
}
.card-zoom {
  transition: transform 0.3s ease-in-out;
}

.card-zoom:hover {
  transform: scale(1.05);
}
</style>
