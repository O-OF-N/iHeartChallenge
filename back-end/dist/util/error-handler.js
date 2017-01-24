'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var pattern = require("matches").pattern;

// development error handler
// will print stacktrace
var DevErrorHandle = exports.DevErrorHandle = function DevErrorHandle(err, req, res) {
    res.status(err.status || 500);
    res.render('error', {
        message: err
    });
};

// production error handler
// no stacktraces leaked to user
var ProdErrorHandle = exports.ProdErrorHandle = function ProdErrorHandle(err, req, res) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
};

var ErrorHandler = exports.ErrorHandler = pattern({
    '"InvalidStateError",req,res,params': function InvalidStateErrorReqResParams(req, res, params) {
        return res.status(500).send({
            message: 'Invalid authentication parameters sent'
        });
    },
    '"AuthenticationError",req,res,params': function AuthenticationErrorReqResParams(req, res, params) {
        console.log(req.hostname + '/?iss=' + params.iss + '&launch=' + params.launch);
        res.redirect(req.protocol + '://' + req.hostname + '/?iss=' + params.iss + '&launch=' + params.launch);
    }
});
//# sourceMappingURL=error-handler.js.map