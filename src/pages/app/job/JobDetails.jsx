import React, { useEffect, useState } from "react";
// import { contact, email, loginbg, person, star } from "../../../assets/export";

import UserDetailReview from "../../../components/app/user/UserDetailReview";

import { person } from "../../../assets/export";
import { ProviderCategory } from "../../../components/app/provider/ProviderCategory";
import { Detail } from "../../../components/app/booking/Detail";
import { useLocation } from "react-router";
import axios from "../../../axios";
const JobDetails = () => {
  const [ActiveTab, setActiveTab] = useState("All");
  const location = useLocation();
  const job = location.state;
  console.log(job,"jobId");
  const [jobdetails, setJobdetails] = useState({});
  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(
          `/job/get-job-details/${job?._id}`
        );
        setJobdetails(response?.data?.data?.job);
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
    };
    fetchJobDetails();
  }, [job?._id]);
  console.log(jobdetails, "jobdetails");
  return (
    <div className="flex flex-col p-5">
      <h2 className="text-2xl font-semibold py-6">Booking Details</h2>
      <div className="flex flex-col gap-3  bg-gray-50 backdrop-blur-[50px] rounded-[15px]">
        <div className="  p-5 grid grid-cols-2 gap-3">
          <div className="flex items-center gap-5 ">
            <img
              src={person}
              className="rounded-full w-[180px] border-4   border-black object-cover "
              alt="person"
            />
            <div>
              <h3 className="text-black text-[20px] font-[500]">
                {job?.user?.name}
              </h3>
              <p className="text-black text-[14px] font-normal">
                {job?.user?.username}
              </p>
            </div>
          </div>
          <div className="">
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
                    {jobdetails?.user?.email}
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-3 mt-5">
                {/* <img src={contact} className="w-10" alt="mail" /> */}
                <div>
                  <p className="font-[500] text-[14px] text-black ">Phone</p>
                  <p className="font-[400] text-[16px] text-black ">
                    {jobdetails?.user?.phone}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full flex justify-end  px-5 gap-5  py-4">
          <button className=" bg-red-600 text-white py-2 px-10 rounded-lg">
            Block
          </button>
          <button className="px-10 bg-blue-500 text-white py-2 rounded-lg">
            Unblock
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
