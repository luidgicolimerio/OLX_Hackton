import React from "react";
import olivia from "../../../public/assets/olivia.png";
import Image from "next/image";
import Link from "next/link";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const HeaderChat = () => {
  return (
    <div className="h-24 bg-white shadow-md flex pl-10 pr-10 pt-4 pb-4">
      <Image
        className="h-16 w-16"
        src={olivia}
        alt="Olívia"
        height={62}
        width={62}
      />
      <div className="bg-purple-600 text-white font-bold px-3 rounded-md flex text-center justify-center items-center ml-8 mt-4 h-8 w-28">Olivia</div>
      {/* <div className="w-16 h-12 bg-gray-200 rounded-3xl shadow-xl">a</div> */}
      <Link href='/'>
        <div className="fixed bottom-32 right-4"/>
        <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-5 px-5 rounded-full shadow-lg">
        <BsFillArrowLeftCircleFill className="text-2xl"/>
        </button>
      </Link>
    </div>
  );
};

export default HeaderChat;