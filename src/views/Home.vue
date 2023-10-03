<template>
  <HeroCaroselO />
  <Credibility />
  <HotSells />
  <HeroCategory />
  <NewsLetter />
  <v-btn @click="Logout">Logout</v-btn>
</template>

<script>
import HeroCaroselO from "@/components/HeroCaroselO.vue";
import HeroCategory from "@/components/HeroCategory.vue";
import HotSells from "@/components/HotSells.vue";
import NewsLetter from "@/components/NewsLetter.vue";
import Credibility from "@/components/Credibility.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  methods: {
    ...mapActions("user_module", ["fetchLogoutData"]),
    async Logout() {
      const res = await this.fetchLogoutData();
      console.log(res);
      if (res.message === "Logout Successfull") {
        localStorage.clear();
      }
    },
  },
  components: {
    HeroCaroselO,
    HeroCategory,
    HotSells,
    NewsLetter,
    Credibility,
  },
};
</script>
