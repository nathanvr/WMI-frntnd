import React from "react";
import { Image } from "@mantine/core";

const ProductCard = ({ product }) => {
  // console.log(product);
  return (
    <div className="pc__container">
      <h5 className="pc__container__detail__price"> $ {product.priceUnit}</h5>
      <div className="pc__container__img">
        <Image src={product.image.url} alt={product.name} />
      </div>
      <div className="pc__container__detail">
        <h2 className="pc__container__detail__title">{product.name}</h2>
        <p className="pc__container__detail__descriptio">
          {product.description}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
