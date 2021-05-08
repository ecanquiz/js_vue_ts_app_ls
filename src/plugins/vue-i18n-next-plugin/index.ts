import { createI18n, LocaleMessages, VueMessageType } from 'vue-i18n'

interface LocalesDataInterface {
  messages: LocaleMessages<VueMessageType>
}

/**
 * @name: getLocalesData
 * @description: "Helper" that will load the localization JSON files
 */
const getLocalesData = (): LocalesDataInterface => {
  // use require.context to get all .json files  
  const files = (require as any).context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  // create the instance that will contain the loaded data
  const localeData: LocalesDataInterface = {
    messages: {}
  }
  // iterate over all files
  const keys: string[] = files.keys()
  keys.forEach((key: string) => {
    // extract name without extension
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const localeId = matched[1]
      // for each file, save the messages in the corresponding messages property
      localeData.messages[localeId] = files(key).messages
    }
  })

  return localeData
}

// create the data dynamically by adding the JSON files using the getLocalesData function
const data: LocalesDataInterface = getLocalesData()

export const i18n = createI18n({
  locale: 'it-IT',
  fallbackLocale: 'en-US',
  messages: data.messages  
})
