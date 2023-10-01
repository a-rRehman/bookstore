<template>
  <div>
    <v-container>
      <v-text-field
        v-model="track_id"
        label="Enter Tracking ID"
        outlined
      ></v-text-field>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      track_id: "",
    };
  },
  computed: {},
};
</script>
