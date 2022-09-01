import { useState } from "react";
import { Modal, Alert, Button } from "@mantine/core";
import { Icon } from "@iconify/react";
import { Image } from "@mantine/core";
// import Payment from "./Payment";
import Head from "next/head";
let handler;

if (typeof window !== "undefined") {
  // Perform localStorage action
  handler = window.ePayco.checkout.configure({
    key: "86e256de1acfad398d02d603bc4307bc",
    test: true,
  });
}

const Cart = ({ products, totalProducts }) => {
  const [open, setOpen] = useState(false);
  const totalAmount = products
    .map((item) => item.total)
    .reduce((prev, current) => prev + current, 0);

  function handleClick(e) {
    e.preventDefault();
    console.log("handleclick desde el payment", window);

    handler.open({
      //Parametros compra (obligatorio)
      name: "Sopa",
      description: "WMI CORP",
      invoice: "000001",
      currency: "cop",
      amount: totalAmount,
      tax_base: "0",
      tax: "0",
      country: "co",
      lang: "es",

      //Onpage="false" - Standard="true"
      external: "false",

      //Atributos opcionales
      //   extra1: startDate, //fecha inicio
      //   extra2: finishDate, //fecha fin
      //   extra3: totalNigths, //total de noches
      //   extra4: bookingSiteData.data._id, //id del bookingsite

      // confirmation: 'http://secure2.payco.co/prueba_curl.php',
      response: `localhost`,

      //Atributos cliente
      name_billing: "",
      address_billing: "",
      type_doc_billing: "cc",
      mobilephone_billing: "3050000000",
      number_doc_billing: "100000000",

      //atributo deshabilitación metodo de pago
      methodsDisable: ["PSE", "SP"],
    });
  }
  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://checkout.epayco.co/checkout.js"
          async
          defer
        ></script>
      </Head>
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
              <Image
                radius="md"
                className="cartContainer__product__img"
                src={product.product.image.url}
                alt={product.product.name}
              />
              <div className="cartContainer__product__info">
                <p className="cartContainer__product__info__description">
                  {product.product.name}. ${product.product.priceUnit}
                </p>
                <p className="cartContainer__product__info__qty">
                  Cantidad: {product.qty}
                </p>
                <p className="cartContainer__product__info__subtotal">
                  Subtotal: ${product.total}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="payment">
          <Button type="submit" onClick={(e) => handleClick(e)}>
            {" "}
            Pagar ${totalAmount}{" "}
          </Button>
          {/* <Payment></Payment> */}
        </div>
      </Modal>
    </>
  );
};

export default Cart;
