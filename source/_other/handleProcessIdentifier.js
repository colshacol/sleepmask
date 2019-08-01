// TODO: If run in a browser, instanticate window.process
// and make it a proxy to throw a warning on access.

const processProxy = new Proxy(
  {},
  {
    get(target, property) {
      console.warn(
        `process[${property}] access attempted, but the global process variable does not exist in the browser.`
      )
    }
  }
)

const handleProcessIdentifier = () => {
  try {
    const _process = process
  } catch (error) {
    window.process = processProxy
    console.log("Proxies process identifier for non-supportive environment.")
  }
}
