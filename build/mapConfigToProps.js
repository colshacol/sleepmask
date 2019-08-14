"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapConfigToProps = void 0;

var React = _interopRequireWildcard(require("react"));

var mapConfigToProps = function mapConfigToProps(Component, mapper) {
  return function (props) {
    var finalProps = mapper(props);
    return React.createElement(Component, finalProps);
  };
};

exports.mapConfigToProps = mapConfigToProps;