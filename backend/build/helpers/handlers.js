"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestHandler = requestHandler;

function requestHandler(response, status, message) {
  return response.status(status).json({
    error: message
  });
}
//# sourceMappingURL=handlers.js.map