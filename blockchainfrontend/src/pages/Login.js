import { React,  } from "react";

import Input from "../components/Input";
import PasswordInput from "../components/PasswordInput";
import { Link} from "react-router-dom";


const Login = () => {
  return (
    <main className="login-container">
      <h1 className="heading-1 text-center">Login to your account</h1>
      <form className="form login-form" action="#">
        <Input
          classname="input-field"
          label="Email"
          name="email"
          type="email"
          isRequired={true}
        />
        <PasswordInput classname="input-field" label="Password" name="pass" />
        <section>
          <a className="link text-black medium" href="#">
            Forgot password?
          </a>
        </section>
        <button className="btn primary-btn" type="submit">
          Login
        </button>
      </form>
      <span className="text-gray">
        New to here?{" "}
        <Link  className="link bold" exact to="/Signup">
          Create an account
        </Link>{" "}
        instead
      </span>
    </main>
  );
};

export default Login;
