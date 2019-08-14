"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateRestEndpointUrl = void 0;

var generateRestEndpointUrl = function generateRestEndpointUrl(options) {
  return "https://orchatect.dreamtsoft.com/s/".concat(options.spaceId, "/api/").concat(options.bundleId, "/").concat(options.route);
};

exports.generateRestEndpointUrl = generateRestEndpointUrl;