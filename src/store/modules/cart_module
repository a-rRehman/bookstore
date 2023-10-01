const state = {
  Cart: [],
};
const getters = {
  getCartItems: (state) => state.Cart,
};
const mutations = {
  setCartItems(state, Cart) {
    state.Cart = Cart;
  },
};

const actions = {
  fetchCartItems({ commit }) {
    const Cart = [
      {
        book: {
          title: "Book Title 1",
          author: "Author Name 1",
          coverImage:
            "https://wpbingosite.com/wordpress/bookio/wp-content/webp-express/webp-images/uploads/2018/05/Image-72-480x693.jpg.webp",

          price: 15.99,
        },
        quantity: 2,
      },
      {
        book: {
          title: "Book Title 2",
          author: "Author Name 2",
          coverImage:
            "https://wpbingosite.com/wordpress/bookio/wp-content/webp-express/webp-images/uploads/2018/05/Image-28-480x693.jpg.webp",

          price: 12.99,
        },
        quantity: 1,
      },
      {
        book: {
          title: "Book Title 3",
          author: "Author Name 3",
          coverImage:
            "https://wpbingosite.com/wordpress/bookio/wp-content/webp-express/webp-images/uploads/2018/05/Image-72-480x693.jpg.webp",

          price: 17.99,
        },
        quantity: 2,
      },

      {
        book: {
          title: "Book Title 4",
          author: "Author Name 4",
          coverImage:
            "https://wpbingosite.com/wordpress/bookio/wp-content/webp-express/webp-images/uploads/2018/05/Image-72-480x693.jpg.webp",

          price: 27.99,
        },
        quantity: 2,
      },
    ];
    commit("setCartItems", Cart);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
