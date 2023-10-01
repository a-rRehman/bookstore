import axios from "axios";
const BASE_URL = "http://10.0.10.211:3300/api";
// const BASE_URL = "https://dummyjson.com";

const ApiServices = {
  async getAllProducts() {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
  },

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
    console.log(data);
  },
};
export default ApiServices;
