import {
  ItemsApiClientUrlsInterface,
  ItemsApiClientInterface,
  ItemsApiClientModel
} from '@/models/api-client/items'

const urls: ItemsApiClientUrlsInterface = {
  fetchItems: '/ruta/a/un/endpoint/de/api/real'
}
  
// we instantiate ItemsApiClient pointing to the URL that returns real data
const itemsApiClient: ItemsApiClientInterface = new ItemsApiClientModel(urls)
  
export default itemsApiClient

