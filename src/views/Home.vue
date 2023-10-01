<template>
  <HeroCaroselO />
  <Credibility />
  <HotSells />
  <HeroCategory />
  <NewsLetter />
</template>

<script>
import HeroCaroselO from "@/components/HeroCaroselO.vue";
import HeroCategory from "@/components/HeroCategory.vue";
import HotSells from "@/components/HotSells.vue";
import NewsLetter from "@/components/NewsLetter.vue";
import Credibility from "@/components/Credibility.vue";

export default {
  components: {
    HeroCaroselO,
    HeroCategory,
    HotSells,
    NewsLetter,
    Credibility,
  },
};
</script>
