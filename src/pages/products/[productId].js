import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const ProductDetail = ({ product }) => {
  const router = useRouter();
  const [data, setData] = useState(product);

  return (
    <div>
      <p>{` este es el producto ${product.name}`} </p>
    </div>
  );
};

export async function getServerSideProps(context) {
  const id = context.query.id;
  console.log("id", id);
  const apiProduct = await fetch(`http://localhost:8080/product/${id}`, {
    method: "GET",
  });

  const dataProduct = await apiProduct.json();
  return {
    props: {
      dataProduct,
    },
  };
}

export default ProductDetail;
