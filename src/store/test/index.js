import Vuex from 'vuex'
export default {
  state: {
    count: 0
  },
  mutations: {
    countAdd(state) {
      state.count++
    }
  },
  action: {
  }
}
