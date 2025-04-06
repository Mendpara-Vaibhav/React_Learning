import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  // console.log(loggedInUser);

  // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="header flex justify-between bg-pink-100 shadow-lg md:bg-yellow-100 sm:bg-blue-100 lg:bg-green-100">
      <div className="logo-container">
        <img className="logo w-56" src={LOGO_URL} />
      </div>
      <div className="nav-items flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link style={{ textDecoration: "none" }} to="/">
              Home
            </Link>
          </li>
          <li className="px-4">
            <Link style={{ textDecoration: "none" }} to="/about">
              About Us
            </Link>
          </li>
          <li className="px-4">
            <Link style={{ textDecoration: "none" }} to="/contact">
              Contact Us
            </Link>
          </li>
          <li className="px-4">
            <Link style={{ textDecoration: "none" }} to="/grocery">
              Grocery
            </Link>
          </li>
          <li className="px-4 font-bold">
            <Link style={{ textDecoration: "none" }} to="/cart">
              Cart - ({cartItems.length} items)
            </Link>
          </li>
          <button
            className="login px-4"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
