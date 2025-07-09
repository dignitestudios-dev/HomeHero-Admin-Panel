import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import JobList from "../../../components/job/JobList";
import { FilterBooking } from "../../../components/app/booking/FilterBooking";
import axios from "../../../axios";
import JobFilter from "../../../components/job/JobFilter";
import SkeletonLoader from "../../../components/app/user/SkeletonLoader";

export const JobRequest = () => {
  const [jobrequest, setJobrequest] = useState([]);
  const [search, setSearch] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("active");
  const [pagination, setPagination] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [update, setUpdate] = useState(false);
  const[loading, setLoading] = useState(false);
  
    const fetchJobRequest = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `/job/get-jobs?page=${currentPage}&limit=10&search=${search}&date=${date? date?.toISOString().split("T")[0] : ""}&status=${status}`
        );
        setJobrequest(response?.data?.data?.jobs);
        setPagination(response?.data?.pagination);
      } catch (error) {
        console.error("Error fetching job request:", error);
      } finally {
        setLoading(false);
      }
    };
useEffect(() => {
  fetchJobRequest();
}, [update]);
   
 console.log(jobrequest,'jobrequest');
  return (
    <div>
      <div className="flex justify-between p-5">
        <h2 className="text-2xl font-bold mb-4">Job Request</h2>
        <div>

        <JobFilter setSearch={setSearch} search={search} setDate={setDate} date={date} setStatus={setStatus} status={status} setUpdate={setUpdate}/>
          </div>
      </div>
      {loading ? (
        <SkeletonLoader/>
      ) : (
        
      <JobList jobrequest={jobrequest} pagination={pagination} setCurrentPage={setCurrentPage}/>
      )}
    </div>
  );
};
