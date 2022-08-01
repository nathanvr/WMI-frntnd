import { useState } from "react";
import { Modal, Alert, Button } from "@mantine/core";
import { Icon } from "@iconify/react";
import { Image } from "@mantine/core";

const Cart = ({ products, totalProducts }) => {
  const [open, setOpen] = useState(false);
  const totalAmount = products
    .map((item) => item.total)
    .reduce((prev, current) => prev + current, 0);

  return (
    <>
      <a onClick={() => setOpen(true)}>
        {" "}
        <Icon icon={"carbon:shopping-cart"} /> {totalProducts}
      </a>
      <Modal
        opened={open}
        onClose={() => {
          setOpen(false);
        }}
        title="Tu canasta"
        size="xs"
      >
        <div className="cartContainer">
          {products.map((product) => (
            <div key={product.product._id} className="cartContainer__product">
              <div className="cartContainer__product__title">
                <Image
                  src={product.product.image.url}
                  alt={product.product.name}
                />
                <p>
                  {product.product.name}. ${product.product.priceUnit}
                </p>
                <p>{product.qty}</p>
                <p>{product.total}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="payment">
          <Button> Pagar ${totalAmount} </Button>
        </div>
      </Modal>
    </>
  );
};

export default Cart;
