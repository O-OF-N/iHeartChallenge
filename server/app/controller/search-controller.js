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
        const result = yield SearchHelper.SearchApi(req.params.searchString);
        res.send(result);
    } catch (err) {
        console.log(err.name);
        next(err);
    }
}));

export default router;