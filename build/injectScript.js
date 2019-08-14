"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.injectScript = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var injectScript = function injectScript(options) {
  var id = options.id,
      otherOptions = (0, _objectWithoutProperties2["default"])(options, ["id"]);
  var existing = document.querySelector(id);

  if (!existing) {
    var script = document.createElement("script");
    script.setAttribute("id", id);
    Object.entries(otherOptions).map(function (_ref) {
      var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
          attribute = _ref2[0],
          value = _ref2[1];

      script.setAttribute(attribute, value);
    });
    document.head.appendChild(script);
  }
};

exports.injectScript = injectScript;