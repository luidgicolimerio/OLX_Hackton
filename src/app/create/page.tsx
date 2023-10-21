"use client";
import Header from "../components/Header";
import { useState, ChangeEvent } from "react";
import Switch from "react-switch";
import api from "../services/api";
import Nav from "../components/Nav";
import { useRouter } from "next/navigation";
import Loading from "../components/Loading";
import oliver from "../../../public/assets/oliver.png";
import Image from "next/image";

interface FormData {
  name: string;
  price: string;
  description: string;
  cep: string;
  gps_lat: number | null;
  gps_long: number | null;
  image: File | null;
}

export default function page() {
  const [automaticGPS, setAutomaticGPS] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [oliverLoading, setOliverLoading] = useState(false);

  const [data, setData] = useState<FormData>({
    name: "",
    price: "",
    description: "",
    cep: "",
    gps_lat: null,
    gps_long: null,
    image: null,
  });

  const handleSwitchChange = (checked: boolean) => {
    if (checked === true) fetchUserLocation();
    setAutomaticGPS(checked);
  };

  const handleOliverClick = async () => {
    setOliverLoading(true);
    if (data.name.length < 5) {
      alert(
        "Por favor, defina melhor o nome do produto, o Oliver precisa saber mais sobre ele para te ajudar."
      );
      setOliverLoading(false);
      return;
    }

    api
      .post("/oliver", { name: data.name })
      .then((response) => {
        setData((prevData) => ({
          ...prevData,
          price: response.data.price,
          description: response.data.description,
        }));
        setOliverLoading(false);
      })
      .catch((error) => {
        setOliverLoading(false);
        const errmsg =
          error?.response?.data?.message || "Erro ao notificar Oliver.";
        alert(errmsg);
      });
  };

  const fetchUserLocation = () => {
    // const re = /^[0-9.\-\b]+$/;
    if (navigator.geolocation) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setData((prevData) => ({
            ...prevData,
            gps_lat: position.coords.latitude,
            gps_long: position.coords.longitude,
          }));
          setLoading(false);
        },
        () => {
          alert(
            "Não conseguimos obter sua localização, certifique-se de ter permitido o acesso quando requisitado."
          );
          setAutomaticGPS(false);
        }
      );
    } else {
      alert("Este navegador não suporta Geolocalização.");
    }
  };

  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("description", data.description);
    if (data.cep != null && data.cep.length >= 8 && !automaticGPS) {
      formData.append("cep", data.cep.slice(0, 5) + "-" + data.cep.slice(5));
    }
    if (data.gps_lat != null && automaticGPS) {
      data.gps_lat = parseFloat(data.gps_lat.toFixed(8));
      formData.append("gps_lat", String(data.gps_lat));
    }
    if (data.gps_long != null && automaticGPS) {
      data.gps_long = parseFloat(data.gps_long.toFixed(8));
      formData.append("gps_long", String(data.gps_long));
    }
    if (selectedFile) {
      formData.append("image", selectedFile);
    }

    await api
      .post("/products", formData, {
        headers: {
          "Content-Type": "multipart/form-data;",
        },
      })
      .then((response) => {
        setLoading(false);

        alert("Produto cadastrado!");
        router.push("/");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        const errmsg =
          error?.response?.data?.message || "Erro ao cadastrar produto.";
        alert(errmsg);
      });
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    let processedValue = value;
    if (name == "cep") {
      processedValue = processedValue.replace(/[^0-9]/g, "");
    }
    setData((prevData) => ({
      ...prevData,
      [name]: processedValue,
    }));
  };

  return (
    <>
      <Header />;
      <div className="max-w-md p-7 mb-28 mx-auto">
        <h1 className="text-2xl font-bold">Anunciar</h1>
        <form onSubmit={handleSubmit} className="leading-9 mt-6">
          <label className="block mb-1 pt-1">
            Selecione a imagem de capa do produto:
            <input
              type="file"
              accept="image/*"
              name="image"
              onChange={handleFileChange}
              className="
                file:bg-gradient-to-b file:from-purple-500 file:to-purple-600
                file:text-xs
                file:px-6 file:py-3 file:m-5
                file:border-none
                file:rounded-xl
                file:text-white

                w-full px-1 mt-3 text-xs text-gray bg-purple-400 rounded-xl text-white pr-4
              "
            />
          </label>
          <label className="block mb-2">
            Nome:
            <input
              name="name"
              value={data.name}
              onChange={handleChange}
              placeholder="Galaxy S10E 128GB"
              className="border border-gray-300 rounded px-2 py-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
          <div className="flex">
            <button
              disabled={oliverLoading}
              type="button"
              onClick={handleOliverClick}
              className="bg-purple-500 mb-4 mt-4 text-white px-2 rounded focus:outline-none text-center align-middle focus:ring-2 focus:ring-purple-500 w-3/4 flex items-center justify-center"
            >
              {!oliverLoading ? "Pedir ajuda ao Oliver" : <Loading />}
            </button>
            <Image
              className="h-16 w-16 ml-8 bg-green-300 rounded-full shadow-md"
              src={oliver}
              alt="oliver"
              height={31}
              width={31}
            />
          </div>

          <label className="block mb-2">
            Descrição:
            <textarea
              name="description"
              value={data.description}
              onChange={handleChange}
              placeholder="Galaxy S10E 128GB, em perfeito estado, sem nenhum arranhão."
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
          <label className="block mb-2">
            Preço:
            <input
              name="price"
              value={data.price}
              onChange={handleChange}
              placeholder="800.70"
              className="border border-gray-300 rounded px-2 py-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>

          <label className="text-black flex items-center mt-5 mb-5 justify-between p-4 rounded-xl border-purple-500 border-2">
            Usar minha localização
            <Switch
              height={17}
              width={35}
              handleDiameter={25}
              onChange={handleSwitchChange}
              checked={automaticGPS}
            />
          </label>
          {automaticGPS ? (
            <>
              {data.gps_lat && data.gps_long && (
                <h5 className="text-gray-500">
                  {data.gps_lat}, {data.gps_long}
                </h5>
              )}
            </>
          ) : (
            <label className="block mb-2">
              CEP:
              <input
                name="cep"
                value={data.cep || ""}
                maxLength={8}
                placeholder="21459-304"
                onChange={handleChange}
                className="border border-gray-300 rounded px-2 py-1 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </label>
          )}
          <button
            type="submit"
            disabled={loading}
            className="bg-purple-500 mt-7 text-white py-4 px-4 rounded focus:outline-none text-center align-middle focus:ring-2 focus:ring-purple-500 w-full flex items-center justify-center"
          >
            {!loading ? "Anunciar" : <Loading />}
          </button>
        </form>
      </div>
      <Nav />
    </>
  );
}
