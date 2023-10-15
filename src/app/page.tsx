"use client";
import { useEffect, useState } from "react";
import FeedCard, { IObj } from "./components/FeedCard";
import Header from "./components/Header";
import api from "./services/api";
import ChatButton from "./components/ChatButton";

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
      <div className="flex flex-col items-center justify-center mb-32">
        {arr?.length >= 1 && !loading ? (
          (console.log(arr),
          arr.map((obj: IObj, index: number) => (
            <FeedCard key={index} obj={obj} />
          )))
        ) : (
          <>
            {/* <FeedCard />
            <FeedCard />
            <FeedCard /> */}
          </>
        )}
      </div>
      <ChatButton/>
    </>
  );
}
