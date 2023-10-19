"use client";
import React, { useEffect, useState } from "react";
import FeedCard, { IObj } from "./FeedCard";
import api from "../services/api";

const Feed = () => {
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
    <div className="flex flex-col items-center justify-center mb-40 pt-24">
      {arr?.length >= 1 && !loading ? (
        arr.map((obj: IObj, index: number) => (
          <FeedCard key={index} obj={obj} />
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default Feed;
