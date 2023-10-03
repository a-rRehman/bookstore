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
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
