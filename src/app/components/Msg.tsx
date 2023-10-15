import React from "react";
import { msg } from "../chat/page";

interface props {
  obj?: msg;
}

const Msg = ({ obj }: props) => {
  return (
    <>
      <div className="flex w-full p-5 break-words">
        {obj?.role === "assistant" ? (
          <div className="rounded-md p-4 bg-purple-500 text-white mr-auto break-words">
            <div dangerouslySetInnerHTML={{ __html: obj.content }} />
          </div>
        ) : (
          <div className="rounded-md p-4 bg-white ml-auto break-all">
            {obj?.content}
          </div>
        )}
      </div>
    </>
  );
};

export default Msg;
