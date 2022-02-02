// React imports
import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// Component Imports
import { FormField } from "components/elements";

// Utility function imports
import { successNotification } from "util/notifications";
import { registrationSchema } from "util/formValidation";

function RegistrationForm() {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(registrationSchema),
  });

  const onSubmit = () => {
    successNotification("This works");
  };

  return (
    <section className="p-6">
      <header>
        <h1 className="text-3xl font-bold">Welcome to Pulse Appointments!</h1>
        <p className="text-muted text-sm w-4/5 my-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </header>
      <form>
        <FormField
          register={register("firstName")}
          type="text"
          label="First Name"
        />
        <FormField
          register={register("lastName")}
          type="text"
          label="Last Name"
        />
        <FormField
          register={register("email")}
          type="email"
          label="Email Address"
        />
        <FormField
          register={register("password")}
          type="password"
          label="Password"
        />
        <FormField
          register={register("passwordConfirm")}
          type="password"
          label="Confirm Password"
        />
        <div className="flex items-center my-6">
          <button
            className="text-white text-sm bg-primary-100 hover:bg-primary-200 px-8 py-3 font-medium rounded"
            onClick={handleSubmit(onSubmit)}
          >
            Create a free account
          </button>
          <p className="mx-6 text-dark">
            Already have an account?{" "}
            <span className="text-primary-100 font-semibold hover:text-primary-200">
              <Link to="/login">Log in!</Link>
            </span>
          </p>
        </div>
      </form>
    </section>
  );
}

export default RegistrationForm;
