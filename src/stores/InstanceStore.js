import { Map } from 'immutable'
import createModel from '../createModel'
import InstanceInterface from '../interfaces/InstanceInterface'
import { SET_INSTANCE, UNSET_INSTANCE } from '../actionTypes'

/**
 * Model class of one Instance.
 *
 * @class
 */
export const Model = createModel(InstanceInterface)

export default {
  getInitialState() {
    return Map({})
  },
  handlers: [
    {
      type: SET_INSTANCE,
      handler: setInstance
    },
    {
      type: UNSET_INSTANCE,
      handler: unsetInstance
    }
  ]
}

function setInstance(instances, { key, instance }) {
  const instanceModel = new Model({ key, instance })
  return instances.set(key, instanceModel)
}

function unsetInstance(instances, { key, instance }) {
  return instances.remove(key)
}

