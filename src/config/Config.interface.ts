import {
  ItemsApiClientUrlsInterface
} from '@/models/api-client/items'

/**
 * @Name ConfigInterface
 * @description
 *
 */
export interface ConfigInterface {
  global: {
    // ... cosas que no son específicas a un dominio de la aplicación en concreto
  }
  httpClient: {
    tokenKey: string
  }
  apiClient: {
    type: string
  }
  items: {
    apiUrls: ItemsApiClientUrlsInterface
  }
}

