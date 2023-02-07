"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transporter = void 0;

var _nodemailer = _interopRequireDefault(require("nodemailer"));

// Initialize Nodemailer Transporter
var transporter = _nodemailer["default"].createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
}); // Verify transporter


exports.transporter = transporter;
transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});
//# sourceMappingURL=mail.js.map