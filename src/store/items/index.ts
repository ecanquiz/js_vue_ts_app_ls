import { rootStore, dispatchModuleAction } from '../root'
import { StoreModuleNames, ItemsStateInterface } from '@/models/store'

/*
 ** @name itemsStore
 * @description 
 * Items store wrapper that returns itemsSTate and exposes a generic action<T>
 */
const itemsStore = {
  get state(): ItemsStateInterface {
    return rootStore.state.itemsState
  },
  action<T>(actionName: string, params?: T): void {
    dispatchModuleAction(StoreModuleNames.itemsState, actionName, params)
  }
}

// export the wrapper using the composition API convention (useXYZ)
export const useItemsStore = () => {
  return itemsStore
}
