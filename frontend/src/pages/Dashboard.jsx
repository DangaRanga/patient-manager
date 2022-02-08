import { AppointmentCard } from "components/elements";

function Dashboard() {
  const doctor = {
    id: 1,
    name: "Aditya",
    profileImg: "https://via.placeholder.com/150",
  };

  const appointment = {
    date: "2/8/2022",
    time: "1:14 AM",
    status: "Completed",
    reason: "COVID-19",
  };
  return (
    <div className="px-9">
      <div>
        <h1 className="text-3xl font-bold my-3">Good Morning John!</h1>
        <p className="w-1/2 text-muted">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>
      <div className="my-8">
        <div className="flex justify-between my-3">
          <h1 className="text-2xl font-bold">Upcoming Appointments</h1>
          <a className="text-primary-100" href="/">
            View all{" "}
          </a>
        </div>
        {/* Upcoming Appointment grid */}
        <div className="grid grid-cols-2 gap-3">
          <AppointmentCard doctorName={doctor.name} {...appointment} />
          <AppointmentCard doctorName={doctor.name} {...appointment} />
          <AppointmentCard doctorName={doctor.name} {...appointment} />
          <AppointmentCard doctorName={doctor.name} {...appointment} />
        </div>
      </div>
      <div className="flex justify-between my-3">
        <h1 className="text-2xl font-bold">Past Appointments</h1>
        <a className="text-primary-100" href="/">
          View all{" "}
        </a>
      </div>

      {/* Prior Appointment grid */}
      <div className="grid  grid-cols-2 gap-3">
        <AppointmentCard doctorName={doctor.name} {...appointment} />
        <AppointmentCard doctorName={doctor.name} {...appointment} />
        <AppointmentCard doctorName={doctor.name} {...appointment} />
        <AppointmentCard doctorName={doctor.name} {...appointment} />
      </div>
    </div>
  );
}

export default Dashboard;
