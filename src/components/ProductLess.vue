<template>
  <div>
    <v-container>
      <div class="text-h4 mb-4">ProductLess</div>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="(product, index) in hotSellers"
          :key="index"
        >
          <v-card class="product-card" elevation="2">
            <!-- Product Image -->
            <v-img
              :src="product.imageUrl"
              alt="Product Image"
              max-height="200"
              cover
            ></v-img>

            <!-- Product Name -->
            <div class="text-h6">{{ product.name }}</div>

            <!-- Product Price -->
            <div class="text-caption">{{ product.price }}</div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "HotSellers",
  data() {
    return {
      hotSellers: [
        {
          name: "Product 1",
          price: "$19.99",
          imageUrl: "/assets/booka.jpg",
        },
        {
          name: "Product 2",
          price: "$24.99",
          imageUrl: "/assets/bookb.jpg",
        },
        {
          name: "Product 3",
          price: "$29.99",
          imageUrl: "/assets/bookc.jpg",
        },
        {
          name: "Product 4",
          price: "$30.99",
          imageUrl: "/assets/bookd.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.product-card {
  text-align: center;
  padding: 16px;
}
</style>
