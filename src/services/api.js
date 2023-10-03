import axios from "axios";
const BASE_URL = "http://10.0.10.211:3300/api";

const ApiServices = {
  // User Registeration function
  async user_registeration(userData) {
    const response = await axios.post(
      `${BASE_URL}/register`,
      {
        name: userData.username,
        email: userData.email,
        password: userData.password,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await response.data;
    return data;
  },

  //User login function
  async user_login(userData) {
    const response = await axios.post(
      `${BASE_URL}/login`,
      {
        email: userData.email,
        password: userData.password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.data;
    return data;
  },
  async user_logout(token) {
    const response = await axios.post(
      `${BASE_URL}/logout`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.data;
    return data;
  },
  //Getting user profile
  async user_showprofile(token) {
    const response = await axios.get(`${BASE_URL}/user/profile`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.data;
    // console.log(data);
    return data;
  },

  //user profile edit
  async user_editprofile(token, updateduser) {
    const response = await axios.put(
      `${BASE_URL}/updateUser`,
      {
        name: updateduser.name,
        email: updateduser.email,
        password: updateduser.password,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },
  //subscription user
  async user_subscription(token, email) {
    const response = await axios.post(
      `${BASE_URL}/subscribe`,
      {
        email: email,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.data;
    return data;
  },

  // get all products
  async getAllproducts() {
    const response = await axios.get(`${BASE_URL}/showbooks`);
    const data = await response.data;
    return data;
  },

  // get single products
  async getSingleProducts(id) {
    const response = await axios.get(`${BASE_URL}/showbooks/${id}`);
    const data = await response.data;
    return data;
  },
};

export default ApiServices;
