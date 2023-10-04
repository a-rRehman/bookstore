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
      <v-col cols="12" class="text-center">
        <v-text-field
          v-model="searchQuery"
          label="Search Books"
          outlined
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        v-for="(card, index) in paginatedCards"
        :key="index"
        cols="12"
        sm="4"
      >
        <v-card class="mx-auto pb-2" max-width="344">
          <v-img :src="card.cover_image_url" height="400px" cover></v-img>
          <v-div class="d-flex">
            <v-div class="ma-1 me-auto">
              <v-card-title>
                {{ card.title }}
              </v-card-title>
              <v-card-title> ${{ card.price }} </v-card-title>
            </v-div>
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
              @click="singleProduct(card.id)"
              color="deep-orange-accent-2"
              variant="outlined"
              >Let's Buy!!!!!</v-btn
            >

            <!-- <router-link to="`/bookdetails/${}`">
              <v-btn
                class="ms-2 solid-button"
                color="deep-orange-accent-2"
                variant="outlined"
                >Add to Cart!</v-btn
              >
            </router-link> -->
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- thee paagination cCOntrols -->
    <v-row justify="center" class="mt-3">
      <v-col cols="12" class="text-center">
        <v-pagination
          v-model="currentPage"
          :length="totalPages"
          @input="paginate"
          color="#ff6e40"
        ></v-pagination>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data: () => ({
    rating: 4,
    searchQuery: "",
    currentPage: 1,
    itemsPerPage: 6,
    cards: [],
  }),
  computed: {
    ...mapGetters("book_module", ["getBooksList"]),
    filteredCards() {
      return this.cards.filter((card) =>
        card.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },

    paginatedCards() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.filteredCards.slice(startIndex, endIndex);
    },
    totalPages() {
      return Math.ceil(this.filteredCards.length / this.itemsPerPage);
    },
  },
  methods: {
    singleProduct(id) {
      this.$router.push({
        name: "BookDetail",
        params: { id: id },
      });
    },
    ...mapActions("book_module", ["fetchAllBook"]),
    paginate() {},
  },
  async beforeMount() {
    const bookList = await this.fetchAllBook();
    this.cards = bookList;
    console.log(bookList);
  },
};
</script>

<style scoped>
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
</style>
