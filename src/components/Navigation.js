import Link from "next/link";
import Register from "./Register";
import Login from "./Login";
import Panel from "../pages/panel";
import Cart from "./cart";
import { Icon } from "@iconify/react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/reducers/user.reducer";

const Navigation = () => {
  const { auth, user, error } = useSelector((state) => state.userReducer);
  const { cart } = useSelector((state) => state.shoppingReducer);
  console.log(cart);
  const totalProducts = cart
    .map((item) => item.qty)
    .reduce((prev, current) => prev + current, 0);
  // console.log("productos", totalProducts);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <ul className="navBar">
      <li className="navBar__home">
        <Link href={"/"}>Inicio</Link>
      </li>
      <li className="navBar__about">
        <Link href={"/about"}>
          <a>Nosotros</a>
        </Link>
      </li>
      {!auth ? (
        <>
          <li className="navBar__register">
            <Register />
          </li>
          <li className="navBar__login">
            <Login />
          </li>
          <li className="navBar__cart">
            {/* <Link href={"/cart"}> */}
            <Cart totalProducts={totalProducts} products={cart}></Cart>
            {/* </Link> */}
          </li>
        </>
      ) : user?.email === "test1@gmail.com" ? (
        <>
          <li className="navBar__panel">
            <Link href={"/panel"}>
              <a>Panel</a>
            </Link>
          </li>
          <li className="navBar__logout">
            <Link href="/">
              <a onClick={handleLogout}>Salir</a>
            </Link>
          </li>
        </>
      ) : (
        <>
          <li>{user?.name}</li>
          <li className="navBar__logout">
            <Link href="/">
              <a onClick={handleLogout}>Salir</a>
            </Link>
          </li>
          <li className="navBar__cart">
            <Link href={"/cart"}>
              <a>
                <Icon icon={"carbon:shopping-cart"} />
                <p>({totalProducts})</p>
              </a>
            </Link>
          </li>
        </>
      )}
    </ul>
  );
};

export default Navigation;
