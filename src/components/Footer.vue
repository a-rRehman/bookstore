<template>
  <v-footer class="footer-background bg-dark">
    <v-row justify="center" no-gutters class="mt-2 mb-2">
      <v-btn
        v-for="link in links"
        :key="link"
        variant="text"
        class="mx-2 links-footer"
        rounded="xl"
      >
        {{ link }}
      </v-btn>
      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>Ecommerce</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"],
  }),
};
</script>

<style scoped>
.footer-background {
  background-color: #125a18 !important;
}
.links-footer {
  border: 1px solid #f3f7f3;
  border-radius: 5px !important;
  font-size: 12px;
}
* {
  color: #f3f7f3 !important;
  font-weight: 500;
  font-size: 16px;
}
</style>
