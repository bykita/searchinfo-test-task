import { createStore } from 'vuex'
import json from '@/json/data.json';

export default createStore({
  state: {
    users: Object.freeze(json)
  },
  getters: {
    users: state => state.users
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
