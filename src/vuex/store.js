// import Vue from "vue";
import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    products: [],
    cart: [],
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
    SET_CART: (state, product) => {
      state.cart.push(product);
    },

    REMOVE_FROM_CART: (state, index) => {
      state.cart.splice(index, 1);
    },
  },
  actions: {
    GET_PRODUCTS_FROM_API({ commit }) {
      return axios("http://localhost:3000/services", {
        method: "GET",
      })
        .then((services) => {
          commit("SET_PRODUCTS_TO_STATE", services.data);
          return services;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },

    ADD_TO_CART({ commit }, product) {
      commit("SET_CART", product);
    },

    DELETE_FROM_CART({ commit }, index) {
      commit("REMOVE_FROM_CART", index);
    },
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    CART(state) {
      return state.cart;
    },
  },
});

export default store;
