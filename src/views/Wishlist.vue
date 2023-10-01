<template>
  <v-container>
    <h1 class="mb-5 slider-text">Your Wishlist</h1>
    <v-row>
      <v-col
        v-for="(wishlistItem, index) in getWishlist"
        :key="index"
        cols="12"
        sm="3"
      >
        <v-card class="mx-auto pb-2 card-zoom" max-width="344">
          <v-img
            :src="wishlistItem.book.coverImage"
            height="250px"
            cover
          ></v-img>

          <v-div class="d-flex justify-start">
            <v-div>
              <v-card-title style="font-weight: 700">
                {{ wishlistItem.book.title }}
              </v-card-title>
            </v-div>
          </v-div>

          <v-div class="d-flex justify-start align-center ms-3 mt-2">
            <v-btn class="btn-counter" @click="addToCart(index)">
              <v-icon>mdi-cart-plus</v-icon>
            </v-btn>
          </v-div>

          <v-div class="d-flex ms-4 mt-3">
            <p class="text-h6">
              {{ `Price : $${wishlistItem.book.price}` }}
            </p>
          </v-div>

          <v-card-actions>
            <v-btn
              class="btn-remove ms-2"
              @click="removeFromWishlist(index)"
              color="error"
            >
              Remove
            </v-btn>
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
        Proceed to Cart Page
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters("wishlist_module", ["getWishlist"]),
    ...mapActions("wishlist_module", ["fetchWishlist"]),
  },
  mounted() {
    this.fetchWishlist;
  },
  data() {
    return {};
  },
  methods: {
    addToCart(index) {
      // Implement logic to add the selected item to the cart
      // You can use this.wishlist[index] to access the selected item
    },
    removeFromWishlist(index) {
      this.getWishlist.splice(index, 1);
    },
    calculateTotalPrice() {
      return this.getWishlist.reduce(
        (total, wishlistItem) => total + wishlistItem.book.price,
        0
      );
    },
    proceedToCheckout() {
      this.$router.push("/cartpage");
    },
  },
};
</script>

<style scoped>
/* Reuse the same scoped styles for the wishlist page as the cart page */
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
  transform: scale(1.05); /* You can adjust the scale factor as needed */
}
</style>
