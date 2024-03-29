"use client";

import { useSearchParams } from "next/navigation";

import { BsFillCaretDownFill } from "react-icons/bs";
import { BsFillCaretUpFill } from "react-icons/bs";

import api from "@/app/services/api";
import { useEffect, useState } from "react";
import { formatDate, formatPrice } from "@/app/components/FeedCard";
import Nav from "@/app/components/Nav";
import Loading from "@/app/components/Loading";
import Header from "@/app/components/Header";
import ChatButton from "../components/ChatButton";

interface IObj {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  address: string;
  neighbourhood: string;
  city: string;
  state: string;
  created_at: string;
}

export default function page() {
  const [data, setData] = useState<IObj | undefined>(undefined);
  const [description, setDescription] = useState(false);

  const searchParams = useSearchParams();
  const search = searchParams.get("pid");

  async function getData() {
    await api
      .get(`/products/${search}`)
      .then((r) => {
        setData(r.data.product);
        setDescription(true);
      })
      .catch((e) => alert(e.response.data.message));
  }

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className="pt-24">
        {!data?.image ? (
          <div className="flex justify-center items-center mt-36">
            <Loading />
          </div>
        ) : (
          <div className="lg:flex lg:justify-center lg:items-center lg:mt-12">
            <div className="mb-32 bg-white w-100 lg:w-3/4 lg:rounded-lg lg:shadow-2xl">
              <img
                className="object-cover w-full h-96 lg:rounded-lg"
                alt="Imagem do produto"
                src={data?.image}
              />
              <div className="flex pt-2 px-4 mb-2 w-full ">
                <div className="w-6/12 lg:w-10/12 break-all ">
                  <h1 className="mt-2 mb-2 text-2xl font-bold tracking-tight text-gray-900 text-left">
                    {data?.name}
                  </h1>
                </div>
                <div className="w-6/12 lg:w-2/12  flex justify-center items-center">
                  <h1 className="text-2xl font-bold bg-purple-700 text-white px-2 py-2 ml-2 mt-8 rounded-lg shadow-lg">
                    {formatPrice(data?.price)}
                  </h1>
                </div>
              </div>
              <div>
                <h2 className=" mb-2 text-lg px-4 font-bold tracking-tight text-gray-600 text-left">
                  {data?.created_at && formatDate(data?.created_at)}
                </h2>
                <h2 className="mb-2 px-4 text-lg font-bold tracking-tight text-gray-600 text-left">
                  {data?.neighbourhood}, {data?.city}
                </h2>
                <div className="flex items-center px-4 mb-2 w-full h-10 flex-row">
                  <h3 className="text-lg font-bold tracking-tight text-gray-600 text-left">
                    Descrição
                  </h3>
                  <button
                    className="ml-2 bg-transparent font-bold text-gray-500 "
                    onClick={() => {
                      setDescription(!description);
                    }}
                  >
                    {description ? (
                      <BsFillCaretUpFill />
                    ) : (
                      <BsFillCaretDownFill />
                    )}
                  </button>
                </div>
                {description && (
                  <div className="flex items-center px-4 mb-2 w-full h-auto flex-row border-t border-b border-gray-200  bg-slate-100">
                    <p className="p-2.5 text-lg font-bold tracking-tight text-gray-800 text-left">
                      {data?.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <Nav />
      <ChatButton />
    </>
  );
}
