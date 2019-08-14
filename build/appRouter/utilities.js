"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUrlData = exports.isOptionsObject = exports.isRouteString = exports.isUrlString = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// TODO: Clean these string functions up...
var isUrlString = function isUrlString(target) {
  return typeof target === 'string' && !target.startsWith('/');
};

exports.isUrlString = isUrlString;

var isRouteString = function isRouteString(target) {
  return typeof target === 'string' && target.startsWith('/');
};

exports.isRouteString = isRouteString;

var isOptionsObject = function isOptionsObject(target) {
  return (0, _typeof2["default"])(target) === 'object';
};

exports.isOptionsObject = isOptionsObject;

var getUrlData = function getUrlData() {
  var _ref = new PageURL(),
      url = _ref.url,
      urlParts = _ref.urlParts;

  var route = "/".concat(urlParts.pages.join('/'));
  return _objectSpread({}, urlParts, {
    route: route,
    path: url
  });
};

exports.getUrlData = getUrlData;