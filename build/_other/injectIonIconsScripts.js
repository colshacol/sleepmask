"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.injectIonIconsScripts = void 0;

var _injectScript = require("../injectScript");

var SCRIPT_URL = "https://unpkg.com/ionicons@4.5.10-0/dist/ionicons/ionicons.js";
var MODULE_URL = "https://unpkg.com/ionicons@4.5.10-0/dist/ionicons/ionicons.esm.js"; // <script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script>

var injectIonIconsScripts = function injectIonIconsScripts() {
  (0, _injectScript.injectScript)({
    src: "https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js",
    id: "ionIcons"
  });
  (0, _injectScript.injectScript)({
    src: SCRIPT_URL,
    id: "ionIconsScript",
    nomodule: ""
  });
  (0, _injectScript.injectScript)({
    src: MODULE_URL,
    id: "ionIconsModule",
    type: "module"
  });
};

exports.injectIonIconsScripts = injectIonIconsScripts;