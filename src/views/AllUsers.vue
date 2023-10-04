<template>
  <div class="container mb-5">
    <v-card class="card-width" v-for="user in UserList" :key="user.name">
      <v-card-title
        ><h3>UserName :</h3>
        {{ user.name }}</v-card-title
      >
      <v-card-title
        ><h3>UserEmail :</h3>
        {{ user.email }}</v-card-title
      >
      <v-card-title
        ><h3>Subscription Status :</h3>
        {{ user.subscription }}</v-card-title
      >
      <v-card-action>
        <v-btn @click="removefun(user)" class="btn-remove ms-4 mb-4"
          >Remove</v-btn
        >
      </v-card-action>
    </v-card>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      UserList: [],
    };
  },
  methods: {
    ...mapActions("user_module", ["fetchShowAllUsers"]),
    ...mapActions("user_module", ["fetchDeleteUsers"]),

    async removefun(user) {
      const response = await this.fetchDeleteUsers(user.id);
      const res = await this.fetchShowAllUsers();
      this.UserList = res;
    },
    // removefun(index) {
    //   this.UserList.splice(index, 1);
    // },
  },

  async beforeMount() {
    const response = await this.fetchShowAllUsers();
    this.UserList = response;
    console.log(response);
  },
};
</script>

<style>
.card {
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  margin: 10px;
  width: 500px;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-top: 3%;
  align-items: center;
}
.card-width {
  width: 500px;
  margin: 30px;
  border: 1px solid black;
}

.btn-remove {
  background-color: rgb(216, 50, 50);
  color: white;
}
</style>
