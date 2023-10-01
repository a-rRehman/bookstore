<template>
  <v-container>
    <v-row justify="center" class="mt-5 mb-5">
      <v-col cols="12" class="text-center">
        <h1 class="slider-text">
          HOT
          <span style="color: #ff6d40ef; text-decoration: underline"
            >SELLING</span
          >
          PRODUCTS
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="(card, index) in getHotSells" :key="index" cols="12" sm="3">
        <v-card class="mx-auto pb-2 card-zoom" max-width="344">
          <v-img :src="card.image" height="400px" cover></v-img>
          <v-div class="d-flex ms-1 me-3 align-center justify-space-between">
            <v-div class=""
              ><v-card-title style="font-weight: 700">
                {{ card.title }}
              </v-card-title>
            </v-div>
            <v-div
              ><v-icon color="red" @click="toggleWishlist(card)">{{
                card.wishlist ? "mdi-heart" : "mdi-heart-outline"
              }}</v-icon></v-div
            >
          </v-div>
          <v-div class="d-flex">
            <v-div class="ma-3 me-auto"
              ><v-card-price class="font-weight-bold text-green ms-1">
                Price: {{ card.price }}
              </v-card-price></v-div
            >
            <v-div class="ma-4"></v-div>
          </v-div>

          <v-card-actions>
            <v-rating
              v-model="rating"
              :half-increments="true"
              color="#ff6e40"
            ></v-rating>
          </v-card-actions>
          <v-card-actions class="ms-3 d-flex">
            <v-btn
              @click="routing"
              color="deep-orange-accent-2"
              variant="outlined"
            >
              Lets Buy!
            </v-btn>

            <v-btn
              @click="routing"
              class="ms-2 solid-button"
              color="deep-orange-accent-2"
              variant="outlined"
            >
              Add to Cart!
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters("HotSells", ["getHotSells"]),
    ...mapActions("HotSells", ["fetchHotSells"]),
  },
  mounted() {
    this.fetchHotSells;
  },
  methods: {
    routing() {
      this.$router.push("/bookdetails");
    },
    toggleWishlist(product) {
      product.wishlist = !product.wishlist;
    },
  },

  data: () => ({
    // wishlistIcon: false,
    rating: 4,
    icontoggle: true,
  }),
};
</script>

<style scoped>
.card-zoom {
  transition: transform 0.3s ease-in-out;
}

.card-zoom:hover {
  transform: scale(1.05); /* You can adjust the scale factor as needed */
}
.slider-text {
  font-size: 48px !important;
  font-weight: 600;
  color: #125a18 !important;
  letter-spacing: 2px !important;
  line-height: 90px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif !important;
}

.v-card-actions {
  padding: 0px !important;
}
.solid-button {
  background-color: #125a18;
  border: none !important;
  color: white !important;
}

.book-name {
  font-weight: 500 !important;
}
</style>
