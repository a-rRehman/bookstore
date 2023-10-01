<template>
  <v-container>
    <v-row class="mt-5 mb-5">
      <v-col>
        <v-card class="newsletter-card">
          <!-- Background Image -->
          <div class="newsletter-bg"></div>
          <div class="overlay"></div>
          <!-- Content -->
          <v-card-text class="newsletter-content">
            <v-container>
              <!-- Message Icon -->
              <v-icon class="message-icon" color="primary">mdi-message</v-icon>
              <h2 class="headline headline-newletter">
                Subscribe to Our Newsletter
              </h2>
              <p class="subheadline">
                Stay updated with the latest news and updates.
              </p>

              <!-- Newsletter Form -->
              <v-form ref="form" @submit.prevent="subscribe">
                <v-text-field
                  v-model="email"
                  label="Email"
                  required
                  outlined
                ></v-text-field>
                <v-btn type="submit" color="white">Subscribe</v-btn>
              </v-form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: "",
    };
  },
  methods: {
    subscribe() {
      alert(`Subscribed with email: ${this.email}`);

      this.email = "";
    },
  },
};
</script>

<style scoped>
.newsletter-card {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
}

.newsletter-bg {
  background-image: url("../assets/h7_bg.jpg");
  background-size: cover;
  background-position: center;
  height: 400px; /* Adjust the height as needed */
}

.newsletter-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
}

.headline-newletter {
  font-size: 2rem;
  /* margin-bottom: 20px; */
  line-height: 50px !important;
}

.subheadline {
  font-size: 1.25rem;
  margin-bottom: 30px;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0000008e; /* Adjust the opacity as needed */
  z-index: 0; /* Ensure the overlay is on top of the background image */
}
/* Style for the form elements can be customized further */

.message-icon {
  font-size: 3rem !important; /* Adjust the icon size as needed */
  margin-right: 10px; /* Add some spacing between the icon and text */
  color: white !important;
  margin-bottom: 20px !important;
}
</style>
