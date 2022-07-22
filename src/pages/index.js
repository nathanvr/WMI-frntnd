import Head from "next/head";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getProducts } from "../store/reducers/products.reducer";
import ProductCard from "../components/ProductCard";
import Link from "next/link";

export default function Index() {
  const handleClick = (id) => {};

  const dispatch = useDispatch();
  const { loading, error, products } = useSelector(
    (state) => state.productsReducer
  );

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  console.log("data desde el product reducer", loading, error, products);

  if (error === true) {
    return <p>Lo sentimos, ha ocurrido un error. {error}</p>;
  }

  return (
    <>
      <Head>
        <title> App - Home</title>
      </Head>
      <Layout>
        <h1> Home </h1>
        {loading && <p>Loading...</p>}

        {products.map((product, index) => (
          <Link
            key={product._id}
            href={{ pathname: "/", query: { id: product._id } }}
          >
            <a>
              <ProductCard product={product} />
            </a>
          </Link>
        ))}
      </Layout>
    </>
  );
}
