import { ItemsApiClientInterface } from './items'

/**
 * @Name ApiClientInterface
 * @description
 * Interface that wraps all API client modules in one place to keep code organized
 */
export interface ApiClientInterface {
  items: ItemsApiClientInterface
}

