import React from "react";

const Layout = ({ show, clicked }) => {
  return (
    show && (
      <div
        className="fixed top-0 left-0 z-10 w-full h-full bg-[#00000080]"
        onClick={clicked}
      ></div>
    )
  );
};

export default Layout;
