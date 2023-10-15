import React from "react";
import olivia from "../../../public/assets/olivia.png";
import Image from "next/image";
import Link from "next/link";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const HeaderChat = () => {
  return (
    <div className="fixed h-24 bg-white shadow-md flex pl-5 pr-5 pt-7 w-full">
      <Link href="/">
        <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-2 rounded-full shadow-lg">
          <BsFillArrowLeftCircleFill className="text-2xl" />
        </button>
      </Link>

      <div className="bg-purple-600 text-white font-bold px-3 rounded-md flex text-center justify-center items-center ml-14 mt-2 h-8 w-28">
        Olivia
      </div>
      <Image
        className="h-16 w-16 ml-16 bg-green-500 rounded-full shadow-md"
        src={olivia}
        alt="Olívia"
        height={62}
        width={62}
      />
      {/* <div className="w-16 h-12 bg-gray-200 rounded-3xl shadow-xl">a</div> */}
    </div>
  );
};

export default HeaderChat;
