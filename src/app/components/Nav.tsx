import React from "react";
import Link from "next/link";
import { BsHeart, BsMegaphone, BsPersonCircle, BsSearch } from "react-icons/bs";
import { BsListUl } from "react-icons/bs";
import "../styles/Nav.css";

const Nav = () => {
  return (
    <div className="shadow-lg h-24 fixed bottom-5 left-0 right-0 flex items-center justify-between bg-slate-100 text-black bg-opacity-50 backdrop-blur-md p-4 z-10 rounded-xl mx-auto w-11/12">
      <div className="flex items-center justify-center w-1/4">
        <Link href="/">
          <BsListUl className="text-2xl w-full text-purple-olx" />
          <p className="mt-2 text-sm text-gray-500">Início</p>
        </Link>
      </div>
      <div className="flex items-center justify-center w-1/4">
        <Link href="/#">
          <BsSearch className="text-2xl w-full text-purple-olx" />
          <p className="mt-2 text-sm text-gray-500">Buscar</p>
        </Link>
      </div>
      <div className="flex items-center justify-center w-1/4">
        <Link href="/#">
          <BsHeart className="text-2xl w-full text-purple-olx" />
          <p className="mt-2 text-sm text-gray-500">Favoritos</p>
        </Link>
      </div>
      <div className="flex items-center justify-center w-1/4">
        <Link href="/#">
          <BsMegaphone className="text-2xl w-full text-purple-olx" />
          <p className="mt-2 text-sm text-gray-500">Anuncie</p>
        </Link>
      </div>
      <div className="flex items-center justify-center w-1/4">
        <Link href="/#">
          <BsPersonCircle className="text-2xl w-full text-purple-olx" />
          <p className="mt-2 text-sm text-gray-500">Conta</p>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
