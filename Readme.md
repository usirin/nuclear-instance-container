# nuclear-instance-container

A `nuclear-js` module to save arbitrary objects as instances. To be used as a `singleton registry` for a `nuclear-js` app.

### What?

This module is designed to be used in conjuction with other modules to compose bigger modules.
Highly inspired by the `ServiceContainer` from `laravel/framework`.

Imagine you want to bind some singletons in your app and want to be able to use it wherever you want.
And also you want this to be a part of your `nuclear-js` app.

```js
// your/app/app.js
const reactor = new Nuclear.Reactor
const instanceContainer = InstanceContainer(reactor)

// let's assume we have a config instance we would like to use as a singleton
// in our app.
const config = {
  appName: 'Foo',
  version: '123'
}

// you can bind an instance(object) to the container by simply calling exported
// `set` action.
instancecontainer.actions.set('config', config)

// later on you can read this 'config' value, using exported `instance` getter.
console.log(reactor.evaluate(getters.instance('config'))) // => Immutable(config)

// you can change an instance at any point of time.
const newConfig = {
  appName: 'FooTestingApp'
}
instanceContainer.actions.set('config', newConfig)
console.log(reactor.evaluate(getters.instance('config'))) // => Immutable(newConfig)

// you can unset an instance at any point of time.
instanceContainer.actions.unset('config')
console.log(reactor.evaluate(getters.instance('config'))) // => undefined
```

# install

```
npm install nuclear-instance-container
```

# licence

MIT
