import Navigation from "./Navigation";
import Footer from "./Footer";
import Head from "next/head";
const Layout = (props) => (
  <>
    <Head>
      <script
        type="text/javascript"
        src="https://checkout.epayco.co/checkout.js"
        async
      ></script>
    </Head>
    <div>
      <Navigation />
      <div>{props.children}</div>
      <Footer />
    </div>
  </>
);
export default Layout;
