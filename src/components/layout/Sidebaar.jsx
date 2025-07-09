import { NavLink, useLocation } from "react-router";
import { sidebarData } from "../../static/Sidebar";
import { Logo } from "../../assets/export";

const DummySidebaar = () => {
  const location = useLocation();
  console.log(location, "location");
  return (
    <div className="w-full h-full overflow-y-auto px-3 py-2   ">
      <div className="flex flex-col items-center pt-2 pb-7">
        <img
          src={Logo}
          loading="lazy"
          alt="logo-organization"
          className="w-[89px] h-[55px]"
        />
      </div>
      <div className=" flex flex-col gap-3 justify-start items-start ">
        {sidebarData?.map((sidebar) => {
          return (
            <NavLink
              key={sidebar?.link}
              className={({ isActive }) =>
                isActive
                  ? "text-md border w-full h-11 flex items-center gap-2 px-3 justify-start border-[#8b7297] bg-[linear-gradient(180deg,_#D9BBF9_0%,_#775B84_90%)] text-white rounded-md font-medium "
                  : "text-[#62466B] text-sm w-full h-11 flex items-center gap-2 px-3 justify-start rounded-md font-[600]    "
              }
              to={sidebar?.link}
            >
              <span>
                {location?.pathname == sidebar.link
                  ? sidebar?.icon
                  : sidebar.whiteicon}
              </span>

              <span>{sidebar?.title}</span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default DummySidebaar;
