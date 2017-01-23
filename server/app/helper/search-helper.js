'use strict';
import axios from 'axios';
import * as Constants from '../util/constants';

export const SearchApi = function* (searchString){
    const results = yield axios.get(replaceArtistName(Constants.SEARCH_URL,searchString),{Accept:'application/json'});
    console.log(results);
    return results;
};

const replaceArtistName = (url,searchString) => url.replace('{ARTIST_NAME}',searchString);