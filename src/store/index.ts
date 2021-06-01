import Vue from 'vue'
import * as Vuex from 'vuex'
import state, {AppState} from './state'
import getters, {AppGetters} from './getters'
import mutations, {AppMutations} from './mutations'
import actions, {AppActions} from './actions'

Vue.use(Vuex)

// stateの取得 component上でthisを引数に入れる
const getState = (componentClass: {$store: {state: any}}): AppState => {
  return componentClass.$store.state
}

// stateの取得 component上でthisを引数に入れる
const getGetters = (componentClass: {$store: {getters: any}}): AppGetters => {
  return componentClass.$store.getters
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store

export {
  getState,
  getGetters,
  AppState,
  AppActions,
  AppGetters,
  AppMutations,
}