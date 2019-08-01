import {
  getUrlData,
  isUrlString,
  isRouteString,
  isOptionsObject
} from "./utilities"

const { PageURL, gBrowserUser } = window

// goTo

export const goTo = (options = "/") => {
  const urlData = getUrlData()
  const isUrl = isUrlString(options)
  const isRoute = isRouteString(options)
  const isOptions = isOptionsObject(options)

  if (isRoute) {
    gBrowserUser.navigate(`/${urlData.bundle}${options.route}`)
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

    return isSameSpace && isSameBundle
      ? gBrowserUser.navigate(`/${bundle}${route}`)
      : window.location.assign(
          `https://orchatect.dreamtsoft.com/s/${space}/${bundle}/${route}`
        )
  }
}

// buildNavigationLinks

export const buildNavigationLinks = (_links) => {
  const links = _links.map((link) => {
    return {
      ...link,
      onClick() {
        typeof link.destination === "string" &&
        link.destination.startsWith("http")
          ? window.location.assign(link.destination)
          : goTo(link.destination)
      }
    }
  })

  return links
}

export const router = {
  goTo,
  buildNavigationLinks,
  getUrlData,
  PageURL,
  gBrowserUser
}
