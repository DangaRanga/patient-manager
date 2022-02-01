"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserSchema = exports.UserModel = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
UserSchema.pre("save", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var salt, passwordHash;
  return regeneratorRuntime.wrap(function _callee$(_context) {
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