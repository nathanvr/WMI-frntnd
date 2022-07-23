import React from "react";
import Image from "next/image";

const ProductDetailCard = ({ product }) => {
  return (
    <div className="pdc__container">
      <div className="pdc__container__img">
        <Image
          src={product.data.image}
          width={500}
          height={500}
          alt={product.data.name}
        />
      </div>
      <div className="pdc__container__detail">
        <h2 className="pdc__container__detail__title">{product.data.name}</h2>
        <p className="pdc__container__detail__title">
          {product.data.description}
        </p>
        <h3 className="pdc__container__detail__title">
          {product.data.priceUnit}
        </h3>
      </div>
    </div>
  );
};

export default ProductDetailCard;
