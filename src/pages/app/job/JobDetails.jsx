import React, { useEffect, useState } from "react";
// import { contact, email, loginbg, person, star } from "../../../assets/export";

import UserDetailReview from "../../../components/app/user/UserDetailReview";

import { person } from "../../../assets/export";
import { ProviderCategory } from "../../../components/app/provider/ProviderCategory";
import { Detail } from "../../../components/app/booking/Detail";
import { useLocation } from "react-router";
import axios from "../../../axios";
import { dateFormate } from "../../../lib/helpers";

const JobDetails = () => {
  const [ActiveTab, setActiveTab] = useState("All");
  const location = useLocation();
  const job = location.state;

  const [jobdetails, setJobdetails] = useState({});

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`/job/get-job-details/${job?._id}`);
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
      <h2 className="text-2xl font-semibold py-6">Job Details</h2>
      <div className="flex flex-col gap-3  bg-gray-50 backdrop-blur-[50px] rounded-[15px]">
        <div className="w-full p-5 space-y-5">
          <div className="w-full border-b pb-3 ">
            <span className="font-[500] text-[18px] text-black">Job Title</span>
            <p className="font-[400] text-[18px] text-gray-500">
              {jobdetails?.title}
            </p>
          </div>
          <div className="w-full border-b pb-3 ">
            <span className="font-[500] text-[18px] text-black">Service</span>
            <p className="font-[400] text-[18px] text-gray-500">
              {jobdetails?.service}
            </p>
          </div>
          <div className="w-full border-b pb-3 ">
            <span className="font-[500] text-[18px] text-black">Category</span>
            <p className="font-[400] text-[18px] text-gray-500">
              {jobdetails?.category}
            </p>
          </div>
          <div className="w-full border-b pb-3 ">
            <span className="font-[500] text-[18px] text-black">
              Subcategory
            </span>
            <p className="font-[400] text-[18px] text-gray-500">
              {jobdetails?.subcategory}
            </p>
          </div>
          <div className="w-full border-b pb-3 ">
            <span className="font-[500] text-[18px] text-black">Budget</span>
            <p className="font-[400] text-[18px] text-gray-500">
              {jobdetails?.budget}$
            </p>
          </div>
          <div className="w-full border-b pb-3 ">
            <span className="font-[500] text-[18px] text-black">Status</span>
            <p
              className={
                jobdetails?.status === "active"
                  ? "font-[400] text-[18px] text-green-500"
                  : "font-[400] text-[18px] text-red-500"
              }
            >
              {jobdetails?.status}
            </p>
          </div>
          <div className="w-full border-b pb-3 ">
            <span className="font-[500] text-[18px] text-black">
              Payment Status
            </span>
            <p
              className={
                jobdetails?.paymentStatus === "success"
                  ? "font-[400] text-[18px] text-green-500"
                  : "font-[400] text-[18px] text-red-500"
              }
            >
              {jobdetails?.paymentStatus}
            </p>
          </div>
          <div className="w-full border-b pb-3 ">
            <span className="font-[500] text-[18px] text-black">Address</span>
            <p className="font-[400] text-[18px] text-gray-500">
              {jobdetails?.address}
            </p>
          </div>
          <div className="w-full border-b pb-3 ">
            <span className="font-[500] text-[18px] text-black">Date</span>
            <p className="font-[400] text-[18px] text-gray-500">
              {dateFormate(jobdetails?.date)}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-2 gap-5 py-6 ">
      <div className="bg-gray-50 p-5 rounded-[15px]">
          <p className="font-[500] text-[18px] text-black">Provider </p>
          <div className="w-full flex items-center gap-3 pt-4">
            <img
              src={jobdetails?.provider?.profilePicture}
              alt=""
              className="w-12 h-12 rounded-full object-cover"
            />

            <div className="flex flex-col">
              <p className="font-[400] text-[18px] text-gray-500">
                {jobdetails?.provider?.name}
              </p>

              <p className="font-[400] text-[18px] text-gray-500">
                {jobdetails?.provider?.email}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 p-5 rounded-[15px]">
          <p className="font-[500] text-[18px] text-black">User</p>
          <div className="w-full flex items-center gap-3 pt-4">
            <img
              src={jobdetails?.user?.profilePicture}
              alt=""
              className="w-12 h-12 rounded-full object-cover"
            />

            <div className="flex flex-col">
              <p className="font-[400] text-[18px] text-gray-500">
                {jobdetails?.user?.name}
              </p>

              <p className="font-[400] text-[18px] text-gray-500">
                {jobdetails?.user?.email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
