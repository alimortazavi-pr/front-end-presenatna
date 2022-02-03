import { createStore } from "vuex";

//Import Modules
import authModule from "./modules/auth";
import layoutModule from "./modules/layout";
import productModule from "./modules/product";

const store = createStore({
  modules: {
    auth: authModule,
    layout: layoutModule,
    product: productModule,
  },
});

export default store;
