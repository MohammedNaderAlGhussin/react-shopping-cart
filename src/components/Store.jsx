import React, { Fragment } from "react";
import items from "./../data/items.json";
import StoreItems from "./StoreItems";

const Store = () => {
  console.log(items);
  return (
    <Fragment>
      <h1 className="font-bold ml-3 xl:mr-0 text-[30px] mb-2 block w-fit relative before:absolute before:content-[''] before:w-full before:h-[2px] before:bg-black before:bottom-0 before:left-0">
        Store
      </h1>
      <div className="flex flex-row mb-5 justify-center xl:justify-start items-center gap-3 flex-wrap pb-10">
        {items.map((item) => {
          return <StoreItems key={item.id} {...item} />;
        })}
      </div>
    </Fragment>
  );
};

export default Store;
