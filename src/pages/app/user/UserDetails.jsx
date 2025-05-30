import React, { useState } from "react";
// import { contact, email, loginbg, person, star } from "../../../assets/export";

import UserDetailReview from "../../../components/app/user/UserDetailReview";

import { person } from "../../../assets/export";

const UserDetails = () => {
  const [ActiveTab, setActiveTab] = useState("All");
  return (
    <div className="p-5">
      <h2 className="text-2xl font-semibold pb-3">Users Details</h2>
      <div className="flex flex-col gap-3">
        <div className=" bg-gray-100 backdrop-blur-[50px] rounded-[15px] p-5 flex justify-between gap-3">
          <div className="flex items-center gap-5 ">
            <img
              src={person}
              className="rounded-full w-[100px] object-cover "
              alt="person"
            />
            <div>
              <h3 className="text-black text-[20px] font-[500]">Mike Smith</h3>
              <p className="text-black text-[14px] font-normal">@mikesmith</p>
            </div>
          </div>
          <div>
            <span className="font-[500] text-[14px] text-black">Bio</span>
            <p className="font-[400] text-[14px] text-black">
              Lorem ipsum dolor sit amet consectetur. Nullam ips um ornare
              interdum sit. Sed arcu at habitant cons equat .
            </p>
            <ul className="mt-3">
              <li className="flex items-center gap-3">
                {/* <img src={email} className="w-10" alt="mail" />/ */}
                <div>
                  <p className="font-[500] text-[14px] text-black ">Email</p>
                  <p className="font-[400] text-[16px] text-black ">
                    mikesmith@gmail.com
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-3 mt-5">
                {/* <img src={contact} className="w-10" alt="mail" /> */}
                <div>
                  <p className="font-[500] text-[14px] text-black ">Phone</p>
                  <p className="font-[400] text-[16px] text-black ">
                    +1 123 456 7890
                  </p>
                </div>
              </li>
            </ul>
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
