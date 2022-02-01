"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.patientRouter = void 0;

var _express = _interopRequireDefault(require("express"));

var _passport = _interopRequireDefault(require("passport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var patientRouter = _express["default"].Router();

exports.patientRouter = patientRouter;
patientRouter.get("/profile", function (request, response, next) {
  res.json({
    message: "You made it to the secure route",
    user: req.user,
    token: req.query.secret_token
  });
});
//# sourceMappingURL=patient.routes.js.map