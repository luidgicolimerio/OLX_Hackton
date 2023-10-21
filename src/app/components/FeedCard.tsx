import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";

export interface IObj {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  created_at: string;
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    currencyDisplay: "symbol",
    currencySign: "accounting",
  }).format(price);
}

export function formatDate(date: string) {
  const fdate = new Date(date);
  const months = [
    "Janeiro",
    "Feveveiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  return `${fdate.getDate()} de ${months[fdate.getMonth()]}`;
}

interface props {
  obj?: IObj;
}

const FeedCard = ({ obj }: props) => {
  const router = useRouter();

  return (
    <>
      <button
        onClick={() => {
          router.push(`/product?pid=${obj?.id}`);
        }}
        // state={{ id: obj?.id }}
        className="w-11/12 m-6 items-center bg-white border border-gray-200 rounded-xl shadow-xl md:flex-row lg:flex"
      >
        <div className="flex-shrink-0">
          {obj ? (
            <>
              <Image
                className="object-cover w-full rounded-t-lg h-56 lg:w-80 lg:rounded-md"
                src={obj.image}
                width={192}
                height={192}
                alt="aa"
              />
            </>
          ) : (
            <div className="flex justify-center items-center h-56 lg:w-80 lg:h-100">
              <Image
                className="object-cover w-full rounded-t-lg h-56 lg:w-80 "
                src="https://flowbite.com/docs/images/blog/image-4.jpg"
                width={192}
                height={192}
                alt="Foto do produto"
              />
            </div>
          )}
        </div>

        <div className="flex flex-col justify-start p-4 md:ml-4">
          <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-700 text-left">
            {obj?.name}
          </h5>

          <p
            className="mb-4 text-black dark:text-black text-left font-bold text-2xl"
            style={{ overflowWrap: "break-word" }}
          >
            {obj?.price != null ? formatPrice(obj.price) : obj?.price}
          </p>

          <div className="flex justify-between items-center">
            <p
              className="font-normal text-gray-700 dark:text-gray-400 text-left"
              style={{ overflowWrap: "break-word" }}
            >
              {formatDate(obj?.created_at != null ? obj.created_at : "")}
            </p>
          </div>
        </div>
      </button>
    </>
  );
};

export default FeedCard;
