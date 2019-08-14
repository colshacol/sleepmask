"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getComponentServices = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var NOT_GOOD_RESPONSE_ERROR = 'Did not receive "good" response from the component service.';
var THIRTY_SECONDS = 30000;

var ComponentServicesResponseError =
/*#__PURE__*/
function (_Error) {
  (0, _inherits2["default"])(ComponentServicesResponseError, _Error);

  function ComponentServicesResponseError(message, response) {
    var _this;

    (0, _classCallCheck2["default"])(this, ComponentServicesResponseError);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ComponentServicesResponseError).call(this, message));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "name", 'ComponentServicesResponseError');
    _this.response = response;
    return _this;
  }

  return ComponentServicesResponseError;
}((0, _wrapNativeSuper2["default"])(Error));

var getComponentServices = function getComponentServices(componentName) {
  var component = new global.Component(componentName);

  var get = function get(options) {
    return new Promise(function (resolve, reject) {
      component.ajax('/' + options.route, options.payload, {
        callback: function callback(response) {
          response && response.status === 'good' ? resolve(response.data) : reject(new ComponentServicesResponseError(NOT_GOOD_RESPONSE_ERROR, {
            response: response,
            options: options,
            componentName: componentName
          }));
        }
      });
    });
  };

  var poll = function poll(options) {
    var route = options.route || '/';
    var rate = options.rate || THIRTY_SECONDS;
    var interval = setInterval(function () {
      get(options).then(handleSuccess)["catch"](handleError);
    }, rate);

    var handleSuccess = function handleSuccess(data) {
      options.handleSuccess(data);
    };

    var handleError = function handleError(error) {
      clearInterval(interval);
      options.handleError(error);
    };

    get(options).then(handleSuccess)["catch"](handleError);
    return function () {
      return clearInterval(interval);
    };
  };

  return {
    get: get,
    poll: poll
  };
};

exports.getComponentServices = getComponentServices;