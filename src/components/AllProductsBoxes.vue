<template>
  <v-btn @click="gettingBoxes">Get Boxes</v-btn>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  components: {},
  computed: {
    ...mapGetters("boxes", ["getBoxesList"]),
    ...mapActions("boxes", ["fetchBoxes"]),
  },
  mounted() {
    this.fetchBoxes;
  },

  methods: {
    gettingBoxes() {
      console.log(this.getBoxesList);
    },
  },
};
</script>

<style scoped></style>
