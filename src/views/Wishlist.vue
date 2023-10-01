<template>
  <v-container>
    <h1 class="mb-5 slider-text">Your Wishlist</h1>
    <v-row>
      <!-- Looping through Wishlist items list from vuex in card -->

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
          <!-- Button to add product in cart  -->
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
            <!-- Button to delete product from cart  -->
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
      <!-- Button to proceed to checkout  -->
      <v-btn @click="proceedToCartPage" class="btn-counter mb-5">
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
    addToCart(index) {},
    // function to remove book from wishlist
    removeFromWishlist(index) {
      this.getWishlist.splice(index, 1);
    },
    // function to get totel of books vailable in wishlist
    calculateTotalPrice() {
      return this.getWishlist.reduce(
        (total, wishlistItem) => total + wishlistItem.book.price,
        0
      );
    },
    // function for routing to cart page.
    proceedToCartPage() {
      this.$router.push("/cartpage");
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
