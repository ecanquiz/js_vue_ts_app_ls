import { rootStore, dispatchModuleAction } from '../root'
import { MutationType, StoreModuleNames, LocalesStateInterface } from '@/models/store'

// The locale wrapper that returns localesState and exposes a generic action <T> method
const localesStore = {
  get state(): LocalesStateInterface {
    return rootStore.state.localesState
  },
  action<T>(actionName: string, params?: T): void {
    dispatchModuleAction(StoreModuleNames.localesState, actionName, params)
  }
}

// export our wrapper using the composition API convention (eg useXYZ)
export const useLocalesStore = () => {
  return localesStore
}
