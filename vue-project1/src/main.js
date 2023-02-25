import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
// import router from "router";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Contact from "./pages/Contact.vue";
import News from "./pages/News.vue";
import Products from "./pages/products.vue";
import SingleProducts from "./pages/SingleProduct.vue";
import Search from "./pages/Search.vue";
import Cart from "./pages/Cart.vue";

import { createStore } from "vuex";

// import App1 from "./MyApp1.vue";

// import "./assets/main.css";

//Create route
const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
  { path: "/news", component: News },
  { path: "/product", component: Products },
  { path: "/singleproducts", component: SingleProducts },
  { path: "/search", component: Search },
  { path: "/cart", component: Cart },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
});

// configure the store
// const store = createStore({
//   state() {
//     return {
//       counter: 0,
//     };
//   },

//   getters: {
//     getCounter(state) {
//       return state.counter;
//     },
//     // getNormalizedCounter(state, getter) {
//     //   // get the getCounter() return
//     //   // value from the object
//     //   if (getter.getCounter >= 50) {
//     //     return 50;
//     //   }
//     //   return getter.getCounter;
//     // },
//   },
//   mutations: {
//     incriment(state, payload) {
//       state.counter = state.counter + payload;
//     },
//   },
//   actions: {
//     increment(context) {
//       // commit 'increment' mutation
//       // with a payload
//       context.commit("increment", 10);
//     },
//   },
// });

const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  getters: {
    getCounter(state) {
      return state.counter;
    },
  },
  mutations: {
    increment(state, payload) {
      state.counter = state.counter + payload;
    },
  },
  actions: {
    increment(context) {
      // commit 'increment' mutation
      // with a payload
      context.commit("increment", 10);
    },
  },
});
const app = createApp(App);
// use the store in the App
app.use(store);
app.use(router);
app.mount("#app");
