<template>
  <section class="credibility-section">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <div class="return-policy">
            <v-icon class="icon" color="#ff6e40">mdi-refresh</v-icon>
            <h3 style="color: #ff6e40">180-Day Return Policy</h3>
            <p>
              We stand by the quality of our books. If you're not satisfied, you
              can return your purchase within 180 days for a full refund.
            </p>
          </div>
        </v-col>
        <v-col cols="12" md="4">
          <div class="customer-service">
            <v-icon class="icon" color="#125a18">mdi-headset</v-icon>
            <h3 style="color: #125a18">24/7 Customer Service</h3>
            <p>
              Our dedicated customer service team is available 24/7 to assist
              you with any questions or concerns you may have.
            </p>
          </div>
        </v-col>
        <v-col cols="12" md="4">
          <div class="book-quality">
            <v-icon class="icon" color="#ff6e40">mdi-star-outline</v-icon>
            <h3 style="color: #ff6e40">High-Quality Books</h3>
            <p>
              We take pride in offering a wide selection of high-quality books
              curated to meet your reading needs.
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.credibility-section {
  background-color: #f7f7f7;
  padding: 40px 0;
}

.icon {
  font-size: 48px;
  margin-bottom: 20px;
}

.return-policy,
.customer-service,
.book-quality {
  text-align: center;
  margin-bottom: 30px;
}

h3 {
  font-size: 24px;
  margin-bottom: 10px;
}

p {
  font-size: 16px;
  color: #555;
}
</style>
