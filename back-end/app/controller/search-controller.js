'use strict';

import express from 'express';
import co from '../util/wrap';
import * as ErrorHandle from '../util/error-handler';
import * as SearchHelper from '../helper/search-helper';
var log4js = require('log4js');
var logger = log4js.getLogger("app");

const router = express.Router();

router.get('/:searchString', co(function* (req, res, next) {
    try {
        const {searchString} = req.params;
        const result = searchString?yield SearchHelper.SearchApi(searchString):[];
        res.send(result);
    } catch (err) {
        next(err);
    }
}));

export default router;