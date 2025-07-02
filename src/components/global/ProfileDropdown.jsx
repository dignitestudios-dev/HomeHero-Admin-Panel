import React, { useContext } from "react";
import { NavLink } from "react-router";
import { AppContext } from "../../context/AppContext";

const ProfileDropdown = () => {
  const { hadleLogout } = useContext(AppContext);
  
  return (
    <div className=" items-center space-y-3">
      <NavLink to={"/app/updatepassword"}>
        <div className="text-black text-[14px] font-medium">
          change password
        </div>
      </NavLink>
      <div
        className="text-[#FF4040] text-[14px] font-medium "
        onClick={() => hadleLogout()}
      >
        Logout
      </div>
    </div>
  );
};

export default ProfileDropdown;
