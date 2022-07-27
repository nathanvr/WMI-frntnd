import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../store/reducers/product.reducer";
import Layout from "../../components/Layout";
import ProductDetailCard from "../../components/productDetailCard";
import { Icon } from "@iconify/react";
import Head from "next/head";
import { Button } from "@mantine/core";

const ProductDetail = ({ product }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  // const { loading, error, product, qty } = useSelector(
  //   (state) => state.productReducer
  // );
  // const { loading, error, qty } = useSelector((state) => state.productReducer);
  // let product;

  // Perform localStorage action
  // product = useSelector((store) => store.productReducer.product);

  const { productId } = router.query;
  // console.log("id", productId);
  // console.log("product", product);

  // useEffect(() => {
  //   dispatch(getProduct(productId));
  // }, []);

  // if (error === true) {
  //   return <p>Lo sentimos, ha ocurrido un error. {error}</p>;
  // }
  const [qty, setQty] = useState(1);

  return (
    <>
      <Head>
        <title> App - Detail</title>
      </Head>
      <Layout>
        <div className="pdc">
          <div className="pdc__productDetail">
            <ProductDetailCard product={product} />
          </div>
          <div className="pdc__itemOrder">
            <div className="pdc__itemOrder__qty">
              <button onClick={() => setQty(qty + 1)}>
                {" "}
                <Icon icon="akar-icons:circle-plus" />
              </button>
              <p>{qty}</p>

              {qty > 0 ? (
                <button onClick={() => setQty(qty - 1)}>
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
            <div className="pdc__itemOrder__amount">
              <h3>$ {qty * product.data.priceUnit}</h3>
            </div>
            {qty > 0 ? (
              <div className="pdc__itemOrder__button">
                <button>Agregar a la canasta</button>
              </div>
            ) : (
              <div className="pdc__itemOrder__button">
                <button disabled={true}>Agregar a la canasta</button>
              </div>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const apiProduct = await fetch(
    `http://localhost:8080/product/${params.productId}`,
    {
      method: "GET",
    }
  );

  const product = await apiProduct.json();
  return {
    props: {
      product,
    },
  };
}

export default ProductDetail;
