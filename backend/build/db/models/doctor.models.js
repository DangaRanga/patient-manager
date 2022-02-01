"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DoctorSchema = exports.DoctorModel = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _user = require("./user.models");

var DoctorSchema = new _mongoose["default"].Schema({}); // Declare discriminator for schema inheritance

exports.DoctorSchema = DoctorSchema;

var DoctorModel = _user.UserModel.discriminator("Doctor", DoctorSchema);

exports.DoctorModel = DoctorModel;
//# sourceMappingURL=doctor.models.js.map