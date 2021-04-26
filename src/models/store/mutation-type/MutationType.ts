// group our constants in a namespace
import { ItemsMutationType } from '../items/ItemsMutationType'

export namespace MutationType {
  export const items = ItemsMutationType
  // As you add new state modules,
  // add additional exports here following the same convention
}
