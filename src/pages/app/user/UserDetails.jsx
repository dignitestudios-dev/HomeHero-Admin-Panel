import React, { useState } from "react";
// import { contact, email, loginbg, person, star } from "../../../assets/export";

import UserDetailReview from "../../../components/app/user/UserDetailReview";

import { person } from "../../../assets/export";
import { useLocation } from "react-router";

const UserDetails = () => {
  const [ActiveTab, setActiveTab] = useState("All");
  const user = useLocation().state;
  console.log(user, "user");
  return (
    <div className="p-5">
      <h2 className="text-2xl font-semibold pb-3">Users Details</h2>
      <div className="flex flex-col gap-3">
        <div className=" bg-gray-100 backdrop-blur-[50px] rounded-[15px]  items-center p-5 flex gap-24">
          <div className="flex items-center gap-5 ">
            <img
              src={user?.profilePicture}
              className="rounded-full w-[100px] h-[100px] object-cover "
              alt="person"
            />
            <div className="flex  gap-1">
              <h3 className="text-black text-[20px] font-[500]">{user?.name}</h3>
              <p className="text-black text-[14px] font-normal">{user?.username}</p>
            </div>
          </div>
          <div>
           
            <div className=" flex items-center gap-20">
              
                <div className="flex items-center gap-3">
                  <p className="font-[500] text-[18px] text-black ">Email:</p>
                  <p className="font-[400] text-[18px] text-black ">
                    {user?.email}
                  </p>
                </div>
             
              
                {/* <img src={contact} className="w-10" alt="mail" /> */}
                <div className="flex items-center gap-3">
                  <p className="font-[500] text-[18px] text-black ">Phone:</p>
                  <p className="font-[400] text-[18px] text-black ">
                    {user?.phone}
                  </p>
                </div>
             
            </div>
          </div>
        </div>
        <div className=" h-[300px] overflow-auto py-5 bg-gray-100 backdrop-blur-[50px] rounded-[15px] p-3">
          <div className="flex items-center gap-3">
            <h3 className="font-[500] text-[20px] text-black ">Reviews</h3>
            <div className="flex items-center gap-1">
              {/* <img src={star} className="w-4" alt="review star" /> */}
              <span className="font-[400] text-[14px] text-black">24</span>
            </div>
          </div>
          {[1, 2, 3, 4, 5, 6].map(($) => (
            <UserDetailReview key={$} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
