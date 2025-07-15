import React from "react";
import { Link, useNavigate } from "react-router";
import { dateFormate } from "../../../lib/helpers";
import Pagination from "../../global/Pagination";

export const PaymentsEarnings = ({payments,pagination,setCurrentPage}) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="py-4">
        {/* Section 1: Payment Records */}
        <div className="bg-gray-50 rounded-2xl shadow p-6 mb-6">
          <div className="overflow-x-auto space-y-4 ">
            <div className="grid grid-cols-6 bg-white rounded-lg px-4 text-[12px] font-semibold text-left p-2 ">
              <div>Job Title</div>
              <div>Provider Name</div>
              <div>User Name</div>
              
              <div>Amount</div>
              <div>Date</div>
              <div className="w-full flex pl-4">Action</div>
            </div>
            {payments?.map((items) => (
              <div
                key={items?._id}
                className="grid grid-cols-6 text-sm p-2 border-b"
              >
                <div className="text-wrap">{items?.job?.title}</div>
                <div>{items?.job?.provider?.name}</div>
                <div>{items?.job?.user?.name}</div>
                <div>{items?.job?.budget}</div>
                <div>{dateFormate(items?.job?.estimatedStartDate)}</div>
                <button onClick={() => navigate(`/app/payments/${items._id}`, {state: items})} className="w-16 bg-[#62466B] text-white flex items-center justify-center px-4 py-2 rounded-[8px] ">
                  View 
                </button>
              </div>
            ))}
          </div>
        </div>
      <div className="flex justify-end">
      <Pagination pagination={pagination} setCurrentPage={setCurrentPage}/>
      </div>
      </div>
    </div>
  );
};
