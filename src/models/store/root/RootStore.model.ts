import Vuex from 'vuex'
import { RootStoreInterface } from './RootStore.interface'

/**
 * @name RootStoreModel
 * @description
 * Extend the Vuex store declaration with RootStoreInterface
 */
export class RootStoreModel<S> extends Vuex.Store<RootStoreInterface> {
}

