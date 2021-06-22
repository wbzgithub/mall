import { createStore } from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'

export default createStore({
  state: {
		cartList:[]
  },
  mutations,
  actions,
  modules: {
  }
})
