import { SET_INSTANCE, UNSET_INSTANCE } from './actionTypes'

/**
 * Action to set an instance for a key.
 *
 * @public
 * @param {Nuclear.Reactor} reactor
 * @param {string} key
 * @param {object} instance
 */
export function set(reactor, key, instance) {
  reactor.dispatch(SET_INSTANCE, { key, instance })
}

/**
 * Action to unset an instance for a key.
 *
 * @public
 * @param {Nuclear.Reactor} reactor
 * @param {string} key
 */
export function unset(reactor, key) {
  reactor.dispatch(UNSET_INSTANCE, { key })
}
