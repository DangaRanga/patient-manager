"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserSchema = exports.UserModel = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var UserSchema = new _mongoose["default"].Schema({
  firstName: {
    type: String,
    required: [true, "First Name Required"]
  },
  lastName: {
    type: String,
    required: [true, "Last Name Required"]
  },
  password: {
    type: String,
    required: [true, "Password Required"]
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    validate: {
      validator: function validator(validationStr) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(validationStr);
      },
      message: "Please enter a valid email"
    },
    required: [true, "Email required"]
  },
  ip_address: {
    type: String,
    requred: true
  },
  role: {
    type: String,
    lowercase: true,
    "enum": ["patient", "doctor"]
  }
});
exports.UserSchema = UserSchema;

var UserModel = _mongoose["default"].model("User", UserSchema); // Prehook to Hash and Salt Password before saving


exports.UserModel = UserModel;
UserSchema.pre("save", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  var salt, passwordHash;
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!this.isModified("password")) {
            _context.next = 8;
            break;
          }

          _context.next = 3;
          return _bcrypt["default"].genSalt();

        case 3:
          salt = _context.sent;
          _context.next = 6;
          return _bcrypt["default"].hash(this.password, salt);

        case 6:
          passwordHash = _context.sent;
          this.password = passwordHash;

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
})));
//# sourceMappingURL=user.models.js.map