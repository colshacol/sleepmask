import { getUrlData, isUrlString, isRouteString, isOptionsObject } from './utilities'

const { PageURL, gBrowserUser } = window

const observers = new Map([['route', []], ['bundle', []], ['space', []]])

const onRouteChange = (types, handler) => {
  types.forEach((type) => {
    const map = observers.get(type)
    map.push(handler)
  })
}

const getObservers = (types) => {
  const observersList = types.map((type) => {
    return observers.get(type)
  })

  return observersList.flat()
}

const invokeObservers = (types, options) => {
  const observerList = getObservers(types)
  const doneObservers = []

  observerList.forEach((observer) => {
    if (doneObservers.includes(observer)) return

    observer({ types, options })
    doneObservers.push(observer)
  })
}

// goTo

export const goTo = (options = '/') => {
  const urlData = getUrlData()
  const isUrl = isUrlString(options)
  const isRoute = isRouteString(options)
  const isOptions = isOptionsObject(options)

  if (isRoute) {
    invokeObservers(['route'], { route: options })
    gBrowserUser.navigate(`${options}`)
  }

  if (isUrl) {
    window.location.assign(options)
    return
  }

  if (isOptions) {
    // TODO: Validate options and warn / error if invalid.
    const space = options.space || urlData.space
    const bundle = options.bundle || urlData.bundle
    const route = options.route

    const isSameSpace = options.space === urlData.space
    const isSameBundle = options.bundle === urlData.bundle

    if (isSameSpace && isSameBundle) {
      const routeChangeTypes = [
        !isSameSpace && 'space',
        !isSameBundle && 'bundle',
        'route'
      ].filter(Boolean)

      invokeObservers(routeChangeTypes, options)
      gBrowserUser.navigate(`${route}`)
      return
    }

    window.location.assign(`https://orchatect.dreamtsoft.com/s/${space}/${bundle}/${route}`)
  }
}

// buildNavigationLinks

export const buildNavigationLinks = (_links) => {
  const links = _links.map((link) => {
    return {
      ...link,
      onClick() {
        typeof link.destination === 'string' && link.destination.startsWith('http')
          ? window.location.assign(link.destination)
          : goTo(link.destination)
      }
    }
  })

  return links
}

export const appRouter = {
  goTo,
  buildNavigationLinks,
  getUrlData,
  PageURL,
  gBrowserUser,
  onRouteChange
}
