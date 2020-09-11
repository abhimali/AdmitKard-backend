const responseService = require("../services/responseService")


//common validator for portfolio endpoints
const validateInsertRequest = function (req, res, next) {
    var responseContent;
    if (!req.body ||! req.body.query||!req.body.tags|| req.body.tags.length<=0) {
        responseContent = {
            'message': 'Invalid Request'
        }
        return responseService.createResponse(res, 400, 'bad request', responseContent);
    } else {
        next();
    }
}
const validateSearchRequest = function (req, res, next) {
    var responseContent;
    if (!req.body.pattern) {
        responseContent = {
            'message': 'Invalid Request : Pattern not provided'
        }
        return responseService.createResponse(res, 400, 'bad request', responseContent);
    } else {
        next();
    }
}

module.exports = {
    validateInsertRequest,validateSearchRequest
}