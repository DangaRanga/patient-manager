import React from "react";
import PropTypes from "prop-types";

import GrayCalendar from "assets/icons/calendar_gray.svg";
import GrayClock from "assets/icons/gray_clock.svg";
import "./AppointmentCard.css";

/**
 * Functional component for an appointment
 * @param {object} doctor
 * @param {object} appointment
 * @returns {React.FC} The component for the appointment card
 */
function AppointmentCard({
  doctorName,
  doctorProfile,
  date,
  reason,
  time,
  status,
}) {
  return (
    <article className="p-6 max-w rounded-lg border border-gray">
      <div>
        <div>
          <h2 className="text-2xl font-bold">{reason}</h2>
          <h3 className="text-muted">{doctorName}</h3>
        </div>
        <div>{doctorProfile}</div>
      </div>
      <hr className="border border-gray my-4" />
      <div className="flex  items-center gap-x-3">
        <div className="flex items-center gap-x-3">
          <img src={GrayCalendar} alt="appointment_date" />
          <p> {date}</p>
        </div>
        <div className="flex items-center gap-x-3">
          <img src={GrayClock} alt="appointment_time" />
          <p>{time}</p>
        </div>
        <div className="flex items-center gap-x-3">
          <span className={`status ${status.toLowerCase()}`}></span>
          <p>{status.toUpperCase()}</p>
        </div>
      </div>
    </article>
  );
}

// Define proptypes
AppointmentCard.PropTypes = {
  doctorName: PropTypes.string,
  doctorProfile: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  time: PropTypes.string,
  status: PropTypes.string,
  reason: PropTypes.string,
};

export default AppointmentCard;
