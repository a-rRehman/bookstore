const state = {
  boxesList: [],
};

const getters = {
  getBoxesList: (state) => state.boxesList,
};

const mutations = {
  setBoxesList(state, boxeslist) {
    state.boxesList = boxeslist;
  },
};

const actions = {
  fetchBoxes({ commit }) {
    const boxes = [
      {
        id: 1,
        title: "Book Title 01",
        src: "book5.jpg",
        descriptiom:
          "This is all the description we need about this single product",
        price: 500,
        rating: 4.5,
      },
      {
        id: 2,
        title: "Book Title 02",
        descriptiom:
          "This is all the description we need about this single product",

        src: "book1.jpg",
        price: 500,
        rating: 1,
      },

      {
        id: 3,
        title: "Book Title 03",
        descriptiom:
          "This is all the description we need about this single product",

        src: "book2.jpg",
        price: 500,
        rating: 2,
      },
      {
        id: 4,
        descriptiom:
          "This is all the description we need about this single product",

        title: "Book Title 04",
        src: "book5.jpg",
        price: 500,
        rating: 3,
      },
      {
        id: 5,
        descriptiom:
          "This is all the description we need about this single product",

        title: "Book Title 05",
        src: "book1.jpg",
        price: 500,
        rating: 4.0,
      },
      {
        id: 6,
        descriptiom:
          "This is all the description we need about this single product",

        title: "Book Title 06",
        src: "book5.jpg",
        price: 500,
        rating: 4.1,
      },
      {
        id: 7,
        descriptiom:
          "This is all the description we need about this single product",

        title: "Book Title 07",
        src: "book1.jpg",
        price: 500,
        rating: 4.0,
      },

      {
        id: 8,
        descriptiom:
          "This is all the description we need about this single product",

        title: "Book Title 08",
        src: "book2.jpg",
        price: 500,
        rating: 3.5,
      },
    ];
    //commit used for calling mutations
    commit("setBoxesList", boxes);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
