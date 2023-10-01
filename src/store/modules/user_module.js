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
  fetchToken({ commit }, user) {
    ApiServices.user_registeration(user);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
