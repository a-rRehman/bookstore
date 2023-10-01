<template>
  {{ getDummyData }}
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters("book", ["getDummyData"]),
  },
  mounted() {
    this.fetchDummy();
  },
  methods: {
    ...mapActions("book", ["fetchDummy"]),
  },
};
</script>

<style></style>
