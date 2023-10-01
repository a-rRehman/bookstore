<template>
  <VNavigationDrawer class="sidebar" theme="dark">
    <VList density="compact" nav>
      <VListItem
        prepend-icon="mdi-account-group"
        value="Manage Profile"
        title="All Users"
        @click="manageProfile"
      />
      <VListItem
        prepend-icon="mdi-account-group"
        value="My Orders"
        title="All Orders"
        @click="myOrders"
      />
      <VListItem
        prepend-icon="mdi-account-group"
        value="Track Order"
        title="Track Order"
        @click="trackOrder"
      />
    </VList>
  </VNavigationDrawer>
</template>

<script>
export default {
  methods: {
    manageProfile() {
      this.$router.push("/admindashboard/allusers");
    },
    trackOrder() {
      this.$router.push("/admindashboard/allorders");
    },
    myOrders() {
      this.$router.push("/admindashboard/allorders");
    },
  },
};
</script>

<style scoped>
.sidebar {
  background-color: #fb7e58;
}
</style>
