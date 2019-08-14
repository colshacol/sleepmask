window.__orchatectGlobals = {
  isSidebarToggleApplied: false
}

export const orchatectGlobals = (name, value) => {
  if (value) {
    window.__orchatectGlobals[name] = value
    return value
  }

  return window.__orchatectGlobals[name]
}
