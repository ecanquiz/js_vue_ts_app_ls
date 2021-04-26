import {
  ItemsStateInterface
} from '../items/ItemsState.interface'

/**
 * @name RootStoreInterface
 * @description
 * Wrap the interfaces of the store modules in one place
 */
export interface RootStoreInterface {
  itemsState: ItemsStateInterface
  // Additional domain-specific module interfaces will be added here in subsequent chapters
}

