const state = {
  Wishlist: [],
};
const getters = {
  getWishlist: (state) => state.Wishlist,
};

const mutations = {
  setWishlist(state, Wishlist) {
    state.Wishlist = Wishlist;
  },
};

const actions = {
  fetchWishlist({ commit }) {
    const Wishlist = [
      {
        book: {
          title: "Wishlist Book 1",
          author: "Author Name 1",
          coverImage:
            "https://wpbingosite.com/wordpress/bookio/wp-content/webp-express/webp-images/uploads/2018/05/Image-72-480x693.jpg.webp",
          price: 19.99,
        },
      },
      {
        book: {
          title: "Wishlist Book 2",
          author: "Author Name 2",
          coverImage:
            "https://wpbingosite.com/wordpress/bookio/wp-content/webp-express/webp-images/uploads/2018/05/Image-28-480x693.jpg.webp",
          price: 14.99,
        },
      },
    ];
    commit("setWishlist", Wishlist);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
