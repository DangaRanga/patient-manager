"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _passport = _interopRequireWildcard(require("passport"));

require("dotenv/config");

var _patient = require("./api/routes/patient.routes");

var _auth = require("./api/routes/auth.routes");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Module Imports
// Route Imports
var app = (0, _express["default"])(); // Initialize Middleware

app.use((0, _cors["default"])());
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
})); // Declare constants

var MONGODB_URI = process.env.MONGODB_URI;
var PORT = process.env.PORT || 8080; // Connect to MongoDB

_mongoose["default"].connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  return console.log("Successfuly connected to MongoDB");
})["catch"](function (error) {
  return console.log("Unable to connect to mongodb");
}); // Register Routes


app.use("/api/auth", _auth.authRouter);
app.use("/api/patient", _patient.patientRouter);
app.get("/", function (req, res, next) {
  res.json({
    message: "from index api"
  });
});
app.listen(8080, function () {
  console.log("Server is running");
});
//# sourceMappingURL=index.js.map