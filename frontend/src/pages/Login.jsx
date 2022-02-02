// Component Imports
import { LoginInfo } from "components/sections";
import { LoginForm } from "components/forms";

function Login() {
  return (
    <div className="container mx-auto columns-2">
      <LoginInfo />
      <LoginForm />
    </div>
  );
}

export default Login;
