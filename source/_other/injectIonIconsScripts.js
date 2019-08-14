import { injectScript } from "../injectScript"

const SCRIPT_URL =
  "https://unpkg.com/ionicons@4.5.10-0/dist/ionicons/ionicons.js"
const MODULE_URL =
  "https://unpkg.com/ionicons@4.5.10-0/dist/ionicons/ionicons.esm.js"

// <script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script>

export const injectIonIconsScripts = () => {
  injectScript({
    src: "https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js",
    id: "ionIcons"
  })

  injectScript({
    src: SCRIPT_URL,
    id: "ionIconsScript",
    nomodule: ""
  })

  injectScript({
    src: MODULE_URL,
    id: "ionIconsModule",
    type: "module"
  })
}
