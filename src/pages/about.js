import React from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import { useSelector } from "react-redux";

const About = () => {
  const { auth, user, error } = useSelector((state) => state.userReducer);
  console.log(user);
  return (
    <>
      <Head>
        <title> App - About</title>
      </Head>
      <Layout>
        <h1>About</h1>
      </Layout>
    </>
  );
};

export default About;
