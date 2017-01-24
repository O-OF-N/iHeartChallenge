'use strict';
import axios from 'axios';
import Artist from '../model/artist';
import * as Constants from '../util/constants';

export const SearchApi = function* (searchString) {
    const results = yield axios.get(replaceArtistName(Constants.SEARCH_URL, searchString), { Accept: 'application/json' });
    return (results && results.data && results.data.artists)?results.data.artists.map(data => new Artist(data.artistName, replaceArtistID(Constants.ARTIST_IMAGE_URL, data.artistId))).filter(artist=>artist!=null).slice(0,6):[];
};

const replaceArtistName = (url, searchString) => url.replace('{ARTIST_NAME}', searchString);

const replaceArtistID = (url, artistId) => url.replace('{ARTIST_ID}', artistId);