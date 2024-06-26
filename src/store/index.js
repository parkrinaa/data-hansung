import Vue from 'vue'
import Vuex from 'vuex'

import product from './product/index';
import cart from './cart/index';
import blog from './blog/index';
import insta from './insta/index';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    product,
    cart,
    blog,
    insta
  },
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
