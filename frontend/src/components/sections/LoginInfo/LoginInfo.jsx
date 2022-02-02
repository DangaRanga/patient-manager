// React imports
import React from "react";

// Asset imports
import AppointmentsGraphic from "assets/images/appointments_graphic.svg";
import Calendar from "assets/icons/calendar.svg";

// Style imports

function LoginInfo() {
  return (
    <section className="bg-slate flex flex-col items-center text-center py-3">
      <img className="h-4/6" src={AppointmentsGraphic} />
      <img className="h-12 my-1" src={Calendar} />
      <h4 className="text-primary font-semibold text-lg my-1">
        {" "}
        Never miss an appointment again!{" "}
      </h4>
      <p className="w-4/6 text-xs font-normal text-muted">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </p>
    </section>
  );
}

export default LoginInfo;
