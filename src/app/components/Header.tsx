import React from "react";
import logo from "../../../public/assets/olx-logo-13 1.png";
import Image from "next/image";

const Header = () => {
  return (
    <div className="h-24 fixed w-full bg-white shadow-md flex pl-10 pr-10 pt-4 pb-4">
      <Image
        className="h-8 w-16 mt-4"
        src={logo}
        alt="logo"
        height={53}
        width={28}
      />
      {/* <div className="w-16 h-12 bg-gray-200 rounded-3xl shadow-xl">a</div> */}
    </div>
  );
};

export default Header;
