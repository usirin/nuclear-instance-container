import { createInterface } from 'simple-interface'

export default createInterface('BindingInterface', {
  key: String,
  instance: Object
})

