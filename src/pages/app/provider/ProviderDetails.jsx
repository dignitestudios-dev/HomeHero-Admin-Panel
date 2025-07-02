import React, { useState } from "react";
// import { contact, email, loginbg, person, star } from "../../../assets/export";

import UserDetailReview from "../../../components/app/user/UserDetailReview";

import { ProviderCategory } from "../../../components/app/provider/ProviderCategory";
import { useLocation, useNavigate } from "react-router";
import axios from "../../../axios";
import { SuccessToast } from "../../../components/global/Toaster";
import { FaSpinner } from "react-icons/fa6";

const ProviderDetails = () => {
  const [ActiveTab, setActiveTab] = useState("All");
  const [blockLoader, setBlockLoader] = useState(false);
  const location = useLocation();
  const provider = location.state;
  const [blockProvider, setBlockProvider] = useState({});
const navigate = useNavigate(); 
    const fetchblockprovider = async () => {
      try {
        setBlockLoader(true);
        const data = {
          providerID: provider?._id,
          isBlocked: true,
        };
        const response = await axios.post(`/provider/toggle-block-provider`, data);
      if (response?.status === 200) {
        SuccessToast("Provider blocked successfully");
        navigate('/app/providers');
      }
      } catch (error) {
        console.error("Error fetching provider:", error);
      }
      finally {
        setBlockLoader(false);
      }
    };
   
  

  return (
    <div className="flex flex-col p-5">
      <h2 className="text-2xl font-semibold py-6">Provider Details</h2>
      <div className="flex flex-col gap-3  bg-gray-50 backdrop-blur-[50px] rounded-[15px]">
        <div className=" px-6 flex items-center gap-24 pt-14">
          <div className="flex items-center gap-5 ">
            <img
              src={provider?.profilePicture}
              className="rounded-full w-32 h-32 border-4   border-black object-cover "
              alt="person"
            />
            <div>
              <h3 className="text-black text-[22px] font-[500]">{provider?.name}</h3>

            </div>
          </div>
          
            
            
            <div className=" flex gap-24">
              
               
                <div className="flex items-center gap-3">
                  <p className="font-[500] text-[18px] text-black ">Email</p>
                  <p className="font-[400] text-[18px] text-black ">
                    {provider?.email}
                  </p>
                </div>
              
              <div className="flex items-center gap-3 ">
                {/* <img src={contact} className="w-10" alt="mail" /> */}
                <div className="flex items-center gap-3">
                  <p className="font-[500] text-[18px] text-black ">Phone</p>
                  <p className="font-[400] text-[18px] text-black ">
                    {provider?.phone}
                  </p>
                </div>
              
            </div>
          </div>
       
      </div>
        <div className="w-full flex justify-end  px-5 gap-5  ">
         
          <button className=" bg-red-600 text-white py-2 px-10 rounded-lg" onClick={fetchblockprovider} disabled={blockLoader}>
            {blockLoader ? <FaSpinner className="animate-spin"/>: "Block"}
          </button>
        </div>
      <ProviderCategory provider={provider} />
    </div>
    </div>
  );
};

export default ProviderDetails;
