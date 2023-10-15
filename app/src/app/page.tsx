"use client";
import { useState } from "react";
import FeedCard, { IObj } from "./components/FeedCard";
import Header from "./components/Header";
import api from "./services/api";

export default function Home() {
  const [arr, setArr] = useState([]);
  const [loading, setLoading] = useState(true);

  // async function getFeed() {
  //   await api
  //     .get("/reports")
  //     .then((res) => {
  //       setArr(res.data.data);
  //       setLoading(false);
  //     })
  //     .catch((e) => console.log(e));
  // }

  // useEffect(() => {
  //   getFeed();
  // }, []);

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center mb-32">
        {arr.length >= 1 && !loading ? (
          arr.map((obj: IObj, index: number) => (
            <FeedCard key={index} obj={obj} />
          ))
        ) : (
          <>
            <FeedCard />
            <FeedCard />
            <FeedCard />
          </>
        )}
      </div>
    </>
  );
}
