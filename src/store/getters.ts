import {AppState} from './state'
import {DefineGetters} from 'vuex-type-helper'

export interface AppGetters {
  // getterName: returnType
  half: number
}

const getters: DefineGetters<AppGetters, AppState> = {
  half: state => state.count / 2
}

export default getters