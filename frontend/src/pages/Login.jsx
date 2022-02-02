// Component Imports
import { LoginInfo } from "components/sections";
import { LoginForm } from "components/forms";

function Login() {
  return (
    <main className="grid grid-cols-2">
      <LoginForm />
      <LoginInfo />
    </main>
  );
}

export default Login;
