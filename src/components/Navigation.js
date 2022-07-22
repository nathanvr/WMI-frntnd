import Link from "next/link";
import Register from "./Register";
import Login from "./Login";

const Navigation = () => {
  return (
    <ul className="navBar">
      <li className="navBar__home">
        <Link href={"/"}>Home</Link>
      </li>
      <li className="navBar__about">
        <Link href={"/about"}>
          <a>About</a>
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
          <a>Cart</a>
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;
