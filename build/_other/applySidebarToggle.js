"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applySidebarToggle = void 0;

var getSidebarRoot = function getSidebarRoot() {
  return document.querySelector(".side-banner-root");
};

var isAltN = function isAltN(event) {
  return event.altKey && event.key === "n";
};

var isSidebarVisible = function isSidebarVisible() {
  var style = $sideBannerRoot.attr("style") || "";
  return !style.includes("none");
};

var toggleSidebar = function toggleSidebar() {
  return window.$sideBannerRoot.toggle();
};

window.__orchatectGlobals = window.__orchatectGlobals || {};

var applySidebarToggle = function applySidebarToggle() {
  if (!window.__orchatectGlobals.isSidebarTogglerApplied) {
    window.__orchatectGlobals.isSidebarTogglerApplied = true;
    isSidebarVisible() && toggleSidebar();
    window.addEventListener("keydown", function (event) {
      if (isAltN(event)) {
        toggleSidebar();
      }
    });
  }
};

exports.applySidebarToggle = applySidebarToggle;