import { useState } from "react";
import { Modal, Alert, Button } from "@mantine/core";
import { Icon } from "@iconify/react";

const Cart = ({ products, totalProducts }) => {
  const [open, setOpen] = useState(false);
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
                <h3>{product.product.name}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="payment">
          <Button> Pagar </Button>
        </div>
      </Modal>
    </>
  );
};

export default Cart;
