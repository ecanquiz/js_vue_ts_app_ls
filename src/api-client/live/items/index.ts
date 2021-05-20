import {
  ItemsApiClientUrlsInterface,
  ItemsApiClientInterface,
  ItemsApiClientModel
} from '@/models/api-client/items'

import { config } from '@/config'

// urls for this API client
const urls: ItemsApiClientUrlsInterface = config.items.apiUrls
  
// we instantiate ItemsApiClient pointing to the URL that returns real data
const itemsApiClient: ItemsApiClientInterface = new ItemsApiClientModel(urls)
// export our instance  
export default itemsApiClient

