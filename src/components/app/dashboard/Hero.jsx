import React, { useEffect, useState } from "react";
import { IoToday } from "react-icons/io5";
import { BsCalendarWeek } from "react-icons/bs";
import { MdCalendarMonth } from "react-icons/md";
import { MdOutlineToday } from "react-icons/md";

export const Hero = ({data}) => {


  return (
    <div>
      <div className="w-full grid grid-cols-3 mt-4 gap-11">
        <div className="flex items-center justify-between bg-gray-50 backdrop-blur-[50px] p-5 rounded-[15px]">
          <div className="flex flex-col">
            <p className="text-[#775B84] text-[22.98px] font-medium">{data?.amountToday}$</p>
            <p className="text-[11.14px] font-medium text-[#8A92A6]">Today</p>
          </div>
          <MdOutlineToday size={25} className="text-[#6d288d]" />
        </div>
        {/* <img src={heroSquare} alt="" className="w-[41px]" /> */}
        <div className="flex items-center justify-between bg-gray-50 backdrop-blur-[50px] p-5 rounded-[15px]">
          <div className="flex flex-col">
            <p className="text-[#775B84] text-[22.98px] font-medium">{data?.amountThisWeek}$</p>
            <p className="text-[11.14px] font-medium text-[#8A92A6]">
              This Week
            </p>
          </div>
          <BsCalendarWeek size={25} className="text-[#6d288d]" />
        </div>
        <div className="flex items-center justify-between bg-gray-50 backdrop-blur-[50px] p-5 rounded-[15px]">
          <div className="flex flex-col">
            <p className="text-[#775B84] text-[22.98px] font-medium">{data?.amountThisMonth
            }$</p>
            <p className="text-[11.14px] font-medium text-[#8A92A6]">
              This Month
            </p>
          </div>
          {/* <img src={heroSquare} alt="" className="w-[41px]" /> */}
          <MdCalendarMonth size={25} className="text-[#6d288d]" />
        </div>
      </div>
    </div>
  );
};
