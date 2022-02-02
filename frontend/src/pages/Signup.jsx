// Component Imports
import { RegistrationInfo } from "components/sections";
import { RegistrationForm } from "components/forms";

function Signup() {
  return (
    <main className="grid grid-cols-2">
      <RegistrationInfo />
      <RegistrationForm />
    </main>
  );
}

export default Signup;
