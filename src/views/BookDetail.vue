<template>
  <v-container>
    <v-row class="mt-5">
      <v-col md="5">
        <v-img
          :src="book.cover_image_url"
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

        <h2 style="color: #ff6e40">${{ book.price * this.quantity }}</h2>

        <v-btn color="#ff6e40" @click="addToCart">Add to Cart</v-btn>
      </v-col>
    </v-row>

    <v-row>
      <h2 class="ms-3 mt-10">Related Products</h2>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {},

  methods: {
    ...mapActions("book_module", ["fetchSingleBook"]),
    ...mapActions("book_module", ["fetchAddCart"]),
    addToCart() {
      this.$router.push("/cartpage");
    },
    incrementCounter() {
      this.counter++;
      this.quantity++;
    },
    decrementCounter() {
      if (this.counter > 1) {
        this.counter--;
        this.quantity--;
      }
    },

    async addToCart() {
      this.item.user_id = localStorage.getItem("user_id");
      this.item.book_id = this.book.id;
      this.item.quantity = this.quantity;
      this.item.price = this.book.price;
      console.log(this.item);
      const res = await this.fetchAddCart(this.item);
      console.log(res.message);
    },
  },

  async beforeMount() {
    this.id = this.$route.params.id;
    const response = await this.fetchSingleBook(this.id);
    this.book = response;
    console.log(response);
  },

  data() {
    return {
      item: {
        user_id: "",
        book_id: "",
        quantity: "",
        price: "",
      },
      quantity: 1,
      rating: 4,
      counter: 1,
      id: 0,
      book: [],
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
