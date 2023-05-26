import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import CartItem from "./CartItem";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import items from "./../data/items.json";

const CartItems = ({ show, clicked }) => {
  const context = useContext(ShoppingCartContext);
  return (
    show && (
      <div className="scale-up-tr bg-white z-20 absolute top-0 right-0 w-[350px] min-h-full p-4">
        <div className="flex flex-row justify-between items-center mb-5">
          <p className="font-bold text-[20px]">Cart</p>
          <FontAwesomeIcon
            icon={faXmark}
            className="text-[25px] cursor-pointer"
            onClick={clicked}
          />
        </div>
        {context.cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}

        <div className="text-right text-[18px] font-bold mt-2">
          Total Price:{" "}
          {context.cartItems.length > 0 &&
            context.cartItems.reduce((total, cartItem) => {
              const item = items.find((i) => i.id === cartItem.id);
              const totalPrice =
                total + ((item?.price || 0) * cartItem.quantity).toFixed(2);
              return totalPrice;
            }, 0)}
          $
        </div>
      </div>
    )
  );
};

export default CartItems;
