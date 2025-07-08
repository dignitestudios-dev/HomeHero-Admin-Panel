import { FaAngleDown } from "react-icons/fa";
import { Group, Logo, person } from "../../assets/export";
import { useContext, useState } from "react";
import ProfileDropdown from "../global/ProfileDropdown";
import Cookies from "js-cookie";
import { AppContext } from "../../context/AppContext";
const DummyNavbar = () => {
  const [notificationDropdown, setNotificationDropdown] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const {authRecord} = useContext(AppContext);
console.log(authRecord,'authRecord');
  
  const notificationhandle = () => {
    setNotificationDropdown(!notificationDropdown);
  };
  const profilehandle = () => {
    setProfileDropdown(!profileDropdown);
  };
 
  return (
    <div className="w-full h-full px-6 flex items-center justify-end gap-3   ">
      <div className="flex items-center gap-4">
        {/* <img src={person} alt="" className="w-16" /> */}
        <p className="flex flex-col text-black text-[16px]">
          {authRecord?.name}
          <span className="text-[13px] font-normal ">{authRecord?.email}</span>
        </p>
      </div>
      <div className="">
        <button onClick={profilehandle}>
          <FaAngleDown className="text-black" />
          {profileDropdown && (
            <div className="fixed right-3 shadow-lg text-start  p-5 top-[95px] bg-gray-100 h-[85px] w-[200px] rounded-[15px]  ">
              <ProfileDropdown />
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default DummyNavbar;
