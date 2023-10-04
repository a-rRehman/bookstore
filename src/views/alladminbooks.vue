<template>
  <v-container>
    <v-row>
      <v-col
        v-for="(book, index) in newbook"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <v-card>
          <v-img :src="book.cover_image_url" height="200"></v-img>
          <v-card-title class="primary-color white--text">{{
            book.title
          }}</v-card-title>
          <v-card-subtitle>{{ book.author }}</v-card-subtitle>
          <v-card-text>{{ book.description }}</v-card-text>
          <v-card-actions>
            <v-btn color="error" @click="deleteBook(index)">Delete</v-btn>
            <v-btn color="primary" @click="openUpdateDialog(index)"
              >Update</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

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
      books: [
        // Sample data - replace with actual book data from your database
        {
          title: "Book 1",
          author: "Author 1",
          cover_image_url: "https://via.placeholder.com/150",
          price: 19.99,
          description: "Description of Book 1",
        },
        {
          title: "Book 2",
          author: "Author 2",
          cover_image_url: "https://via.placeholder.com/150",
          price: 24.99,
          description: "Description of Book 2",
        },
        // Add more book objects as needed
      ],
      editedBook: {
        title: "",
        author: "",
        cover_image_url: "",
        price: null,
        description: "",
      },
      updateDialog: false,
      selectedIndex: -1,
      newBook: [],
    };
  },
  async mounted() {
    const response = await this.fetchAllBook();
    this.newBook = response;
  },

  methods: {
    ...mapActions("book_module", ["fetchAllBook"]),
    deleteBook(index) {
      this.books.splice(index, 1);
    },
    openUpdateDialog(index) {
      this.selectedIndex = index;
      this.editedBook = { ...this.books[index] };
      this.updateDialog = true;
    },
    updateBook() {
      if (this.selectedIndex >= 0) {
        this.books.splice(this.selectedIndex, 1, { ...this.editedBook });
        this.updateDialog = false;
        this.editedBook = {
          title: "",
          author: "",
          cover_image_url: "",
          price: null,
          description: "",
        };
      }
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
