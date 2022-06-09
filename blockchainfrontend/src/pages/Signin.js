import React, { useState } from "react";
import Input from "../components/Input";
import PasswordInput from "../components/PasswordInput";
import { Link, Redirect } from "react-router-dom";
import { signin, authenticate, isAuthenticated } from "../auth/index";
import Base from "../core/Base";


const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    didRedirect: false
  });

  const { email, password, error, loading, didRedirect } = values;
  const { user } = isAuthenticated();

  const handleChange = email => event => {
    setValues({ ...values, error: false, [email]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password })
      .then(data => {
        if (data.errors) {
          setValues({ ...values, error: data.errors, loading: false });
        } else {
          authenticate(data, () => {
            setValues({
              ...values,
              didRedirect: true
            });
          });
        }
      })
      .catch(console.log("signin request failed"));
  };

  const performRedirect = () => {
    if (didRedirect) {
      if (user ) {
        return <p>redirect to admin</p>;
      } else {
        return <p>redirect to user dashboard</p>;
      }
    }
    if (isAuthenticated()) {
      return <Redirect to="/" />;
    }
  };

  const loadingMessage = () => {
    return (
      loading && (
        <div className="alert alert-info">
          <h2>Loading...</h2>
        </div>
      )
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };

  const signInForm = () => {
    return (
        <main className="login-container">
        <h1 className="heading-1 text-center">Login to your account</h1>
        <form className="form login-form" >
        
          <Input
            classname="input-field"
            label="Email"
            value={email}
            type="email"
            isRequired={true}
            onChange={handleChange("email")}
          />
          <PasswordInput
            classname="input-field"
            label="Password"
            onChange={handleChange("password")}
            value={password}
          />
          <section>
            <a className="link text-black medium" href="#">
              Forgot password?
            </a>
          </section>
          <button onClick={onSubmit} className="btn primary-btn">
            Login
          </button>
        </form>
        <span className="text-gray">
          New to here?{" "}
          <Link className="link bold" exact to="/Signup">
            Create an account
          </Link>{" "}
          instead
        </span>
      </main>
    );
  };

  return (
    <Base title="Sign In page" description="A page for user to sign in!">
      {loadingMessage()}
      {errorMessage()}
      {signInForm()}
      {performRedirect()}
      <p className="text-white text-center">{JSON.stringify(values)}</p>
    </Base>
  );
};

export default Signin;
