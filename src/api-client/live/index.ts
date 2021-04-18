import { ApiClientInterface } from '@/models/api-client/ApiClient.interface'
import itemsApiClient from './items'

// create an ApiClient instance that wraps the real clients
const apiLiveClient: ApiClientInterface = {
  items: itemsApiClient
}

export default apiLiveClient
