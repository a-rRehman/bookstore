import { createStore } from "vuex";
// import book from "./modules/book_module";
import boxes from "./modules/boxes_module";
import HotSells from "./modules/HotSells";
import user_module from "./modules/user_module";
import cart_module from "./modules/cart_module";
import wishlist_module from "./modules/wishlist_module";

export default createStore({
  state: {
    counter: 10,
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    // book,
    boxes,
    HotSells,
    user_module,
    cart_module,
    wishlist_module,
  },
});
