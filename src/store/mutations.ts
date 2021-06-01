import {AppState} from './state'
import {DefineMutations} from 'vuex-type-helper'

export interface AppMutations {
  // mutationName: mutationPayloadType
  inc: {
    amount: number
  }
  reset: void // having no payload
}

const mutations: DefineMutations<AppMutations, AppState> = {
  inc (state, { amount }) {
    state.count += amount
  },

  reset(state) {
    state.count = 0
  }
}

export default mutations