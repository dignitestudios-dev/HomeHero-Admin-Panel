import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

const Cards = () => {
  return (
    <div className="flex  items-center justify-between p-4 gap-4 bg-gray-50 rounded-[8px]  backdrop-blur-[50px]">
      <div className="flex flex-col">
        {" "}
        <p className="font-[400] text-[18px] leading-[175%] text-black ">
          Title Here
        </p>
        <p className="font-[400] text-[14px] leading-[146%] text-black">
          Lorem ipsum dolor sit amet consectetur. Aliquet mus feugiat eget proin
          etiam eget in semper sed. Cursus amet condimentum.
        </p>
      </div>
      <div className="flex gap-2">
        <button className=" rounded-[8px]">
          <AiOutlineDelete size={20} className="text-red-500" />
        </button>
      </div>
    </div>
  );
};

export default Cards;
