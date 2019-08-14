const getSidebarRoot = () => {
  return document.querySelector(".side-banner-root")
}

const isAltN = (event) => {
  return event.altKey && event.key === "n"
}

const isSidebarVisible = () => {
  const style = $sideBannerRoot.attr("style") || ""
  return !style.includes("none")
}

const toggleSidebar = () => {
  return window.$sideBannerRoot.toggle()
}

window.__orchatectGlobals = window.__orchatectGlobals || {}

export const applySidebarToggle = () => {
  if (!window.__orchatectGlobals.isSidebarTogglerApplied) {
    window.__orchatectGlobals.isSidebarTogglerApplied = true
    isSidebarVisible() && toggleSidebar()

    window.addEventListener("keydown", (event) => {
      if (isAltN(event)) {
        toggleSidebar()
      }
    })
  }
}
