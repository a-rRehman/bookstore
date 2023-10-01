const state = {
  HotSells: [],
};
const getters = {
  getHotSells: (state) => state.HotSells,
};
const actions = {
  fetchHotSells({ commit }) {
    const cards = [
      {
        image:
          "https://wpbingosite.com/wordpress/bookio/wp-content/webp-express/webp-images/uploads/2018/05/Image-2-480x693.jpg.webp",
        title: "Book 01",
        price: "$100",
        author: "alpha",
        wishlist: true,
      },
      {
        image:
          "https://wpbingosite.com/wordpress/bookio/wp-content/webp-express/webp-images/uploads/2018/05/Image-26-480x693.jpg.webp",
        title: "Book 02",
        price: "$200",
        author: "beta",
        wishlist: true,
      },
      {
        image:
          "https://wpbingosite.com/wordpress/bookio/wp-content/webp-express/webp-images/uploads/2018/05/Image-28-480x693.jpg.webp",
        title: "Book 03",
        price: "$250",
        author: "delta",
        wishlist: true,
      },
      {
        image:
          "https://wpbingosite.com/wordpress/bookio/wp-content/webp-express/webp-images/uploads/2018/05/Image-72-480x693.jpg.webp",
        title: "Book 04",
        price: "$300",
        author: "xeta",
        wishlist: true,
      },
    ];
    commit("setHotSells", cards);
  },
};
const mutations = {
  setHotSells(state, HotSells) {
    state.HotSells = HotSells;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
