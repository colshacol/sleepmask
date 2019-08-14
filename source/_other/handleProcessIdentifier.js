const processProxy = new Proxy(
  {},
  {
    get(target, property) {
      return {}
    }
  }
)

export const handleProcessIdentifier = () => {
  try {
    const _process = process
  } catch (error) {
    window.process = processProxy
    window.process.env = {}
    console.log("Proxies process identifier for non-supportive environment.")
  }
}
