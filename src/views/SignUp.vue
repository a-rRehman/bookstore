<template>
  <v-container class="main mt-5">
    <p class="text-h3 font-weight-bold slider-text">SignUp Form</p>
    <v-sheet width="400">
      <v-form class="signup-form" fast-fail @submit.prevent>
        <v-text-field
          outlined
          dense
          color="blue"
          bg-color="white"
          class="mt-10"
          label="Username"
          v-model="signUpData.username"
          :rules="usernameRules"
        ></v-text-field>
        <v-text-field
          v-model="signUpData.email"
          outlined
          dense
          color="blue"
          bg-color="white"
          :rules="emailRules"
          label="Email"
          class="mt-4"
        ></v-text-field>
        <v-text-field
          v-model="signUpData.password"
          outlined
          dense
          color="blue"
          bg-color="white"
          autocomplete
          class="mt-4"
          :rules="passwordRules"
          label="Password"
          ref="myPass"
          :type="showPassword ? 'text' : 'password'"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
        >
        </v-text-field>
        <v-text-field
          v-model="signUpData.confirmPassword"
          outlined
          dense
          color="blue"
          bg-color="white"
          class="mt-4"
          autocomplete
          :rules="confirmPasswordRules"
          label="Confirm Password"
          :type="showConfirmPassword ? 'text' : 'password'"
          :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showConfirmPassword = !showConfirmPassword"
        >
        </v-text-field>
        <v-btn
          type="submit"
          @click="submitHandler"
          block
          class="mt-2 btn-custom"
          >Submit</v-btn
        >
      </v-form>
    </v-sheet>
    <v-row class="mt-5">
      <v-col cols="12">
        <v-p class="signup-para"
          >Already a User ?
          <v-btn @click="toLogin" class="btn-custom-guest">Login</v-btn></v-p
        >
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import axios from "axios";
import { mapGetters, mapState, mapActions } from "vuex";

export default {
  mounted() {},

  data() {
    return {
      signUpData: {
        username: "",
        password: "",
        email: "",
      },
      showPassword: false,
      showConfirmPassword: false,

      usernameRules: [
        (value) => {
          if (value?.length > 3) return true;

          return "Username must be at least 3 characters";
        },
      ],
      confirmPasswordRules: [
        (value) => {
          if (value === this.signUpData.password) return true;

          return "Password and confirm password are not same";
        },
      ],

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
    };
  },

  methods: {
    ...mapActions("user_module", ["fetchToken"]),
    toLogin() {
      this.$router.push("/Login");
    },

    beforeMount() {
      if (!localStorage.getItem("access_token")) {
        this.$router.push("/");
      }
    },
    async submitHandler() {
      if (
        !this.signUpData.email ||
        !this.signUpData.password ||
        !this.signUpData.username
      ) {
        console.log("Cannot Send");
      } else {
        // this.fetchToken(this.signUpData);
        this.$router.push("/Login");

        // const response = await axios.post(
        //   "http://10.0.10.211:3300/api/register",
        //   {
        //     name: this.signUpData.username,
        //     email: this.signUpData.email,
        //     password: this.signUpData.password,
        //   },
        //   {
        //     headers: { "Content-Type": "application/json" },
        //   }
        // );
        // console.log(response.data);
      }
    },
  },
};
</script>

<style scoped>
.btn-custom {
  background-color: #ff6d40ef;
  color: white;
  padding: 25px;
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

.btn-custom-guest {
  background-color: #125a18;
  color: white;
  font-size: 18px;
  margin-left: 28px;
}

.btn-custom-guest:hover {
  background-color: #125a189f;
  color: white;
  font-size: 18px;
  margin-left: 28px;
}

.signup-form {
  border: 1px solid #000 !important;
  padding: 30px;
  padding-top: 10px;
  border-radius: 3px;
  margin-top: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
