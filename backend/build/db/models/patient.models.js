"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PatientSchema = exports.PatientModel = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _user = require("./user.models");

var PatientSchema = new _mongoose["default"].Schema({
  appointments: {
    type: [Object],
    "default": []
  }
}); // Declare discriminator for schema inheritance

exports.PatientSchema = PatientSchema;

var PatientModel = _user.UserModel.discriminator("Patient", PatientSchema);

exports.PatientModel = PatientModel;
//# sourceMappingURL=patient.models.js.map