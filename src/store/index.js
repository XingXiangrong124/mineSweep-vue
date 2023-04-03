import { createStore } from 'vuex'

export default createStore({
  state: {
    gamePerforment: {
      sort: '',
      time: ''
  }
  },
  getters: {
  },
  mutations: {
    put (state, {gameSort, gameTime}) {
      state.gamePerforment.sort = gameSort
      state.gamePerforment.time = gameTime
    }
  },
  actions: {
  },
  modules: {
  }
})
