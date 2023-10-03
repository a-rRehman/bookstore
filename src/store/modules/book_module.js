import ApiServices from "@/services/api";

const state = {
  BooksList: [],
  SingleBook: [],
};

const getters = {
  getBooksList: (state) => state.BooksList,
  getSingleBook: (state) => state.SingleBook,
};

const mutations = {
  setBooksList(state, BooksList) {
    state.BooksList = BooksList;
  },
  setSingleBook(state, SingleBook) {
    state.SingleBook = SingleBook;
  },
};

const actions = {
  async fetchAllBook({ commit }) {
    const res = await ApiServices.getAllproducts();
    return res;
  },

  async fetchSingleBook({ commit }, id) {
    const res = await ApiServices.getSingleProducts(id);
    commit("setSingleBook", res.data);
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
