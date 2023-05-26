import React, { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

const StoreItems = ({ id, name, price, imgUrl }) => {
  const context = useContext(ShoppingCartContext);
  console.log(context.cartItems);

  const quntitiy = context.getItemQuantity(id);

  return (
    <div className="item h-[350px]  overflow-hidden border-[1px] border-[#ccc] rounded-[7px]">
      <div className="mb-2 w-[380px]">
        <img className="w-full h-[200px] object-cover" src={imgUrl} alt="" />
      </div>
      <div className="flex flex-row items-center justify-between mt-3">
        <p className="ml-3 text-[22px]">{name}</p>
        <span className="mr-3 text-[#777]">{price}$</span>
      </div>
      {quntitiy === 0 ? (
        <button
          onClick={() => context.increaseCartQuantity(id)}
          className="text-white bg-blue-500 duration-300 hover:bg-blue-700 py-1 text-center rounded-[7px]  mt-14 mx-auto block w-[90%]"
        >
          Add To Cart
        </button>
      ) : (
        <div className="buy flex flex-col items-center justify-center mt-3">
          <div className="options flex flex-row gap-4 items-center">
            <button
              onClick={() => context.decreaseCartQuantity(id)}
              className="bg-blue-500 text-white p-2 px-3 rounded-[6px]"
            >
              -
            </button>
            <p className="text-[19px]">{quntitiy} in cart</p>
            <button
              onClick={() => context.increaseCartQuantity(id)}
              className="bg-blue-500 text-white p-2 px-3 rounded-[6px]"
            >
              +
            </button>
          </div>
          <button
            onClick={() => context.removeFromCart(id)}
            className="bg-red-600 text-white px-4 py-1 rounded-[7px] my-3 block"
          >
            Remove
          </button>
        </div>
      )}
    </div>
  );
};

export default StoreItems;
