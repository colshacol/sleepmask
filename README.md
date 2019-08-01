# sleepmask

sleepmask is a set of utility functions to ease development of Orchatect / Dreamtsoft software. Many of the APIs exposed by sleepmask are wrappers around DS APIs, to make them easier to use and more intuitive.

```sh
yarn add @orchatect/sleepmask
```

_Don't use npm. Just... don't._

---

## logger

_Intended Environment: Client | Server_

Lightly enhanced version of [Signale](https://www.npmjs.com/package/signale).

```js
import { logger } from 'sleepmask'

logger.log('Howdy, all you people.')
logger.error('Oh no...')
logger.warn('Warning')
loger.debug('Foo bar baz.')
```

### TODO:

- Helpful log tracing: Attach a trace to every log to be able to find out which file and line-number the log originated at.

- Server log processing: Proxy DS's `console` to catch logs from the server and process them to log out actual data structures and such, rather than just strings.

---

## createComponentServer

_Intended Environment: Server_

---

## getComponentServices

_Intended Environment: Client_

### TODO:

- Possibly rename.

---

## queryBucket

_Intended Environment: Client | Server_

```js
import { queryBucket } from '@orchatect/sleepmask'

// Get the entire JSON of a bucket.
queryBucket('bucketName')

// Accepts options to provide to underlying DS API. (FRecord)
queryBucket('bucketName', {
  securityChecks: true,
  addEncodedSearch: {
    /* ... */
  }
})
```

---

## router

_Intended Environment: Client_

```js
import { router } from '@orchatect/sleepmask'

// When provided a compliant URL string, browser is directed to the given URL.
router.goTo('https://google.com')

// When given a compliant path string, application is routed to the current
// space with different path.
router.goTo('/path')

// When given route configuration options, routes the application between
// space and path accordingly.
router.goTo({
  path: '/path',
  space: 'Foo',
  bundle: 'bar'
})
```

---

## mapConfigToProps

_Intended Environment: Client_

```js
import { mapConfigToProps } from '@orchatect/sleepmask'

const mapper = (config) => {
  return {
    foo: config.foo
  }
}

const MyComponent = mapConfigToProps(mapper, (props) => {
  /* ... */
})
```

---

## generateRestEndpointUrl

```js
import { generateRestEndpointUrl } from '@orchatect/sleepmask'

// 'https://orchatect.dreamtsoft.com/s/<space>/api/<bundle>/<route>'
generateRestEndpointUrl({
  space: 'Foo',
  bundle: 'cool-bundle',
  route: 'getFoo'
})
```
