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

  // Get Single products
  async getSingleProducts(id) {
    const response = await axios.get(`${BASE_URL}/showbooks/${id}`);
    const data = await response.data;
    return data;
  },

  // Add books in wishlist API:
  async addWishlist(book_id, token) {
    const response = await axios.post(
      `${BASE_URL}/wishlist/add/${book_id}`,
      {
        book_id: book_id,
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

  // Get Wishlist Books
  async wishlistProducts() {
    const response = await axios.get(
      `${BASE_URL}/wishlist/show`,
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

  // Remove Wishlist Books
  async removeWishlist(book_id) {
    const response = await axios.delete(
      `${BASE_URL}/wishlist/${book_id}`,
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

  // Add to Cart APi
  async addCart(item, token) {
    const response = await axios.post(
      `${BASE_URL}/cart/add`,
      {
        user_id: item.userid,
        book_id: item.book_id,
        quantity: item.quantity,
        price: item.price,
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

  // Show Cart APi
  async showCart(token) {
    const response = await axios.get(`${BASE_URL}/cart`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.data;
    return data;
  },

  // Update Cart APi
  async UpdateCart(token, cartItem) {
    const response = await axios.post(
      `${BASE_URL}/cart/update/${cartItem.id}`,
      {
        user_id: cartItem.user_id,
        book_id: cartItem.book_id,
        quantity: cartItem.quantity,
        price: cartItem.price,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  },

  // Remove Cart APi
  async RemoveCart(token, CartId) {
    const response = await axios.delete(
      `${BASE_URL}/cart/remove/${CartId}`,

      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(response);
    return response.data;
  },

  // Place Order Api
  async placeOrder(token, UserId) {
    const theStatus = "pending";
    const response = await axios.post(
      `${BASE_URL}/create/orders`,
      {
        user_id: UserId,
        status: theStatus,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    //console.log(response);
    return response.data;
  },

  // Show all orders user
  async showUserOrder(token, user_id) {
    const response = await axios.get(`${BASE_URL}/orders/${user_id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(response);
    return response.data;
  },

  async showAllUsersOrder(token) {
    const response = await axios.get(`${BASE_URL}/show/orders`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(response);
    return response.data;
  },

  async showAllUsers(token) {
    const response = await axios.get(`${BASE_URL}/users`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(response);
    return response.data;
  },

  async DeleteUsers(token, user_id) {
    const response = await axios.delete(`${BASE_URL}/users/${user_id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  },

  async AddBook(token, add_book) {
    const response = await axios.post(
      `${BASE_URL}/create/bookcatalog`,
      {
        title: add_book.title,
        author: add_book.author,
        cover_image_url: add_book.cover_image_url,
        price: add_book.price,
        description: add_book.description,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  },
};

// http://10.0.10.211:3300/api/users/{user_id}
export default ApiServices;
