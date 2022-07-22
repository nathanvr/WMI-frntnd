import React from "react";
import Image from "next/image";

const ProductCard = ({ product }) => {
  return (
    <div className="pc__container">
      <div className="pc__container__img">
        <Image
          src={product.image}
          width={200}
          height={200}
          alt={product.name}
        />
      </div>
      <div className="pc__container__detail">
        <h2 className="pc__container__detail__title">{product.name}</h2>
        <p className="pc__container__detail__title">{product.description}</p>
        <h3 className="pc__container__detail__title">{product.priceUnit}</h3>
      </div>
    </div>
  );
};

export default ProductCard;
