"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleProcessIdentifier = void 0;
var processProxy = new Proxy({}, {
  get: function get(target, property) {
    return {};
  }
});

var handleProcessIdentifier = function handleProcessIdentifier() {
  try {
    var _process = process;
  } catch (error) {
    window.process = processProxy;
    window.process.env = {};
    console.log("Proxies process identifier for non-supportive environment.");
  }
};

exports.handleProcessIdentifier = handleProcessIdentifier;