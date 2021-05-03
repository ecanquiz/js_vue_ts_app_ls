export interface LocaleInfoInterface {
  name: string // The readable name of the location, eg USA
  locale: string // The code, e.g. en-US
  flag: string // The 2-character code used to form the icon name
  selected: boolean // If the location is currently selected
}
