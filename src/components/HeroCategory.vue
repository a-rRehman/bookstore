<template>
  <section class="category-sections">
    <v-container>
      <v-row>
        <!-- First Category Section -->
        <v-col cols="12" md="4">
          <div class="category">
            <v-card class="category-card d-flex flex-column" outlined>
              <v-icon class="icon" color="#ff6e40"
                >mdi-book-open-variant</v-icon
              >
              <h3 style="color: #ff6e40">Fiction</h3>
              <p>
                Explore our wide range of fiction books, from classic novels to
                contemporary bestsellers.
              </p>
              <v-btn flat class="solid-btn">Browse</v-btn>
            </v-card>
          </div>
        </v-col>

        <!-- Second Category Section -->
        <v-col cols="12" md="4">
          <div class="category">
            <v-card class="category-card d-flex flex-column" outlined>
              <v-icon class="icon" color="#125a18">mdi-book-education</v-icon>
              <h3 style="color: #125a18">Education</h3>
              <p>
                Enhance your knowledge with our educational books covering
                various subjects and disciplines.
              </p>
              <v-btn flat class="solid-btn-center">Browse</v-btn>
            </v-card>
          </div>
        </v-col>

        <!-- Third Category Section -->
        <v-col cols="12" md="4">
          <div class="category">
            <v-card class="category-card d-flex flex-column" outlined>
              <v-icon class="icon" color="#ff6e40">mdi-book-education</v-icon>
              <h3 style="color: #ff6e40">Scientific</h3>
              <p>
                Enhance your knowledge with our educational books covering
                various subjects and disciplines.
              </p>
              <v-btn flat class="solid-btn">Browse</v-btn>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.category-sections {
  background-color: #f7f7f7;
  padding: 40px 0;
  margin-top: 100px;
  margin-bottom: 100px;
}

.card-zoom {
}

.icon {
  font-size: 48px;
  margin-bottom: 20px;
}

/* .category {
  text-align: start;
  margin-bottom: 30px;
} */

.category-card {
  padding: 30px;
  border: 2px solid #ddd;
  border-radius: 10px;
  transition: border-color 0.3s ease-in-out;
  background-image: url("https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/Home04_imb2.jpg");
  background-size: auto;
  background-position: top right;
  background-repeat: no-repeat;
  border: 1px solid rgba(0, 0, 0, 0.616);
  transition: transform 0.3s ease-in-out;
}

.category-card:hover {
  border-color: #333;
}

.solid-btn {
  background-color: #125a1800;
  border: 1px solid #125a18;
  color: #125a18;
  font-weight: 700;
}

.solid-btn:hover {
  background-color: #125a18;
  border: 1px solid #125a18;
  color: white;
}

.solid-btn-center {
  background-color: #125a1800;
  border: 1px solid #ff6e40;
  color: #ff6e40;
  font-weight: 700;
}

.solid-btn-center:hover {
  background-color: #ff6e40;
  color: white;
}

.category-card:hover {
  transform: scale(1.05); /* You can adjust the scale factor as needed */
}

h3 {
  font-size: 24px;
  margin-bottom: 10px;
}

p {
  font-size: 16px;
  color: #555;
}

.column01 {
  background-color: yellow !important;
}
</style>
