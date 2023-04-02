import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gamePerforment: {
        sort: '',
        time: ''
    }
  },
  mutations: {
    put (gameSort, gameTime, state) {
      state.gamePerforment.sort = gameSort
      state.gamePerforment.time = gameTime
    }
  }
})

