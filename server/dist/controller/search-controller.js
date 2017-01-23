'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _wrap = require('../util/wrap');

var _wrap2 = _interopRequireDefault(_wrap);

var _errorHandler = require('../util/error-handler');

var ErrorHandle = _interopRequireWildcard(_errorHandler);

var _searchHelper = require('../helper/search-helper');

var SearchHelper = _interopRequireWildcard(_searchHelper);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log4js = require('log4js');
var logger = log4js.getLogger("app");

var router = _express2.default.Router();

router.get('/:searchString', (0, _wrap2.default)(regeneratorRuntime.mark(function _callee(req, res, next) {
    var result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return SearchHelper.SearchApi(req.params.searchString);

                case 3:
                    result = _context.sent;

                    res.send(result);
                    _context.next = 11;
                    break;

                case 7:
                    _context.prev = 7;
                    _context.t0 = _context['catch'](0);

                    console.log(_context.t0.name);
                    next(_context.t0);

                case 11:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, this, [[0, 7]]);
})));

exports.default = router;
//# sourceMappingURL=search-controller.js.map