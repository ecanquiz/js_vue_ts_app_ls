import { ApiClientInterface } from '@/models/api-client/ApiClient.interface'
import itemsApiClient from './items'

// we create an instance of the main ApiClient client that wraps all the simulated clients
const apiMockClient: ApiClientInterface = {
  items: itemsApiClient
}

export default apiMockClient
