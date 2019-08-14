"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appRouter = exports.buildNavigationLinks = exports.goTo = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _utilities = require("./utilities");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _window = window,
    PageURL = _window.PageURL,
    gBrowserUser = _window.gBrowserUser;
var observers = new Map([['route', []], ['bundle', []], ['space', []]]);

var onRouteChange = function onRouteChange(types, handler) {
  types.forEach(function (type) {
    var map = observers.get(type);
    map.push(handler);
  });
};

var getObservers = function getObservers(types) {
  var observersList = types.map(function (type) {
    return observers.get(type);
  });
  return observersList.flat();
};

var invokeObservers = function invokeObservers(types, options) {
  var observerList = getObservers(types);
  var doneObservers = [];
  observerList.forEach(function (observer) {
    if (doneObservers.includes(observer)) return;
    observer({
      types: types,
      options: options
    });
    doneObservers.push(observer);
  });
}; // goTo


var goTo = function goTo() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
  var urlData = (0, _utilities.getUrlData)();
  var isUrl = (0, _utilities.isUrlString)(options);
  var isRoute = (0, _utilities.isRouteString)(options);
  var isOptions = (0, _utilities.isOptionsObject)(options);

  if (isRoute) {
    invokeObservers(['route'], {
      route: options
    });
    gBrowserUser.navigate("".concat(options));
  }

  if (isUrl) {
    window.location.assign(options);
    return;
  }

  if (isOptions) {
    // TODO: Validate options and warn / error if invalid.
    var space = options.space || urlData.space;
    var bundle = options.bundle || urlData.bundle;
    var route = options.route;
    var isSameSpace = options.space === urlData.space;
    var isSameBundle = options.bundle === urlData.bundle;

    if (isSameSpace && isSameBundle) {
      var routeChangeTypes = [!isSameSpace && 'space', !isSameBundle && 'bundle', 'route'].filter(Boolean);
      invokeObservers(routeChangeTypes, options);
      gBrowserUser.navigate("".concat(route));
      return;
    }

    window.location.assign("https://orchatect.dreamtsoft.com/s/".concat(space, "/").concat(bundle, "/").concat(route));
  }
}; // buildNavigationLinks


exports.goTo = goTo;

var buildNavigationLinks = function buildNavigationLinks(_links) {
  var links = _links.map(function (link) {
    return _objectSpread({}, link, {
      onClick: function onClick() {
        typeof link.destination === 'string' && link.destination.startsWith('http') ? window.location.assign(link.destination) : goTo(link.destination);
      }
    });
  });

  return links;
};

exports.buildNavigationLinks = buildNavigationLinks;
var appRouter = {
  goTo: goTo,
  buildNavigationLinks: buildNavigationLinks,
  getUrlData: _utilities.getUrlData,
  PageURL: PageURL,
  gBrowserUser: gBrowserUser,
  onRouteChange: onRouteChange
};
exports.appRouter = appRouter;