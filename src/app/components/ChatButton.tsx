import Link from "next/link";
import { BsFillChatLeftTextFill } from "react-icons/bs";

export default function ChatButton(){

    return( 
    <Link href='/chat'>
    <div className="fixed bottom-32 right-4">
    <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-5 px-5 rounded-full shadow-lg">
      <BsFillChatLeftTextFill className="text-2xl"/>
    </button>
    </div>
    </Link>)
}