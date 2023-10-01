<template>
  <v-container class="main mt-16">
    <p class="text-h3 font-weight-bold slider-text">Login Form</p>
    <v-row class="d-flex">
      <v-col cols="12">
        <v-form class="login-form" fast-fail @submit.prevent>
          <v-text-field
            v-model="email"
            outlined
            dense
            color="blue"
            bg-color="white"
            :rules="emailRules"
            label="Email"
            class="mt-4 custom-input"
          ></v-text-field>
          <v-text-field
            v-model="password"
            outlined
            dense
            color="blue"
            bg-color="white"
            class="mt-4 custom-input"
            autocomplete="on"
            :rules="passwordRules"
            label="Password"
            :type="showPassword ? 'text' : 'password'"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          >
          </v-text-field>

          <v-btn type="submit" @click="routing" block class="mt-2 btn-custom"
            >Submit</v-btn
          >
        </v-form>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <h4 class="signup-para">
          Register As A New User ?
          <v-btn @click="toSignUp" class="btn-custom-guest">SignUp</v-btn>
        </h4>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    toSignUp() {
      this.$router.push("/signup");
    },
    routing() {
      this.$router.push("/userdashboard/userprofile");
    },
    async submitHandlerFetch() {
      const response = await axios.post(
        "http://10.0.10.211:3300/api/login",
        {
          email: this.email,
          password: this.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      //  .then((response) => console.log(response.data))
      //  .catch((err) => console.log(err));
      console.log(response.data);
    },
  },
  data: () => ({
    password: "",
    email: "",
    showPassword: false,
    iconColor: "black",
    passwordRules: [
      (value) => {
        if (value?.length >= 8) return true;

        return "Password must be at least 8 characters";
      },
    ],

    emailRules: [
      (value) => {
        if (/^[a-z0-9.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;

        return "Must be a valid e-mail.";
      },
    ],
  }),
};
</script>
<style scoped>
.signup-para {
  /* margin: 30px; */
  padding-top: 20px;
  color: #ff6d40ef;
  font-size: 20px;
}

.slider-text {
  font-size: 48px !important;
  font-weight: 600;
  color: #ff6d40ef !important;
  letter-spacing: 2px !important;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif !important;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.btn-custom:hover {
  background-color: #ff6d40a8;
  color: white;
  padding: 25px;
  font-size: 20px;
}

.btn-custom {
  background-color: #ff6d40ef;
  color: white;
  padding: 25px;
  font-size: 20px;
}

.btn-custom-guest {
  background-color: #00000000;
  color: #125a18;
  font-size: 18px;
  margin-left: 28px;
  border: 2px solid #125a18;
}

.btn-custom-guest:hover {
  background-color: #125a18;
  color: white;
  font-size: 18px;
  margin-left: 28px;
}

.login-form {
  border: 1px solid #000 !important;
  padding: 30px;
  border-radius: 3px;
  margin-top: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 500px;
}
</style>
