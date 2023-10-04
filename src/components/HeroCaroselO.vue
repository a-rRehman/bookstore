<template>
  <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows="hover"
    class="h-screen"
  >
    <template v-slot:prev="{ props }">
      <v-btn flat class="caro-btn" variant="elevated" @click="props.onClick"
        ><v-icon>mdi-chevron-left</v-icon></v-btn
      >
    </template>
    <template v-slot:next="{ props }">
      <v-btn flat class="caro-btn" variant="elevated" @click="props.onClick"
        ><v-icon>mdi-chevron-right</v-icon></v-btn
      >
    </template>
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <!-- Add an image here -->
      <v-img :src="slide.imageSrc" height="100%" cover>
        <!-- Add a transparent overlay for text -->
        <v-sheet color="rgba(0, 0, 0, 0.1)" height="100%">
          <div class="d-flex flex-row fill-height justify-start align-center">
            <!-- Add heading text -->
            <div class="text-container">
              <h2 class="text-h2 slider-text" style="color: white">
                BIGGEST
                <span style="color: #ff6d40ef; text-decoration: underline"
                  >BOOK STORE</span
                >
                IN ASIA
              </h2>
              <!-- Add a button -->
              <router-link to="/bookscatalog" class="text-decoration-none">
                <v-btn class="mt-8 slider-btn" color="black">
                  Meet Our Best Seller
                </v-btn>
              </router-link>
              <router-link to="/bookscatalog" class="text-decoration-none">
                <v-btn class="mt-8 ms-3 slider-btn2" color="black">
                  Lets Explore
                </v-btn>
              </router-link>
            </div>
          </div>
        </v-sheet>
      </v-img>
    </v-carousel-item>
  </v-carousel>
</template>

<style scoped>
.text-container {
  padding: 20px; /* Adjust the padding as needed to control text position */
  max-width: 50%; /* Adjust the maximum width as needed */
  text-align: left; /* Align text to the left */
  color: white;
  margin-left: 10%;
}
</style>

<script>
export default {
  data() {
    return {
      slides: [
        {
          imageSrc:
            "https://wpbingosite.com/wordpress/bookio/wp-content/webp-express/webp-images/uploads/2021/08/slider1-1.jpg.webp", // Replace with your image URL
          heading: "Buy The Book You Desire",
        },
        {
          imageSrc:
            "https://wpbingosite.com/wordpress/bookio/wp-content/webp-express/webp-images/uploads/2021/08/slider1-3.jpg.webp", // Replace with your image URL
          heading: "Biggest Book Store In Asia",
        },
      ],
    };
  },
};
</script>

<style scoped>
.caro-btn {
  background-color: #125a18;
  font-size: 20px;
  border: 2px solid #125a18;
  border-radius: 500px;
  color: white;
}

@media (max-width: 480px) {
  .slider-text {
    font-size: 28px !important;
    font-weight: 700;
    color: #125a18 !important;
    letter-spacing: 2px !important;
    line-height: 30px;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif !important;
  }
}
@media (min-width: 780px) {
  .slider-text {
    font-size: 78px !important;
    font-weight: 600;
    color: #125a18 !important;
    letter-spacing: 2px !important;
    line-height: 90px;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif !important;
  }
}

.slider-btn {
  border-radius: 0px !important;
  font-size: 16px;
  background-color: #125a18 !important;
}
.slider-btn:hover {
  border-radius: 0px !important;
  font-size: 16px;
  background-color: #125a18ce !important;
}

.slider-btn2 {
  border-radius: 0px !important;
  font-size: 16px;
  background-color: #125a1800 !important;
  box-shadow: none !important;
  color: #125a18 !important;
  border: 2px solid #125a18;
}
.slider-btn2:hover {
  border-radius: 0px !important;
  font-size: 16px;
  background-color: #f7f7f7ce !important;
  color: black !important;
}
</style>
