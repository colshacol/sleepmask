// TODO: Clean these string functions up...

export const isUrlString = (target) => {
  return typeof target === 'string' && !target.startsWith('/')
}

export const isRouteString = (target) => {
  return typeof target === 'string' && target.startsWith('/')
}

export const isOptionsObject = (target) => {
  return typeof target === 'object'
}

export const getUrlData = () => {
  const { url, urlParts } = new PageURL()
  const route = `/${urlParts.pages.join('/')}`

  return {
    ...urlParts,
    route,
    path: url
  }
}
