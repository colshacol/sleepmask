"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryBucket = void 0;

var addEncodedSearch = function addEncodedSearch(bucket, options) {
  if (options.addEncodedSearch) {
    bucket.addEncodedSearch(options.addEncodedSearch);
  }
};

var securityChecks = function securityChecks(bucket, options) {
  if (typeof options.securityChecks === "boolean") {
    bucket.setSecurityChecks(options.securityChecks);
  }
};

var queryBucket = function queryBucket(name) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var bucket = new FRecord(name);
  addEncodedSearch(bucket, options);
  securityChecks(bucket, options);
  bucket.search();
  return bucket.toJSON();
};

exports.queryBucket = queryBucket;