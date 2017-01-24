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
    var searchString, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.prev = 0;
                    searchString = req.params.searchString;

                    if (!searchString) {
                        _context.next = 8;
                        break;
                    }

                    _context.next = 5;
                    return SearchHelper.SearchApi(searchString);

                case 5:
                    _context.t0 = _context.sent;
                    _context.next = 9;
                    break;

                case 8:
                    _context.t0 = [];

                case 9:
                    result = _context.t0;

                    res.send(result);
                    _context.next = 17;
                    break;

                case 13:
                    _context.prev = 13;
                    _context.t1 = _context['catch'](0);

                    console.log(_context.t1.name);
                    next(_context.t1);

                case 17:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, this, [[0, 13]]);
})));

exports.default = router;
//# sourceMappingURL=search-controller.js.map