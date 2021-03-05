import React from "react";
import Layout from "../components/layout";

//form that has a username, email, passsord, confirm password

const Signup = () => {
  return (
    <Layout>
      <h1> Sign Up </h1>
      <form>
        <input name="username" value="" type="text" placeholder="username" />
        <input name="email" value="" type="email" placeholder="email" />
        <input name="password" value="" type="password" placeholder="password" />
        <input name="confirm password" value="" type="password" placeholder="confirm password" />
      </form>
    </Layout>
  );
};

export default Signup;
