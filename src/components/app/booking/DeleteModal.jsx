import React from "react";

// import { checkbox } from "../../assets/export";
import { useNavigate } from "react-router";
import useApp, { AppContext } from "../../../context/AppContext";

const DeleteModal = ({ isOpen, setIsOpen }) => {
  return (
    isOpen && (
      <div className="w-screen h-screen flex items-center justify-center bg-[rgba(0,0,0,0.4)] fixed top-0 left-0 right-0 bottom-0 z-[100] px-4">
        <div className="bg-gray-50 backdrop-blur-[100px] w-[420px] h-[230px]  rounded-lg ">
          <div className="flex items-center flex-col justify-center gap-y-4 h-full">
            <div className="flex flex-col gap-y-2 items-center">
              {/* <img src={checkbox} alt="" /> */}
              <h3 className="text-2xl text-black">Log Out</h3>
            </div>
            <p className="text-center text-wrap text-black">
              Are you sure you want to Delete?
            </p>
            <div className="flex items-center justify-center gap-5 ">
              <button
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                className="bg-[#0E0E0E] text-white text-sm px-4 py-1 rounded-[14px] w-[180px] h-[44px]"
              >
                No
              </button>
              <button
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                className="w-[180px] h-[44px] rounded-[14px] bg-[linear-gradient(180deg,_#D9BBF9_0%,_#775B84_90%)]  text-white flex gap-2 items-center justify-center text-md font-medium"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default DeleteModal;
