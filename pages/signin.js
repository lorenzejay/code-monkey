import React from "react";

const Signin = () => {
  return (
    <Layout>
      <h1> Sign In </h1>
      <form>
        <input name="email" value="" type="email" placeholder="email" />
        <input name="password" value="" type="password" placeholder="password" />
      </form>
    </Layout>
  );
};

export default Signin;
