import { ItemsStateInterface } from "@/models/store";

/**
 * @name RootStoreInterface
 * @description
 * Wraps together each store module interface in one place
 */

export interface RootStoreInterface {
  itemsState: ItemsStateInterface;
  // additional domain-specific module interfaces we’ll be added here in the next book chapters
}
