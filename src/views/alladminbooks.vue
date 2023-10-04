<template>
  <v-container>
    <v-row justify="center" class="mt-5 mb-5">
      <v-col cols="12" class="text-center">
        <h1 class="slider-text">
          All
          <span style="color: #ff6d40ef; text-decoration: underline"
            >Products</span
          >
          PRODUCTS
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="(card, index) in this.newBook"
        :key="index"
        cols="12"
        sm="3"
      >
        <v-card class="mx-auto pb-2 card-zoom" max-width="344">
          <v-img :src="card.cover_image_url" height="400px" cover></v-img>
          <v-div class="d-flex ms-1 me-3 align-center justify-space-between">
            <v-div class=""
              ><v-card-title style="font-weight: 700">
                {{ card.title }}
              </v-card-title>
            </v-div>
          </v-div>
          <v-div class="d-flex">
            <v-div class="ma-3 me-auto"
              ><v-card-price class="font-weight-bold text-green ms-1">
                Price: {{ card.price }} </v-card-price
              ><br />
              <v-card-price class="font-weight-bold text-green ms-1">
                Author: {{ card.author }}
              </v-card-price>
            </v-div>

            <v-div class="ma-4"></v-div>
          </v-div>

          <v-card-actions class="ms-3 d-flex">
            <v-btn
              @click="openUpdateDialog(card)"
              color="deep-orange-accent-2"
              variant="outlined"
            >
              Update
            </v-btn>

            <v-btn
              @click="deleteBook(card.id)"
              class="ms-2 solid-button"
              color="deep-orange-accent-2"
              variant="outlined"
            >
              Delete
            </v-btn>
          </v-card-actions>
        </v-card>

        <!-- Update Book Dialog -->
        <v-dialog v-model="updateDialog" max-width="500">
          <v-card>
            <v-card-title class="primary-color white--text"
              >Update Book</v-card-title
            >
            <v-card-text>
              <v-form @submit.prevent="updateBook">
                <v-text-field
                  v-model="editedBook.title"
                  label="Title"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="editedBook.author"
                  label="Author"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="editedBook.cover_image_url"
                  label="Cover Image URL"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="editedBook.price"
                  label="Price"
                  required
                  type="number"
                  step="0.01"
                ></v-text-field>
                <v-textarea
                  v-model="editedBook.description"
                  label="Description"
                  required
                ></v-textarea>
                <v-btn color="primary" type="submit">Update</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters("book_module", ["getBooksList"]),
  },
  data() {
    return {
      newBook: [],
      books: [],
      editedBook: {},
      updateDialog: false,
    };
  },

  async beforeMount() {
    const bookList = await this.fetchAllBook();
    this.newBook = bookList;
  },

  methods: {
    ...mapActions("book_module", ["fetchAllBook"]),
    ...mapActions("book_module", ["fetchDeleteBook"]),
    ...mapActions("book_module", ["fetchUpdatedBook"]),

    async deleteBook(id) {
      const response = await this.fetchDeleteBook(id);
      console.log(response);

      const bookList = await this.fetchAllBook();
      this.newBook = bookList;
    },

    openUpdateDialog(book) {
      this.editedBook = book;
      this.updateDialog = true;
    },

    async updateBook() {
      // console.log(this.editedBook);
      const response = await this.fetchUpdatedBook(this.editedBook);
      console.log(response);

      // const bookList = await this.fetchAllBook();
      // this.newBook = bookList;

      this.updateDialog = false;
    },
  },
};
</script>

<style scoped>
.primary-color {
  background-color: #fb7e58;
  color: white;
}
</style>
