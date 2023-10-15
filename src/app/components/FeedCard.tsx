import Link from "next/link";
import Image from "next/image";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";

export interface IObj {
  id: number;
  name: string;
  image: string;
  desc: string;
  price: string;
}

interface props {
  obj?: IObj;
}

const FeedCard = ({ obj }: props) => {
  return (
    <>
      <Link
        href="/#"
        // state={{ id: obj?.id }}
        className="w-11/12 m-6 items-center bg-white border border-gray-200 rounded-xl shadow-xl md:flex-row"
      >
        <div className="flex-shrink-0">
          {obj ? (
            <>
              <Image
                // className="object-cover w-full rounded-t-lg h-56 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src="https://flowbite.com/docs/images/blog/image-4.jpg"
                // src={obj.image}
                alt=""
              />
            </>
          ) : (
            <div className="flex justify-center items-center h-56 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg">
              <Image
                className="object-cover w-full rounded-t-lg h-56 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src="https://flowbite.com/docs/images/blog/image-4.jpg"
                width={192}
                height={192}
                alt="aa"
              />
            </div>
          )}
        </div>

        <div className="flex flex-col justify-start p-4 md:ml-4">
          <h5 className="mb-9 text-2xl font-bold tracking-tight text-gray-900 text-left">
            Bicicleta Schiwnn Eagle 2019
          </h5>
          <div className="flex justify-between items-center">
            <p
              className="font-normal text-gray-700 dark:text-gray-400 text-left"
              style={{ overflowWrap: "break-word" }}
            >
              12 de Outubro, Rio de Janeiro
            </p>
            <p
              className=" text-black dark:text-black text-right font-bold text-2xl"
              style={{ overflowWrap: "break-word" }}
            >
              R$ 1500,00
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default FeedCard;
