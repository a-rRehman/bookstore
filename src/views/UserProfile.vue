<template>
  <div class="container">
    <v-div>
      <v-div class="text-center user-title"><p>User Information</p></v-div>
      <v-card flat class="card-width">
        <v-card-title>Name :</v-card-title>
        <v-card-text>{{ userData.name }}</v-card-text>
      </v-card>

      <v-card flat class="card-width">
        <v-card-title>Email :</v-card-title>
        <v-card-text>{{ userData.email }}</v-card-text>
      </v-card>

      <v-card flat class="card-width">
        <v-card-title>Password :</v-card-title>
        <v-card-text>{{ userData.password }}</v-card-text>
      </v-card>

      <VBtn class="btn-submit" @click="editUserData">Edit</VBtn>
    </v-div>
    <v-dialog v-model="dialog" max-width="600">
      <v-card>
        <v-card-title>Edit User Data</v-card-title>
        <v-card-text>
          <v-text-field
            label="Name"
            v-model="editedUserData.name"
          ></v-text-field>
          <v-text-field
            label="Email"
            v-model="editedUserData.email"
          ></v-text-field>
          <v-text-field
            label="Password"
            v-model="editedUserData.password"
            type="password"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="saveUserData">Save</v-btn>
          <v-btn @click="closeDialog">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        name: "AbdurRehman",
        password: "123456",
        email: "arj00789@gmail.com",
      },
      editedUserData: {
        name: "",
        email: "",
        password: "",
      },
      dialog: false,
    };
  },
  methods: {
    editUserData() {
      this.editedUserData = { ...this.userData };
      this.dialog = true;
    },
    saveUserData() {
      this.userData = { ...this.editedUserData };
      this.dialog = false;
    },
    closeDialog() {
      this.dialog = false;
    },
  },
};
</script>

<style scoped>
.container {
  height: 100vh;
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
.user-title {
  font-size: 26px;
  font-weight: 600;
}
.btn-submit {
  width: 500px;
  margin-left: 30px;
  background-color: #125a18;
  border: none !important;
  color: white !important;
}
</style>
