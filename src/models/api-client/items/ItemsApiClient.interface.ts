import { ItemInterface } from '@/models/items/Item.interface'

/**
 * @Name ItemsApiClientInterface
 * @description
 * Interface for the Items API client module
 */
export interface ItemsApiClientInterface {
  fetchItems: () => Promise<ItemInterface[]>
}

