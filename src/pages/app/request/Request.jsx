import React, { useEffect, useState } from "react";

import RequestTable from "../../../components/app/request/RequestTable";

import RequestFilter from "../../../components/app/request/RequestFilter";
import ServicesCreateModal from "../../../components/app/request/ServicesCreateModal";

import axios from "../../../axios";
import SkeletonLoader from "../../../components/app/user/SkeletonLoader";
export default function Requests() {
  const [selectedRequest, setSelectedRequest] = useState(false);
const [services, setServices] = useState([]);
const [search, setSearch] = useState('');
const [update, setUpdate] = useState(false);
const [pagination, setPagination] = useState({}); 
const [currentPage, setCurrentPage] = useState(1);
const [loading, setLoading] = useState(false);
const [refetch, setRefetch] = useState(false);
useEffect(() => {
  const fetchRequests = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/service/get-all-subcategories?page=${currentPage}&limit=10&search=${search}`);
      setServices(response?.data?.data?.subcategories);
      setPagination(response?.data?.pagination);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching requests:", error);
    }
  };
  fetchRequests();
}, [update, currentPage,refetch]);

  return (
    <div className="p-5">
      <div className="flex justify-between py-3">
        <h1 className="text-2xl font-bold mb-4">Services</h1>
        <button
          onClick={() => setSelectedRequest(!selectedRequest)}
          className="w-[168px] h-[44px] text-[#FFFFFF] bg-[linear-gradient(180deg,_#D9BBF9_0%,_#775B84_90%)] rounded-[8px]"
        >
          Create
        </button>
      </div>
      <div className="flex justify-end">
        <RequestFilter setSearch={setSearch} search={search} setUpdate={setUpdate} setCurrentPage={setCurrentPage}/>
      </div>
{loading ? (
  <SkeletonLoader/>
) : (
  
      <RequestTable services={services} pagination={pagination} setCurrentPage={setCurrentPage} refetch={refetch} setRefetch={setRefetch} />
)}
      <ServicesCreateModal
        isOpen={selectedRequest}
        setIsOpen={setSelectedRequest}
        services={services}
        refetch={refetch}
        setRefetch={setRefetch}
      />
    </div>
  );
}
