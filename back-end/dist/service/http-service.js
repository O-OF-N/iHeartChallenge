"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = undefined;

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var get = exports.get = function get(url) {
  var header = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return header ? _axios2.default.get(url, header.toJS()) : _axios2.default.get(url);
};
//# sourceMappingURL=http-service.js.map