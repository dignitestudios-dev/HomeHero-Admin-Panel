import React from "react";
import { NavLink } from "react-router";
import useApp, { AppContext } from "../../context/AppContext";

const ProfileDropdown = () => {
  const { logOutModal, setLogOutModal } = useApp(AppContext);
  console.log(logOutModal, "sdsadsadsadsa");
  return (
    <div className=" items-center space-y-3">
      <NavLink to={"/app/updatepassword"}>
        <div className="text-black text-[14px] font-medium">
          change password
        </div>
      </NavLink>
      <div
        className="text-[#FF4040] text-[14px] font-medium "
        onClick={() => setLogOutModal(!logOutModal)}
      >
        Logout
      </div>
    </div>
  );
};

export default ProfileDropdown;
