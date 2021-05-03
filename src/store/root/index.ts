import { createStore, StoreOptions } from 'vuex'

import {
  RootStateInterface,  
  RootStoreModel
} from '@/models/store'

import { initialRootState } from './initialState'

// Import each Vuex module
import { itemsState } from '@/store/items/module'
import { localesState } from '@/store/locales/module' //(Ojo: 139 page)

// Vuex options to create our modularized store
const storeOptions: StoreOptions<RootStateInterface> = {
  state: initialRootState,

  modules: {
    itemsState,
    localesState
    // As you create additional modules, 
    // you will add them here, similar to itemsState
  }
}
  
// Vuex store root instance
export const rootStore: RootStoreModel<RootStateInterface> = <any>createStore(storeOptions)

// Private "Helper" that calls an action of a Vuex module from one place 
// so that we can keep the interpolation of strings for `${moduleName}/${actionName}`
// in a single place so that we are able to call the action with less code and strong typing
export function dispatchModuleAction<T>(moduleName: string, actionName: string, params?: T): void {
  rootStore.dispatch(`${moduleName}/${actionName}`, params)
}
