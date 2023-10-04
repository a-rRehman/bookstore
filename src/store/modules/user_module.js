import ApiServices from "@/services/api";
const state = {
  token: "",
};
const getters = {
  gettoken: (state) => state.token,
};
const mutations = {
  setToken(state, token) {
    state.token = token;
  },
};
const actions = {
  async fetchRegData({ commit }, user) {
    const res = await ApiServices.user_registeration(user);
    console.log(res.message);
  },

  async fetchLoginData({ commit }, user) {
    const res = await ApiServices.user_login(user);
    commit("setToken", res.access_token);
    return res;
  },

  async fetchLogoutData({ commit }) {
    const token = localStorage.getItem("access_token");
    const res = await ApiServices.user_logout(token);
    // const res = await ApiServices.user_logout(state.token);
    return res;
  },

  async fetchUserProfile({ commit }) {
    const token = localStorage.getItem("access_token");
    const res = await ApiServices.user_showprofile(token);
    return res;
  },

  async fetchUserSub({ commit }, email) {
    const token = localStorage.getItem("access_token");
    const res = await ApiServices.user_subscription(token, email);
    console.log(res);
    return res;
  },

  async fetchUpdatedUser({ commit }, updateduser) {
    const token = localStorage.getItem("access_token");
    const res = await ApiServices.user_editprofile(token, updateduser);
    console.log(res);
  },

  //all User own orders
  async fetchShowuserOrders({ commit }) {
    const token = localStorage.getItem("access_token");
    const user_id = localStorage.getItem("user_id");
    const res = await ApiServices.showUserOrder(token, user_id);
    return res;
  },

  //admin side working

  //all All Users orders
  async fetchShowAllUsersOrders({ commit }) {
    const token = localStorage.getItem("access_token");
    const res = await ApiServices.showAllUsersOrder(token);
    return res;
  },

  //All Users orders
  async fetchShowAllUsers({ commit }) {
    const token = localStorage.getItem("access_token");
    const res = await ApiServices.showAllUsers(token);
    return res;
  },

  //Delete User
  async fetchDeleteUsers({ commit }, userId) {
    const token = localStorage.getItem("access_token");

    const res = await ApiServices.DeleteUsers(token, userId);
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
