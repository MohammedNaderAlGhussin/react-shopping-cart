import React, { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import items from "./../data/items.json";

const CartItem = ({ id, quantity }) => {
  const context = useContext(ShoppingCartContext);
  const item = items.find((item) => item.id === id);
  if (item == null) return null;
  let totlaPrice = (item.price * quantity).toFixed(2);
  return (
    quantity > 0 && (
      <div className="flex flex-row items-center justify-between mb-3 bg-[#f6f6f6] rounded-[7px] px-2 py-3">
        <div className="flex flex-row items-center justify-center gap-1">
          <div>
            <img
              className="w-[90px] h-[90px] object-cover"
              src={item.imgUrl}
              alt=""
            />
          </div>
          <div className="flex flex-col items-start justify-center relative top-[-10px]">
            <p className="text-[16px]">
              {item.name}{" "}
              <span className="text-[12px]">
                {quantity > 1 && `x${quantity}`}
              </span>
            </p>
            <span className="text-[#777] block text-start ml-1">
              ${item.price}
            </span>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-2">
          <p className="text-[18px]">${totlaPrice}</p>
          <div
            onClick={() => context.removeFromCart(id)}
            className="border-2 border-red-500 cursor-pointer p-2 text-red-500 rounded-[7px] w-[30px] h-[30px] flex flex-row items-center justify-center duration-300 hover:bg-red-500 hover:text-white"
          >
            x
          </div>
        </div>
      </div>
    )
  );
};

export default CartItem;
