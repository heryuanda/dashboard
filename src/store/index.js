import Vue from 'vue'
import Vuex from 'vuex'
import dashboard from './dashboard'

Vue.use(Vuex)

var modules = {}

var mainStore = new Vuex.Store({
  state: dashboard.state,
  mutations: dashboard.mutations,
  actions: dashboard.actions,
  getters: dashboard.getters,
  strict: process.env.NODE_ENV !== 'production'
})

window.addStoreModule = function (modules) {
  for (var i in modules) {
    mainStore.registerModule(i, modules[i])
  }
  return mainStore
}

mainStore = window.addStoreModule(modules)

export default mainStore
