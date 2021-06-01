import {AppState} from './state'
import {AppMutations} from './mutations'
import {AppGetters} from './getters'
import {DefineActions} from 'vuex-type-helper'

export interface AppActions {
  // actionName: actionPayloadType
  incAsync: {
    amount: number
    delay: number
  }
  reset: void // having no payload
}


const actions: DefineActions<AppActions, AppState, AppMutations, AppGetters> = {
  incAsync ({ commit }, payload) {
    setTimeout(() => {
      commit('inc', payload)
    }, payload.delay)
  },

  reset({ commit }) {
    commit('reset')
  }
}

export default actions