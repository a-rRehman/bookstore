<template>
  <v-app>
    <Header />
    <v-main><router-view /></v-main>
    <Footer />
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  computed: {
    ...mapGetters("user_module", ["gettoken"]),
  },
  mounted() {
    console.log(this.gettoken);
  },
  components: {
    Header,
    Footer,
  },
};
</script>
