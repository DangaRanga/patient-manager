import React from "react";
import { Routes, Route } from "react-router-dom";

// Component imports
import { Navbar } from "components/elements";

// Page imports
import {
  Login,
  Signup,
  Dashboard,
  DoctorDetails,
  NotFound,
  UserProfile,
} from "pages";

function RouteClient() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/doctor/:doctorid" element={<DoctorDetails />}></Route>
        <Route path="/account/:accountid" element={<UserProfile />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default RouteClient;
