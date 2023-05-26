import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import Layout from "./Layout";
import CartItems from "./CartItems";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

const Navbar = () => {
  const [showCart, setShowCart] = useState(false);
  const context = useContext(ShoppingCartContext);

  const showCartHandler = () => {
    setShowCart(true);
  };
  const cancelShowCartHandler = () => {
    setShowCart(false);
  };
  return (
    <div className="py-4 mb-3 shadow-md bg-white  ">
      <Layout clicked={cancelShowCartHandler} show={showCart} />
      <CartItems show={showCart} clicked={cancelShowCartHandler} />
      <div className="container xl:max-w-[1210px] mx-auto flex flex-row items-center justify-between">
        <div className="flex flex-row justify-start items-center gap-3 ml-3">
          <NavLink
            className={(props) =>
              props.isActive ? "text-black link" : "text-gray-500 link"
            }
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={(props) =>
              props.isActive ? "text-black link" : "text-gray-500 link"
            }
            to={"/store"}
          >
            Store
          </NavLink>
          <NavLink
            className={(props) =>
              props.isActive ? "text-black link" : "text-gray-500 link"
            }
            to={"/about"}
          >
            About
          </NavLink>
        </div>
        <div
          onClick={showCartHandler}
          className="bg-white border-[1px] border-blue-500 mr-3 p-2 rounded-full cursor-pointer group duration-300 hover:bg-blue-500 hover:text-white relative"
        >
          <FontAwesomeIcon
            onClick={showCartHandler}
            icon={faCartShopping}
            className="text-[18px] text-blue-500 duration-300 group-hover:text-white"
          />
          <span className=" absolute translate-x-[60%] translate-y-[-25%] flex flex-row justify-center items-center bg-red-500 text-white rounded-full w-5 h-5">
            {context.cartQuantity}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
