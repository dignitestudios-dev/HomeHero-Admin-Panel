import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Modal from "react-modal";

import { person } from "../../../assets/export";
import { dateFormate } from "../../../lib/helpers";

const UserModalReport = ({ isOpen, setIsOpen, report }) => {
   console.log(report, "report");
  return (
    <div>
      <Modal
        isOpen={isOpen}
        contentLabel="Page Not Found"
        shouldCloseOnOverlayClick={false} // Prevent closing by clicking outside
        shouldCloseOnEsc={false}
        className="flex items-center justify-center border-none outline-none z-[1000] "
        overlayClassName="fixed inset-0  bg-opacity-50  z-[1000]  flex justify-center items-center bg-[rgba(0,0,0,0.4)]"
      >
        <div className="bg-gray-50 w-[520px] p-6    backdrop-blur-[50px] rounded-[16px] shadow-lg   ">
          <div className="flex items-center justify-between mt-3">
            <h3 className="text-black font-[700] text-[24px]">
              Report Details
            </h3>
            <button onClick={() => setIsOpen(!isOpen)}>
              <IoMdClose className="text-black" />
            </button>
          </div>
         
            
          <div className="flex flex-col gap-4  mt-3">
            <div className="flex border-b border-[#313131] py-5 items-center ">
              <div className="w-[50%] flex flex-col gap-1 ">
                <p className="text-black text-[16px]">Report By</p>
                <div className="flex items-center gap-4 ">
                  <img
                    src={report.reportedByUser
                      ? report.reportedByUser.profilePicture
                      : report.reportedByProvider
                      ? report.reportedByProvider.profilePicture
                      : "Unknow"}
                    alt=""
                    className="w-[35px] h-[35px] rounded-full border-2 border-purple-800 "
                  />
                  <p className="text-black text-[16px] flex flex-col">
                    {report.reportedByUser
                      ? report.reportedByUser.name
                      : report.reportedByProvider
                      ? report.reportedByProvider.name
                      : "Unknow"}{" "}
                    <span className="text-[14px] font-normal"> {report.reportedByUser
                      ? report.reportedByUser.email
                      : report.reportedByProvider
                      ? report.reportedByProvider.email
                      : "Unknow"}</span>
                  </p>
                </div>
              </div>
              <div className="w-[50%] flex flex-col gap-2  border-l-2 border-[#313131] px-7">
                <p className="text-black text-[16px]">Date</p>
                <div className="flex items-center gap-4 ">
                  <p className="text-black text-[16px]">{dateFormate(report.createdAt)}</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-[20px] text-black font-[400] ">Reason</h4>
              <p className="text-[16px] text-black font-[400] leading-[20px]">
                {report.reason}
              </p>
            </div>
          </div>
        
        </div>
      </Modal>
    </div>
  );
};

export default UserModalReport;
