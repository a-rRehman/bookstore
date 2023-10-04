<template>
  <v-container>
    <v-card class="mx-auto" max-width="500">
      <v-card-title class="primary-color">
        <span class="white--text">Add Book</span>
      </v-card-title>
      <v-card-text>
        <v-form @submit.prevent="addBook">
          <v-text-field
            v-model="book.title"
            label="Title"
            required
          ></v-text-field>
          <v-text-field
            v-model="book.author"
            label="Author"
            required
          ></v-text-field>
          <v-text-field
            v-model="book.cover_image_url"
            label="Cover Image URL"
            required
          ></v-text-field>
          <v-text-field
            v-model="book.price"
            label="Price"
            required
            type="number"
            step="0.01"
          ></v-text-field>
          <v-textarea
            v-model="book.description"
            label="Description"
            required
          ></v-textarea>
          <v-btn color="primary" type="submit">Add</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      book: {
        title: "",
        author: "",
        cover_image_url: "",
        price: null,
        description: "",
      },
    };
  },
  methods: {
    ...mapActions("book_module", ["fetchaddingBook"]),
    async addBook() {
      console.log(this.book);
      const response = await this.fetchaddingBook(this.book);
      console.log(response);
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
