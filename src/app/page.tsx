"use client";
import { useEffect, useState } from "react";
import FeedCard, { IObj } from "./components/FeedCard";
import Header from "./components/Header";
import api from "./services/api";
import ChatButton from "./components/ChatButton";
import Nav from "./components/Nav";
import Popup from "./components/Popup";

export default function Home() {
  const [arr, setArr] = useState<IObj[]>([]);
  const [loading, setLoading] = useState(true);

  async function getFeed() {
    await api
      .get("/products")
      .then((res) => {
        setArr(res.data.products);
        setLoading(false);
        console.log(arr);
      })
      .catch((e) => console.log(e));
  }

  useEffect(() => {
    getFeed();
  }, []);

  return (
    <>
      <Header />
      <Popup />
      <div className="flex flex-col items-center justify-center mb-40 pt-24">
        {arr?.length >= 1 && !loading ? (
          arr.map((obj: IObj, index: number) => (
            <FeedCard key={index} obj={obj} />
          ))
        ) : (
          <></>
        )}
      </div>
      <Nav />
      <ChatButton />
    </>
  );
}
