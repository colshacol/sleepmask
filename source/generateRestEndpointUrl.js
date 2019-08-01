export const generateRestEndpointUrl = (options) => {
  return `https://orchatect.dreamtsoft.com/s/${options.spaceId}/api/${options.bundleId}/${
    options.route
  }`
}
