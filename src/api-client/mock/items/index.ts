import {
  ItemsApiClientUrlsInterface,
  ItemsApiClientInterface,
  ItemsApiClientModel
} from '@/models/api-client/items'

const urls: ItemsApiClientUrlsInterface = {
  fetchItems: '/static/data/items.json'
}
  
// we instantiate ItemsApiClient pointing to the URL that returns static data
const itemsApiClient: ItemsApiClientInterface = new ItemsApiClientModel(urls)
  
export default itemsApiClient

