function requestHandler(response, status, message) {
  return response.status(status).json({ error: message });
}

export { requestHandler };
