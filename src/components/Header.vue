<template>
  <v-app-bar app color="black" class="header-background">
    <v-container>
      <v-row align="center" justify="space-between">
        <v-col cols="1" sm="2">
          <v-app-bar-nav-icon @click="toggleMenu"></v-app-bar-nav-icon>
          <!-- <v-icon>mdi-menu</v-icon> -->
        </v-col>

        <v-col cols="5" sm="8" class="text-center">
          <router-link to="/" class="text-decoration-none">
            <span class="logo-text">Book Store</span>
          </router-link>
        </v-col>
        <v-col cols="6" sm="2" class="d-flex text-end">
          <router-link :to="'/CartPage'">
            <v-btn icon color="white">
              <v-icon>mdi-cart</v-icon>
            </v-btn>
          </router-link>
          <router-link :to="'/Wishlist'">
            <v-btn icon color="white">
              <v-icon>mdi-heart</v-icon>
            </v-btn>
          </router-link>
          <router-link :to="'/Bookscatalog'">
            <v-btn icon color="white">
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </router-link>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
  <div v-if="showNavContent" class="menu">
    <div class="vertical-menu">
      <router-link to="/">
        <v-btn flat class="solid-btn">Home</v-btn></router-link
      >
      <router-link to="/bookscatalog">
        <v-btn flat class="solid-btn">All Products</v-btn></router-link
      >
      <router-link to="/bookscatalog">
        <v-btn flat class="solid-btn">Find Product</v-btn></router-link
      >
      <router-link to="/userdashboard/userprofile">
        <v-btn flat class="solid-btn">My Account</v-btn></router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      showNavContent: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showNavContent = !this.showNavContent;
    },
  },
};
</script>

<style scoped>
.text-decoration-none {
  text-decoration: none;
  color: inherit;
}

.header-background {
  background-color: #125a18 !important;
}

/* //////////////////// */
.vertical-menu v-btn {
  text-align: left;
  padding: 10px;
  background-color: #f0f0f0;
  border: 1px solid black;
  cursor: pointer;
}

/* Style for the icons */
.vertical-menu v-icon {
  margin-right: 10px;
}
.vertical-menu v-btn:hover {
  background-color: #ddd;
}

.vertical-menu {
  position: absolute;
  z-index: 9999;
  display: flex;
  max-width: 200px;
  flex-direction: column;
  gap: 10px;
  padding: 30px;
  margin-left: 130px;
  margin-top: 30px;
  background-color: #faf9f6;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); /* Add a box shadow */
  border-radius: 5px;
  transition: transform 0.8s ease-in-out;
}
.solid-btn {
  background-color: rgba(255, 255, 255, 0);
  color: #125a18 !important;
  border: 1px solid #fd744a;
}

@media (max-width: 480px) {
  .vertical-menu {
    position: absolute;
    z-index: 9999;
    display: flex;
    max-width: 200px;
    flex-direction: column;
    gap: 10px;
    padding: 30px;
    margin-left: 30px;
    margin-top: 30px;
    background-color: rgb(255, 255, 255);
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); /* Add a box shadow */
  }
}

.navContent {
  display: flex;
  align-items: center;
  gap: 40px;
}

.iconLarge {
  font-size: 24px;
}
.menu {
  display: block;
}

/* //////////////////// */
</style>
