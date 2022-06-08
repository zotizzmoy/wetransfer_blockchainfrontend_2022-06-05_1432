import { React, useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import PasswordInput from "../components/PasswordInput";
import { signup } from "../auth/index";

const Signup = () => {
  const [values, setValues] = useState({
    email: "",
    password:"",
    error: "",
    success: false
  });


  const { email, password, success, error} = values;

  const handleChange = email => event => {
    setValues({ ...values, error: false, [email]: event.target.value });
};

const onSubmit = event => {
  event.preventDefault()
  setValues({...values, error: false})
  signup({email,password})
  .then(data=> {
    if(data.error){
      setValues({...values, error: data.error, success: false });
    }else{
      setValues({
        ...values,
        email:"",
        password:"",
        error:"",
        success: true
        
      });
    }
  })
  .catch(console.log("Error in signup"))
};


 const signupForm = () => {
  return (
    <main className="signup-container">
      <h1 className="heading-1 text-center">Create an account</h1>
      <span className="text-gray">Fill in the following details</span>
      <form className="form signup-form" >
        {/* <Input
          classname="input-field"
          label="Name"
          name="name"
          type="text"
          isRequired={true}
        /> */}
        {/* <Input
          classname="input-field"
          label="Organization"
          name="org"
          type="text"
          isRequired={true}
      /> */}
        <Input
          classname="input-field"
          label="Email"
          name="email"
          type="email"
          isRequired={true}
          onChange={handleChange("email")}
        />
        <PasswordInput classname="input-field" label="Password" name="pass"
        onChange={handleChange("password")} />
        <span className="text-gray paragraph">
          By creating this account, I am agreeing to the{" "}
          <a className="link bold" href="#">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a className="link bold" href="#">
            Terms of Use
          </a>
          .
        </span>
        <button className="btn primary-btn"  onClick={onSubmit}>
          Create account
        </button>
      </form>
      <span className="text-gray">
        Already have an account?{" "}
        <Link className="link bold" exact to ="/Login">
          Login
        </Link>{" "}
        instead
      </span>
    </main>
  );
};

export default SignupFrom;
