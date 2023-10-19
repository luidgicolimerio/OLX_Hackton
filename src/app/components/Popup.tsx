"use client";
import { useEffect, useState } from "react";

export default function Popup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let pop_status = localStorage.getItem("pop_status");
    if (!pop_status) {
      setVisible(true);
      localStorage.setItem("pop_status", "1");
    }
  }, []);
  if (!visible) return null;

  return visible === true ? (
    <>
      <div
        id="staticModal"
        data-modal-backdrop="static"
        // tabIndex={-1}
        className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full flex items-center justify-center"
      >
        <div className="relative w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow">
            <div className="flex items-start justify-between p-4 border-b rounded-t">
              <h3 className="text-xl font-semibold text-gray-900"></h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                data-modal-hide="staticModal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-6 space-y-6">
              <p className="text-base leading-relaxed text-gray-500">
                Este protótipo não está responsivo no formato de Desktop,
                recomendamos, para a melhor experiência, visualizar a página em
                um dispositivo móvel ou no modo de desenvolvedor do navegador no
                formato mobile.
              </p>
            </div>
            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b ">
              <button
                type="button"
                onClick={() => {
                  setVisible(false);
                }}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Ok, desejo continuar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : null;
}
