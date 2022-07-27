import React from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import CreateProduct from "../components/CreateProduct";
const Panel = () => {
  return (
    <>
      <Head>
        <title> App - Admin Panel</title>
      </Head>
      <Layout>
        <div className="adminpanel__container">
          <h1>Panel</h1>
          <CreateProduct />
        </div>
      </Layout>
    </>
  );
};

export default Panel;
