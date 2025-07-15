import React, { useState } from "react";
import { useNavigate } from "react-router";

import { dateFormate } from "../../../lib/helpers";
import Pagination from "../../global/Pagination";


export default function DisputesList({disputes,pagination,setCurrentPage}) {
  

  const navigate = useNavigate();

  

  return (
    <div>
     

      <div className="bg-gray-50 mt-3 rounded-[25px] overflow-x-auto p-4">
        <div className="hidden md:grid grid-cols-8 gap-4 text-black bg-white rounded-lg px-4 font-semibold text-[12px] mb-4">
          <div className="col-span-1 py-3 text-left">Job Title</div>
          <div className="col-span-1 py-3 text-left">User Name</div>
          <div className="col-span-1 py-3 text-left">Provider Name</div>
          <div className="col-span-1 py-3 text-left">Budget</div>
          <div className="col-span-1 py-3 text-left">Date</div>
          <div className="col-span-1 py-3 text-left ">Status</div>
          <div className="col-span-1 py-3 text-right ">Action</div>
        </div>

        {disputes?.map((items) => (
          <div className="border-b" key={items?._id}>
            <div className="hidden md:grid grid-cols-8 gap-4 items-center py-4 mt-4 text-black text-[12px]">
              <div className="col-span-1 pl-3">{items?.title}</div>
              <div className="col-span-1 pl-3">{items?.user?.name}</div>
              <div className="col-span-1 ">{items?.provider?.name}</div>
              <div className="col-span-1 ">{items?.budget}</div>
              <div className="col-span-1">{dateFormate(items?.createdAt)}</div>
              <div className={`col-span-1  ${items?.disputeStatus === "active" ? "text-green-500 font-semibold" : "text-red-500 font-semibold"}`}>{items?.disputeStatus}</div>
             
              <div className="col-span-1 flex justify-end">
                <button
                onClick={() => navigate(`/app/disputes/${items?._id} `, {state: items})}
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
