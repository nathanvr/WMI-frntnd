import Head from "next/head";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getProducts } from "../store/reducers/products.reducer";
import ProductCard from "../components/ProductCard";
import Link from "next/link";

export default function Index() {
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
                href="/products/[productId]"
                as={`/products/${product._id}`}
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
