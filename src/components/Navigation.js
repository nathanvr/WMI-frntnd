import Link from "next/link";
import Register from "./Register";
import Login from "./Login";
import { Icon } from "@iconify/react";

const Navigation = () => {
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
      <li className="navBar__register">
        <Register />
      </li>
      <li className="navBar__login">
        <Login />
      </li>
      <li className="navBar__cart">
        <Link href={"/cart"}>
          <a>
            <Icon icon={"carbon:shopping-cart"} />
          </a>
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;
