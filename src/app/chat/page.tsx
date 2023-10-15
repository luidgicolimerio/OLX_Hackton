"use client";
import { useState } from "react";
import HeaderChat from "../components/HeaderChat";


export default function Home() {
  const [arr, setArr] = useState([]);
  const [loading, setLoading] = useState(true);



  return (
    <HeaderChat />
  );
}
