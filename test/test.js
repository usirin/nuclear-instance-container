import expect from 'expect'
import { Reactor } from 'nuclear-js'
import { STORE_NAME } from '../src/constants'

import InstanceContainer, { getters } from '../src'

let reactor = new Reactor

describe('BindingContainer', () => {
  afterEach(() => {
    reactor.reset()
  })

  describe('actions.set', () => {
    it('should set an instance in the container', () => {
      const container = InstanceContainer(reactor)
      const instance = {foo: 'bar'}
      container.actions.set('foo', instance)
      expect(reactor.evaluateToJS(getters.instance('foo'))).toEqual({
        key: 'foo',
        instance: {
          foo: 'bar'
        }
      })
    })
  })

  describe('actions.unset', () => {
    it('should unset an instance in the container', () => {
      const container = InstanceContainer(reactor)
      const instance = {foo: 'bar'}

      container.actions.set('foo', instance)
      expect(reactor.evaluateToJS(getters.instance('foo'))).toEqual({
        key: 'foo',
        instance: {
          foo: 'bar'
        }
      })

      container.actions.unset('foo')
      expect(reactor.evaluate(getters.instance('foo'))).toNotExist()
    })
  })

})
