import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    app
  },
  state: {
    test: "我是测试vuex的"
  },
  getters: {},
  mutations: {},
  actions: {}
})
export default store
