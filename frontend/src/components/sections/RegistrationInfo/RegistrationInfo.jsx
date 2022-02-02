import React from "react";

// Asset imports
import EasyAppointmentsInfo from "assets/images/easy_appointments.svg";
import Medication from "assets/icons/medication_black_24dp 1.svg";

function RegistrationInfo() {
  return (
    <section className="bg-slate flex flex-col items-center text-center py-3">
      <img className="h-4/6" src={EasyAppointmentsInfo} />
      <img className="h-12 my-1" src={Medication} />
      <h4 className="text-primary font-semibold text-lg my-1">
        {" "}
        Easily Request Appointments!{" "}
      </h4>
      <p className="w-4/6 text-xs font-normal text-muted">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </p>
    </section>
  );
}

export default RegistrationInfo;
