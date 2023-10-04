<template>
  <v-container>
    <h1 class="mb-5 slider-text">Your Cart</h1>
    <v-row>
      <!-- Looping Through the list of object with cards -->
      <v-col v-for="(cartItem, index) in cart" :key="index" cols="12" sm="3">
        <v-card class="mx-auto pb-2 card-zoom" max-width="344">
          <!-- <v-img :src="cartItem.cover_image_url" height="250px" cover></v-img> -->

          <v-div class="d-flex justify-start">
            <v-div
              ><v-card-title style="font-weight: 700">
                Price : {{ cartItem.price }}
              </v-card-title>
              <v-card-title style="font-weight: 700">
                Book ID : {{ cartItem.id }}
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
              <!-- {{ `Price : $${Math.floor(cartItem.price)}` }} -->
            </p>
          </v-div>

          <!-- Button to remove the Currrent Book  -->
          <v-card-actions>
            <v-btn
              class="btn-remove ms-2"
              @click="removeItem(cartItem)"
              color="error"
              >Remove</v-btn
            >
            <v-btn
              class="btn-remove ms-2"
              @click="updateCart(cartItem)"
              color="error"
              >Update Cart</v-btn
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
      <v-btn @click="placeOrder" class="btn-counter mb-5"> Place Order </v-btn>
    </div>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  async beforeMount() {
    const response = await this.fetchDisplayCart();
    this.cart = response.cart;
    // console.log(response.cart);
  },
  data() {
    return {
      cart: [],

      newData: {},
      updatedQuantity: 1,
    };
  },
  methods: {
    ...mapActions("book_module", ["fetchDisplayCart"]),
    ...mapActions("book_module", ["fetchUpdateCart"]),
    ...mapActions("book_module", ["fetchRemoveCart"]),
    ...mapActions("book_module", ["fetchPlaceOrder"]),
    // function to increase and decrease the book quantity

    // function to remove book.
    async removeItem(cartItem) {
      const response = await this.fetchRemoveCart(cartItem.id);
      console.log(response);
      // if (response.data.message === "Cart item removed") {
      const res = await this.fetchDisplayCart();
      this.cart = res.cart;
      // }
      // this.cart.splice(cartItem.id, 1);

      // console.log(response.message);
    },
    async updateCart(item) {
      // console.log(item.id);
      this.newData.id = item.id;
      this.newData.user_id = localStorage.getItem("user_id");
      this.newData.book_id = item.book_id;
      this.newData.price = item.price;
      this.newData.quantity = this.updatedQuantity;
      // user_id, book_id, quantity, price
      // console.log(this.newData);
      const response = await this.fetchUpdateCart(this.newData);
      console.log(response);
    },

    increaseQuantity(index) {
      this.cart[index].quantity++;
      this.updatedQuantity = this.cart[index].quantity;
      console.log(this.updatedQuantity);
    },
    decreaseQuantity(index) {
      this.cart[index].quantity--;
      this.updatedQuantity = this.cart[index].quantity;
      console.log(this.decreaseQuantity);
    },

    // // function to remove book.
    // removeItem(index) {
    //   this.cart.splice(index, 1);
    // },

    // function to calculate totel price.
    calculateTotalPrice() {
      return this.cart.reduce(
        (total, cartItem) => total + cartItem.price * cartItem.quantity,
        0
      );
    },

    async placeOrder() {
      const response = await this.fetchPlaceOrder();
      console.log(response);
      const res = await this.fetchDisplayCart();
      this.cart = res.cart;
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
