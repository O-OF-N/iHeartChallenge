'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SearchApi = undefined;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _artist = require('../model/artist');

var _artist2 = _interopRequireDefault(_artist);

var _constants = require('../util/constants');

var Constants = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchApi = exports.SearchApi = regeneratorRuntime.mark(function SearchApi(searchString) {
    var results;
    return regeneratorRuntime.wrap(function SearchApi$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return _axios2.default.get(replaceArtistName(Constants.SEARCH_URL, searchString), { Accept: 'application/json' });

                case 2:
                    results = _context.sent;
                    return _context.abrupt('return', results.data.artists.map(function (data) {
                        return new _artist2.default(data.artistName, replaceArtistID(Constants.ARTIST_IMAGE_URL, data.artistId));
                    }));

                case 4:
                case 'end':
                    return _context.stop();
            }
        }
    }, SearchApi, this);
});

var replaceArtistName = function replaceArtistName(url, searchString) {
    return url.replace('{ARTIST_NAME}', searchString);
};
var replaceArtistID = function replaceArtistID(url, artistId) {
    return url.replace('{ARTIST_ID}', artistId);
};
//# sourceMappingURL=search-helper.js.map