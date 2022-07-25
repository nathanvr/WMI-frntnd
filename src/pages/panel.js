import React from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import { useSelector } from "react-redux";
import Link from "next/link";
import CreateProduct from "../components/CreateProduct";
const Panel = () => {
  return (
    <>
      <Head>
        <title> App - About</title>
      </Head>
      <Layout>
        <h1>Panel</h1>
        <CreateProduct />
      </Layout>
    </>
  );
};

export default Panel;
