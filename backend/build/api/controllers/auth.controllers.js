"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthController = void 0;

var _http = _interopRequireDefault(require("http"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _bcrypt = require("bcrypt");

var _user = require("../../db/models/user.models");

var _patient = require("../../db/models/patient.models");

var _doctor = require("../../db/models/doctor.models");

var _handlers = require("../../helpers/handlers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var AuthController = {
  registerUser: function registerUser(request, response) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _request$body, firstName, lastName, email, password, role, userExists, userDetails, errorResponse, succesResponse, newPatient, newDoctor;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // Destructure request body
              _request$body = request.body, firstName = _request$body.firstName, lastName = _request$body.lastName, email = _request$body.email, password = _request$body.password, role = _request$body.role; // Validation checks
              // Check if the user already exists

              _context.prev = 1;
              _context.next = 4;
              return _user.UserModel.findOne({
                email: email
              });

            case 4:
              userExists = _context.sent;

              if (!userExists) {
                _context.next = 7;
                break;
              }

              return _context.abrupt("return", response.status(400).json({
                message: "An account with this email address already exists"
              }));

            case 7:
              // Initialize key variables
              userDetails = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                role: role,
                ip_address: request.connection.remoteAddress
              };
              errorResponse = response.status(400).json({
                err: "Error saving ".concat(role, " ").concat(err.message)
              });
              succesResponse = response.status(201).json({
                success: "".concat(role, " Successfully saved")
              });

              if (!(role == "patient")) {
                _context.next = 15;
                break;
              }

              // Attempt to save new patient to database
              newPatient = new _patient.PatientModel(userDetails);
              newPatient.save(function (err) {
                if (err) {
                  return errorResponse;
                } else {
                  return succesResponse;
                }
              });
              _context.next = 21;
              break;

            case 15:
              if (!(role === "doctor")) {
                _context.next = 20;
                break;
              }

              // Attempt to save new doctor to database
              newDoctor = _doctor.DoctorModel.create(userDetails);
              newDoctor.save(function (err) {
                if (err) {
                  return errorResponse;
                } else {
                  return succesResponse;
                }
              });
              _context.next = 21;
              break;

            case 20:
              return _context.abrupt("return", response.status(400).json({
                err: "No User role specified"
              }));

            case 21:
              _context.next = 26;
              break;

            case 23:
              _context.prev = 23;
              _context.t0 = _context["catch"](1);
              return _context.abrupt("return", response.status(500).json({
                error: _context.t0.message
              }));

            case 26:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 23]]);
    }))();
  },
  loginUser: function loginUser(request, response) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var _request$body2, email, password, user, passwordMatch, token;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              // Extract credentials from request
              _request$body2 = request.body, email = _request$body2.email, password = _request$body2.password; // Perform Validation checks
              // Check if the user exists

              _context2.prev = 1;
              _context2.next = 4;
              return _user.UserModel.findOne({
                email: email
              });

            case 4:
              user = _context2.sent;

              if (user) {
                _context2.next = 7;
                break;
              }

              return _context2.abrupt("return", response.status(400).json({
                message: "No user exists with the email entered"
              }));

            case 7:
              _context2.next = 9;
              return (0, _bcrypt.compare)(password, user.password);

            case 9:
              passwordMatch = _context2.sent;

              if (passwordMatch) {
                _context2.next = 12;
                break;
              }

              return _context2.abrupt("return", response.status(401).json({
                message: "Invalid Password"
              }));

            case 12:
              // Create the JWT
              token = _jsonwebtoken["default"].sign({
                id: user._id
              }, process.env.SECRET_KEY, {
                expiresIn: 900
              });
              return _context2.abrupt("return", response.status(200).json({
                authToken: token,
                user: {
                  id: user._id,
                  email: user.email
                }
              }));

            case 16:
              _context2.prev = 16;
              _context2.t0 = _context2["catch"](1);
              return _context2.abrupt("return", response.status(500).json({
                error: _context2.t0.message
              }));

            case 19:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 16]]);
    }))();
  },
  checkTokenValidity: function checkTokenValidity(request, response) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var token, verifiedUser, user;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              // Check for the token
              token = request.header("x-access-token");

              if (token) {
                _context3.next = 4;
                break;
              }

              return _context3.abrupt("return", response.json({
                message: "Token is missing",
                isValidToken: false
              }));

            case 4:
              // Check if the token is still valid
              verifiedUser = _jsonwebtoken["default"].verify(token, process.env.SECRET_KEY);

              if (verifiedUser) {
                _context3.next = 7;
                break;
              }

              return _context3.abrupt("return", response.json({
                message: "Token is invalid",
                isValidToken: false
              }));

            case 7:
              _context3.next = 9;
              return _user.UserModel.findById(verifiedUser.id);

            case 9:
              user = _context3.sent;

              if (user) {
                _context3.next = 12;
                break;
              }

              return _context3.abrupt("return", response.json({
                isValidToken: false
              }));

            case 12:
              return _context3.abrupt("return", response.status(200).json({
                isValidToken: true
              }));

            case 15:
              _context3.prev = 15;
              _context3.t0 = _context3["catch"](0);
              return _context3.abrupt("return", response.status(500).json({
                error: _context3.t0.message
              }));

            case 18:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 15]]);
    }))();
  }
};
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controllers.js.map