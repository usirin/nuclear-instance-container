import { STORE_NAME } from './constants'

/**
 * Returns an instance getter for given key.
 *
 * @public
 * @param {string} key - instance key
 * @returns {Getter}
 */
export function instance(key) {
  return [STORE_NAME, key]
}
