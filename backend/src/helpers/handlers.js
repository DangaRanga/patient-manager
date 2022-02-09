/**
 * Higher order function for easily handling requests
 * @param {Response} response
 * @param {number} status The response code for the request
 * @param {string} message
 * @returns
 */
function requestHandler(response, status, message) {
  return response.status(status).json({ error: message });
}

export { requestHandler };
