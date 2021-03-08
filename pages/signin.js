import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import Layout from "../components/layout";
import PaddingWrapper from "../components/paddingWrapper";
import { useAuth } from "../hooks/useAuth";

const SignIn = () => {
  const auth = useAuth();
  const { user, signIn, loginWithGoogle, error } = auth;

  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    await signIn(email, password);
    if (error === null) {
      router.push("/");
    }
  };

  useEffect(() => {
    if (user !== null) {
      router.push("/");
    }
  }, [user]);

  return (
    <Layout>
      <PaddingWrapper className="w-full flex items-center justify-center h-screen">
        <form
          onSubmit={handleLogin}
          className="flex flex-col items-center justify-center w-full lg:w-1/2 mb-96"
        >
          <h1 className="text-3xl font-bold">Login</h1>
          <input
            placeholder="email"
            type="name"
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 border-opacity-10 border-black outline-none px-5 py-1 mt-3"
            required
          />
          <input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 border-opacity-10 border-black outline-none px-5 py-1 mt-3"
            required
          />

          <button type="submit" className="text-white bg-gray-800 mt-3 px-3 py-2 w-1/2">
            Login
          </button>
        </form>
      </PaddingWrapper>
    </Layout>
  );
};

export default SignIn;
