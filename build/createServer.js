"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createServer = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var PageComponent = require('ds.base/PageComponent');

var verifyIndexRoute = function verifyIndexRoute(serverName, routes) {
  var hasIndexRoute = routes.some(function (_ref) {
    var _ref2 = (0, _slicedToArray2["default"])(_ref, 1),
        routePath = _ref2[0];

    return routePath === '/';
  });
  if (!hasIndexRoute) throw Error("".concat(serverName, ".routes has no \"/\" route."));
};

var boundHandler = function boundHandler(routeHandler) {
  return function (attributes, variables) {
    return routeHandler(this, attributes, variables);
  };
};

var applyRoute = function applyRoute(_final, _ref3) {
  var _ref4 = (0, _slicedToArray2["default"])(_ref3, 2),
      routePath = _ref4[0],
      routeHandler = _ref4[1];

  _final[routePath] = boundHandler(routeHandler);
  return _final;
};

var createServer = function createServer(serverName) {
  var withRoutes = function withRoutes(routes) {
    verifyIndexRoute(serverName, routes);
    var serverConfig = routes.reduce(applyRoute, {
      type: serverName
    });
    return PageComponent.create(serverConfig);
  };

  return {
    withRoutes: withRoutes
  };
};

exports.createServer = createServer;