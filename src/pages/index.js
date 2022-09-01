import Head from "next/head";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getProducts } from "../store/reducers/products.reducer";
import ProductCard from "../components/ProductCard";
import Link from "next/link";
import { useRouter } from "next/router";
import { Modal } from "@mantine/core";

export default function Index() {
  const router = useRouter;
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector(
    (state) => state.productsReducer
  );

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (error === true) {
    return <p>Lo sentimos, ha ocurrido un error. {error}</p>;
  }

  return (
    <>
      <Head>
        <title> App - Home</title>
      </Head>
      <Layout>
        <div className="home__container">
          <div className="home__container__title">
            <h1> Home </h1>
          </div>
          {loading && <p>Loading...</p>}
          <div className="home__container__products">
            {products.map((product, index) => (
              <Link
                key={product._id}
                href={{
                  pathname: `/products/${product._id}`,
                  // query: { productId: product._id },
                }}
              >
                <a>
                  <ProductCard product={product} />
                </a>
              </Link>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}
