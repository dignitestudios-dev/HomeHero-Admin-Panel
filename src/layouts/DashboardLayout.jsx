import { Outlet } from "react-router";
import DummyNavbar from "../components/layout/Navbar";
import DummySidebaar from "../components/layout/Sidebaar";
import { useEffect, useRef, useState } from "react";
import NoInternetModal from "../components/global/NoInternet";
import { NoInternetImage } from "../assets/export";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import LogOutModal from "../components/authentication/LogOutModal";

const DashboardLayout = () => {
  const [openNoInternet, setOpenNoInternet] = useState(false);
  const sidebarRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen((prev) => !prev);
  useEffect(() => {
    if (!navigator.onLine) {
      setOpenNoInternet(true);
    }
  }, []);
  
  return (
    <div className="w-screen h-screen flex justify-start   items-start overflow-x-hidden">
      <div
        onClick={toggleModal}
        className={`w-screen h-screen fixed  top-0 left-0 transition-all duration-500   ${
          isOpen ? " lg:translate-x-0" : "-translate-x-full lg:translate-x-0"
        } lg:static  z-50 lg:z-auto px-3 lg:w-60 xl:w-72 flex flex-col gap-3 items-center justify-start py-0 lg:h-full `}
      >
        <div
          ref={sidebarRef}
          className={`fixed h-screen top-0 left-0 transition-all duration-200  ${
            isOpen ? " lg:translate-x-0" : "-translate-x-full lg:translate-x-0"
          } lg:static backdrop-blur-[50] w-[60%] z-[2000] lg:z-auto lg:w-60 xl:w-72 flex flex-col gap-3 border-r items-center  justify-start h-full bg-gray-50  `}
        >
          <DummySidebaar />
        </div>
      </div>

      <div className="w-full relative h-[calc(100%-5rem)] lg:w-[calc(100%-15rem)] xl:w-[calc(100%-18rem)]   ">
        <div className="sticky h-[80px]   bg-gray-50 border-b   flex items-center justify-between lg:justify-end z-[99]">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="lg:hidden block"
          >
            <HiOutlineMenuAlt2 className="text-2xl" />
          </button>
          <DummyNavbar />
        </div>
        <div className="p-4 overflow-auto h-full">
          <NoInternetModal isOpen={openNoInternet} />
          <LogOutModal />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
