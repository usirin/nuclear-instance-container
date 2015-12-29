import NuclearModule from 'nuclear-module'
import { STORE_NAME } from './constants'
import InstanceStore from './stores/InstanceStore'
import * as actions from './actions'
import * as getters from './getters'

module.exports = NuclearModule({
  stores: {
    [STORE_NAME]: InstanceStore,
  },
  actions: actions,
  getters: getters
})
