<template>
  <v-container>
    <v-row class="mt-5">
      <v-col md="5">
        <v-img
          src="https://wpbingosite.com/wordpress/bookio/wp-content/webp-express/webp-images/uploads/2018/05/Image-26-480x693.jpg.webp"
          height="500"
          width="500"
          class="product-image"
          cover
        ></v-img>
      </v-col>

      <v-col md="7" class="d-flex flex-column" style="gap: 10px">
        <h1 class="mb-3" style="font-size: 48px; color: #ff6e40">
          {{ book.title }}
        </h1>
        <v-rating
          v-model="rating"
          :half-increments="true"
          color="#ff6e40"
          class="rating"
        ></v-rating>

        <p>By {{ book.author }}</p>

        <div class="product-counter">
          <p>Quantity: {{ counter }}</p>
          <v-btn color="#ff6e40" @click="incrementCounter">+</v-btn>
          <v-btn class="ms-2" color="#ff6e40" @click="decrementCounter"
            >-</v-btn
          >
        </div>

        <p>{{ book.description }}</p>

        <h2 style="color: #ff6e40">${{ totelprice }}</h2>

        <v-btn color="#ff6e40" @click="addToCart">Add to Cart</v-btn>
      </v-col>
    </v-row>

    <v-row>
      <h2 class="ms-3 mt-10">Related Products</h2>
    </v-row>
  </v-container>

  <!-- <HotSells /> -->
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import HotSells from "@/components/HotSells.vue";
export default {
  computed: {
    // ...mapGetters("book_module", ["fetchSingleBook"]),
    ...mapGetters("book_module", ["getSingleBook"]),
  },
  beforeMount() {
    // console.log(this.fetchSingleBook());
    console.log(this.GetSingleBook());
  },
  components: {
    HotSells,
  },
  methods: {
    ...mapActions("book_module", ["fetchSingleBook"]),
    calculateTotalPrice() {
      this.totelprice = this.counter * this.book.price;
    },
    addToCart() {
      this.$router.push("/cartpage");
    },
    incrementCounter() {
      this.counter++;
      this.calculateTotalPrice();
    },
    decrementCounter() {
      if (this.counter > 1) {
        this.counter--;
        this.calculateTotalPrice();
      }
    },
  },
  mounted() {
    this.id = this.$route.params.id;
    console.log(this.id);
  },
  data() {
    return {
      rating: 4,
      counter: 1,
      id: 0,
      book: {
        title: "Empty Roads",
        author: "Sherlock Holmes",
        price: 25,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam possimus eligendi perferendis, eum maxime delectus nihil repellat temporibus accusamus molestiae laborum sunt corrupti ipsam qui ea, quidem at minus iusto?",
        coverImage: "https://via.placeholder.com/400x600",
        reviews: [
          { title: "Great book!", rating: 5, comment: "I loved it!" },
          { title: "Good read", rating: 4, comment: "Enjoyable." },
        ],
        relatedBooks: [
          {
            id: 1,
            title: "Related Book 1",
            author: "Related Author 1",
            coverImage: "https://via.placeholder.com/200x300",
          },
          {
            id: 2,
            title: "Related Book 2",
            author: "Related Author 2",
            coverImage: "https://via.placeholder.com/200x300",
          },
        ],
      },
      // totelprice: this.book.price,
      totelprice: 25,
    };
  },
};
</script>

<style scoped>
.product-counter {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.product-counter p {
  margin-right: 10px;
}

.rating {
  padding: 0px !important;
}

.product-image {
  border-radius: 5px;
}

.slider-text {
  display: none !important;
}
</style>
