const SCRIPT_URL = 'https://unpkg.com/ionicons@4.5.10-0/dist/ionicons/ionicons.js'
const MODULE_URL = 'https://unpkg.com/ionicons@4.5.10-0/dist/ionicons/ionicons.esm.js'

export const injectIonIconsScripts = () => {
  const hasIonIconsScript = document.querySelector('#ionIconsScript')
  const hasIonIconsModule = document.querySelector('#ionIconsModule')

  if (!hasIonIconsScript) {
    const ionIconsScript = document.createElement('script')
    ionIconsModule.setAttribute('nomodule', '')
    ionIconsScript.setAttribute('id', 'ionIconsScript')
    ionIconsScript.setAttribute('src', SCRIPT_URL)
    document.body.appendChild(ionIconsScript)
  }

  if (!hasIonIconsModule) {
    const ionIconsModule = document.createElement('script')
    ionIconsModule.setAttribute('type', 'module')
    ionIconsModule.setAttribute('id', 'ionIconsModule')
    ionIconsModule.setAttribute('src', MODULE_URL)
    document.body.appendChild(ionIconsModule)
  }
}
