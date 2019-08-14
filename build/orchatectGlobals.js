"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.orchatectGlobals = void 0;
window.__orchatectGlobals = {
  isSidebarToggleApplied: false
};

var orchatectGlobals = function orchatectGlobals(name, value) {
  if (value) {
    window.__orchatectGlobals[name] = value;
    return value;
  }

  return window.__orchatectGlobals[name];
};

exports.orchatectGlobals = orchatectGlobals;