import Navigation from "./Navigation";
import Footer from "./Footer";
const Layout = (props) => (
  <div>
    <Navigation />
    <div>{props.children}</div>
    <Footer />
  </div>
);
export default Layout;
