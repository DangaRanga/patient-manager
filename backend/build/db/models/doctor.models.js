"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DoctorSchema = exports.DoctorModel = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _user = require("./user.models");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DoctorSchema = new _mongoose["default"].Schema({}); // Declare discriminator for schema inheritance

exports.DoctorSchema = DoctorSchema;

var DoctorModel = _user.UserModel.discriminator("Doctor", DoctorSchema);

exports.DoctorModel = DoctorModel;
//# sourceMappingURL=doctor.models.js.map