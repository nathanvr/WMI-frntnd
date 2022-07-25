import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../store/reducers/product.reducer";
import Layout from "../../components/Layout";
import ProductDetailCard from "../../components/productDetailCard";
import { Icon } from "@iconify/react";
import Head from "next/head";

const ProductDetail = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { loading, error, product, qty } = useSelector(
    (state) => state.productReducer
  );
  // const { loading, error, qty } = useSelector((state) => state.productReducer);
  // let product;

  // Perform localStorage action
  // product = useSelector((store) => store.productReducer.product);

  const { productId } = router.query;
  console.log("id", productId);
  console.log("product", product);

  useEffect(() => {
    dispatch(getProduct(productId));
  }, [dispatch]);

  if (error === true) {
    return <p>Lo sentimos, ha ocurrido un error. {error}</p>;
  }

  return (
    <>
      <Head>
        <title> App - Detail</title>
      </Head>
      <Layout>
        {loading && <p>Loading...</p>}
        <div className="pdc__productDetail">
          <ProductDetailCard product={product} />
        </div>
        <div className="pdc__itemOrder">
          <div className="pdc__itemOrder__qty">
            <p>Qty</p>
            <button onClick={() => dispatch({ type: "PRODUCT_QTY_INCREMENT" })}>
              {" "}
              <Icon icon="akar-icons:circle-plus" />
            </button>
            <p>{qty}</p>

            {qty > 0 ? (
              <button
                onClick={() => dispatch({ type: "PRODUCT_QTY_DECREMENT" })}
              >
                {" "}
                <Icon icon="akar-icons:circle-minus" />
              </button>
            ) : (
              <button disabled={true}>
                {" "}
                <Icon icon="akar-icons:circle-minus" />
              </button>
            )}
          </div>
          <div>
            <h3 className="pdc__itemOrder__amount">
              {qty * product.data.priceUnit}
            </h3>
          </div>
          <div className="pdc__itemOrder__button">
            <button>Agregar a la canasta</button>
          </div>
        </div>
      </Layout>
    </>
  );
};

// export async function getServerSideProps(params) {
//   const apiProduct = await fetch(`http://localhost:8080/product/${params.id}`, {
//     method: "GET",
//   });
//   console.log(params);

//   const dataProduct = await apiProduct.json();
//   return {
//     props: {
//       dataProduct,
//     },
//   };
// }

export default ProductDetail;
