// React imports
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// Route Imports
import RouteClient from "components/routes/RouteClient";

// Context imports
function App() {
  return (
    <Router>
      <RouteClient />
    </Router>
  );
}

export default App;
