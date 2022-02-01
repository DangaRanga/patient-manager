"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.auth = void 0;

var _jsonwebtoken = require("jsonwebtoken");

var auth = function auth(request, response, next) {
  try {
    var token = request.header("x-access-token");

    if (!token) {
      return response.status(401).json({
        msg: "No authentication token, access denied"
      });
    }

    var verified = (0, _jsonwebtoken.verify)(token, process.env.JWT_SECRET);

    if (!verified) {
      return response.status(401).json({
        msg: "Token verification failed, authorization denied"
      });
    }

    request.user = verified.id;
    next();
  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
};

exports.auth = auth;
//# sourceMappingURL=auth.js.map