import React, { useEffect } from "react";
import cookie from "js-cookie";
import { RiLogoutCircleRLine } from "react-icons/ri";
import useApp, { AppContext } from "../../context/AppContext";
// import { checkbox } from "../../assets/export";
const UpdatePasswordSuccessfully = () => {
  const { setUpdatePasswordSuccessfully, updatePasswordSuccessfully } =
    useApp(AppContext);

  
  return (
    updatePasswordSuccessfully && (
      <div className="w-screen h-screen flex items-center justify-center bg-[rgba(0,0,0,0.4)] fixed top-0 left-0 right-0 bottom-0 z-30 px-4">
        <div className="bg-gray-100 backdrop-blur-[100px] w-[400px] h-[250px] rounded-[15px] ">
          <div className="flex items-center flex-col justify-center gap-y-4 h-full">
            <div className="flex flex-col gap-y-2 items-center">
              {/* <img src={checkbox} alt="CheckBox" /> */}
              <h3 className="text-2xl text-black">Password Changed </h3>
            </div>
            <p className="text-center text-wrap text-black">
              Your Password have successfully Changed
            </p>
          </div>
        </div>
      </div>
    )
  );
};

export default UpdatePasswordSuccessfully;
