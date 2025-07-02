import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { dateFormate, TimeFormate } from "../../../lib/helpers";

const Cards = ({ data, handleCheckboxChange }) => {
  console.log(data, "data");
  return (
    <div className="bg-white ">
      <div
        className={`flex items-start justify-between p-4 border-b shadow rounded-xl ${
          true ? "bg-gray-200 text-[#62466b]" : ""
        }`}
      >
        <div className="flex items-start gap-3">
          <div className="mt-1">
            <div className="w-6 h-6 rounded-full bg-[#dcc2f9] flex items-center justify-center">
              <span className="text-[#62466b]">◎</span>
            </div>
          </div>
          <div>
            <h4
              className={`font-semibold ${
                true ? "text-[#62466b]" : "text-gray-900"
              }`}
            >
              {data.title}
            </h4>
            <p className="text-sm text-gray-600">{data.description}</p>
          </div>
        </div>

        {/* Right side checkbox and date */}
        <div className="flex items-center gap-3">
          <div className="text-sm text-gray-500 text-right">
            <p>{TimeFormate(data?.createdAt)}</p>
            <p>{dateFormate(data?.createdAt)}</p>
          </div>
          <input
            type="checkbox"
            className="w-5 h-5  accent-[#62466b] rounded cursor-pointer"
            onChange={() => handleCheckboxChange(data._id)}
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
