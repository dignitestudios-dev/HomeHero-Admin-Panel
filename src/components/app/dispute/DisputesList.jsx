import React, { useState } from "react";
import { useNavigate } from "react-router";

import { dateFormate } from "../../../lib/helpers";
import Pagination from "../../global/Pagination";


export default function DisputesList() {
  

  const navigate = useNavigate();

  

  return (
    <div>
     

      <div className="bg-gray-50 mt-3 rounded-[25px] overflow-x-auto p-4">
        <div className="hidden md:grid grid-cols-8 gap-4 text-black bg-white rounded-lg px-4 font-semibold text-[12px] mb-4">
          <div className="col-span-1 py-3 text-left">Job Title</div>
          <div className="col-span-1 py-3 text-left">User Name</div>
          <div className="col-span-1 py-3 text-left">Provider Name</div>
          <div className="col-span-1 py-3 text-left">Service</div>
          <div className="col-span-1 py-3 text-left">Date</div>
          <div className="col-span-1 py-3 text-left ">Status</div>
          <div className="col-span-1 py-3 text-left ">Payment Status</div>
          <div className="col-span-1 py-3 text-right ">Action</div>
        </div>

        {[1,2,3,4,5,6,7,8,9,10,11].map((req) => (
          <div className="border-b" key={req.id}>
            <div className="hidden md:grid grid-cols-8 gap-4 items-center py-4 mt-4 text-black text-[12px]">
              <div className="col-span-1 pl-3">{req.title}</div>
              <div className="col-span-1 pl-3">{req.user}</div>
              <div className="col-span-1 ">{req.provider}</div>
              <div className="col-span-1 ">{req.service}</div>
              <div className="col-span-1">{dateFormate(req.date)}</div>
              <div className={`col-span-1  ${req.status === "active" ? "text-green-500 font-semibold" : "text-red-500 font-semibold"}`}>{req.status}</div>
              <div className="col-span-1">{req.paymentStatus}</div>
              <div className="col-span-1 flex justify-end">
                <button
                onClick={() => navigate(`/app/disputes/${req}`)}
                  className="bg-[#62466B] text-white px-4 py-2 rounded-[8px] text-[12px]"
                >
                  View
                </button>
              </div>
            </div>
          </div>
        ))}

       
      </div>
      <div className="flex justify-end">

      <Pagination
       
        />
        </div>
    </div>
  );
}
