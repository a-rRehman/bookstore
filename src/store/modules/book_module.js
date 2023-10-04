import ApiServices from "@/services/api";

const state = {
  BooksList: [],
  // SingleBook: [],
};

const getters = {
  getBooksList: (state) => state.BooksList,
  // getSingleBook: (state) => state.SingleBook,
};

const mutations = {
  setBooksList(state, BooksList) {
    state.BooksList = BooksList;
  },
  // setSingleBook(state, SingleBook) {
  //   state.SingleBook = SingleBook;
  // },
};

const actions = {
  async fetchAllBook({ commit }) {
    const res = await ApiServices.getAllproducts();
    commit("setBooksList", res.data);
    return res;
  },

  async fetchSingleBook({ commit }, id) {
    const res = await ApiServices.getSingleProducts(id);
    // commit("setSingleBook", res.data);
    return res;
  },

  async fetchAddWishlist({ commit }, book_id) {
    const res = await ApiServices.addWishlist(book_id);
    return res;
  },

  async fetchRemoveWishlist({ commit }, book_id) {
    const res = await ApiServices.removeWishlist(book_id);
    return res;
  },

  async fetchGetWishlist({ commit }) {
    const res = await ApiServices.wishlistProducts();
    return res;
  },

  //Cart Methods

  async fetchAddCart({ commit }, item) {
    const token = localStorage.getItem("access_token");
    const res = await ApiServices.addCart(item, token);
    return res;
  },

  async fetchDisplayCart({ commit }) {
    const token = localStorage.getItem("access_token");
    const res = await ApiServices.showCart(token);
    return res;
  },
  async fetchUpdateCart({ commit }, cartItem) {
    const token = localStorage.getItem("access_token");
    const res = await ApiServices.UpdateCart(token, cartItem);
    return res;
  },

  async fetchRemoveCart({ commit }, CartId) {
    const token = localStorage.getItem("access_token");
    const res = await ApiServices.RemoveCart(token, CartId);
    return res;
  },

  //orders status
  async fetchPlaceOrder({ commit }) {
    const token = localStorage.getItem("access_token");
    const user_id = localStorage.getItem("user_id");
    const res = await ApiServices.placeOrder(token, user_id);
    return res;
  },

  //admin side
  // adding  book

  async fetchaddingBook({ commit }, add_book) {
    const token = localStorage.getItem("access_token");
    const res = await ApiServices.AddBook(token, add_book);
    return res;
  },
};
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
