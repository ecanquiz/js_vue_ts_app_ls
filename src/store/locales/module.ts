import { Module, MutationTree, ActionTree, GetterTree } from 'vuex'

import {
  MutationType,
  RootStateInterface,
  LocalesStateInterface
} from '@/models/store'

import {
  initialLocalesState
} from './initialState'

import { i18n } from '@/plugins/vue-i18n-next-plugin'

// Vuex Mutations for localizations
export const mutations: MutationTree<LocalesStateInterface> = {
  selectLocale(state: LocalesStateInterface, localeId: string) {
    // change to true only the selected attribute of the selected model
    state.availableLocales.forEach(localeInfo => {
      localeInfo.selected = localeInfo.locale === localeId
      if (localeInfo.selected) {
	      // change selected localization on i18n
	      //i18n.global.locale.value = localeInfo.locale
	      i18n.global.locale       = localeInfo.locale as any // Had to do this with vue-i18n@9.0.0-beta.8
      }
    })
  }
}

// Vuex Actions for localizations
export const actions: ActionTree<LocalesStateInterface, RootStateInterface> = {
  selectLocale({ commit }, localeId: string) {
    commit( MutationType.locales.selectLocale, localeId)
  }
}

export const getters: GetterTree<LocalesStateInterface, RootStateInterface> = {}

const namespaced: boolean = true
const state: LocalesStateInterface = initialLocalesState

export const localesState: Module<LocalesStateInterface, RootStateInterface> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
}

