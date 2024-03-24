"use client";
import { useEffect, useRef, useState } from "react";
import HeaderChat from "../components/HeaderChat";
import api from "../services/api";
import Msg from "../components/Msg";

export interface msg {
  role: string;
  content: string;
}

export default function Home() {
  const [arr, setArr] = useState<msg[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleInputChange = (e: any) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: any) => {
    setLoading(true);

    const body = { message: message, arr: arr };

    api
      .post("/olivia", body)
      .then((response) => {
        setArr((prevMessages) => [
          ...prevMessages,
          { role: "user", content: message },
        ]);

        setArr((prevMessages) => [
          ...prevMessages,
          { role: "assistant", content: response.data.message },
        ]);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });

    setMessage("");
  };

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    divRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [arr]);

  return (
    <>
      <HeaderChat />
      <div className="mb-24 pt-24">
        {arr.map((obj: msg, index: number) => (
          <Msg key={index} obj={obj} />
        ))}
      </div>
      <div ref={divRef}></div>
      <div className="fixed bottom-0 w-screen bg-white p-4 flex items-center">
        <textarea
          className="flex-grow mr-2 py-2 px-4 rounded-lg focus:outline-none focus:ring bg-gray-200 focus:border-blue-300"
          placeholder="Como posso lhe ajudar?"
          value={message}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className="h-16 rounded-xl bg-purple-700 text-white py-2 px-4"
          disabled={loading === true}
        >
          Enviar
        </button>
      </div>
    </>
  );
}
