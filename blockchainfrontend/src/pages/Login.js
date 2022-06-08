import { React, useState,  } from "react";

import Input from "../components/Input";
import PasswordInput from "../components/PasswordInput";
import { Link} from "react-router-dom";
import {signin, authenticate,isAuthenticated} from "../auth/index"
const Signin = () => {

  const [values,setValues] = useState({
    email: "",
    password:"",
    error:"",
    loading: false,
    didRedirect: false
  });

   const {email, password, error, loading, didRedirect} = values;
   const {user} = isAuthenticated(); 

   const handleChange = email => event => {
    setValues({ ...values, error: false, [email]: event.target.value });
};
const onSubmit = event => {
  event.preventDefault();
  setValues({...values, error: false, loading: true})
  signin({email,password})
    .then(data => {
      if (data.error) {
        setValues({...values, error: data.error, loading: false})
      } else{
        authenticate(data, () => {
           setValues({
             ...values,
             didRedirect: true
           })
        })
      }
    })
    .catch(console.log("sigin request failed!"))
}
}

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
          onChange value={handleChange("email")}
          
        />
        <PasswordInput classname="input-field" label="Password" name="pass" />
        <section>
          <a className="link text-black medium" href="#">
            Forgot password?
          </a>
        </section>
        <button onClick={onSubmit} className="btn primary-btn" >
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
