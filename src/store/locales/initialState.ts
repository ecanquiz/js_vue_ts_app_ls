import { LocalesStateInterface } from '@/models/store'

/**
 * @name initialLocalesState
 * @description
 * The instance of the state of Locales
 */
export const initialLocalesState: LocalesStateInterface = {
  availableLocales: [
    {
      name:'USA',
      locale: 'en-US',
      flag:'us',
      selected:false
    },{
      name: 'Italy',
      locale: 'it-IT',
      flag: 'it',
      selected: true // This is selected by default
    },{
      name: 'Spain',
      locale: 'es-ES',
      flag: 'es',
      selected: false
    },{
      name: 'France',
      locale: 'fr-FR',
      flag: 'fr',
      selected: false
    }
  ]
}

