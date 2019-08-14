export const injectScript = (options) => {
  const { id, ...otherOptions } = options
  const existing = document.querySelector(id)

  if (!existing) {
    const script = document.createElement("script")
    script.setAttribute("id", id)

    Object.entries(otherOptions).map(([attribute, value]) => {
      script.setAttribute(attribute, value)
    })

    document.head.appendChild(script)
  }
}
