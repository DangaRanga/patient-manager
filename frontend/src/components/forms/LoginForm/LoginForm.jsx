// React imports
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

// Component Imports
import { FormField } from "components/elements";

// Utility function imports
import { loginValidation } from "util/formValidation";
import { errorNotification, successNotification } from "util/notifications";

/**
 * Form component for the login form
 * @returns {React.FC} The styled Layout for the Login Form
 */
function LoginForm() {
  // Initialize required hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    successNotification("This works");
  };
  return (
    <section className="px-6 flex flex-col justify-center">
      <header>
        <h1 className="text-3xl font-bold">Welcome Back!</h1>
        <p className="text-muted text-sm w-4/5 my-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </header>
      <form>
        <FormField
          register={register("email", loginValidation.email)}
          type="email"
          label="Email Address"
        />
        <FormField
          register={register("password", loginValidation.password)}
          type="password"
          label="Password"
        />{" "}
        <div className="flex items-center my-6">
          <button
            className="text-white text-sm bg-primary-100 hover:bg-primary-200 px-8 py-3 font-medium rounded"
            onClick={handleSubmit(onSubmit)}
          >
            Login
          </button>
          <p className="mx-6 text-dark">
            Don’t have an account?{" "}
            <span className="text-primary-100 font-semibold hover:text-primary-200">
              <Link to="/signup">Sign Up!</Link>
            </span>
          </p>
        </div>
        {/* Error Handling */}
        {errors.email && errorNotification(errors.email.message)}
        {errors.password && errorNotification(errors.password.message)}
      </form>
    </section>
  );
}

export default LoginForm;
