import { ItemsApiClientInterface } from "./api-client/items";

/**
 * @Name ApiClientInterface
 * @description
 * Interface wraps all api client modules into one place for keeping code organized
 */
export interface ApiClientInterface {
  items: ItemsApiClientInterface;
}
