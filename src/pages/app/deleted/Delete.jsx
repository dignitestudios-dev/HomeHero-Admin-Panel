import React, { useEffect, useState } from "react";
import DeleteList from "../../../components/app/delete/DeleteList";
import axios from "../../../axios";
import { SuccessToast } from "../../../components/global/Toaster";
import { useNavigate } from "react-router";
import SkeletonLoader from "../../../components/app/user/SkeletonLoader";
export const Delete = () => {
  const [deleteData, setDeleteData] = useState([]);
  const [pagination, setPagination] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [update, setUpdate] = useState(false);
  const [blockLoader, setBlockLoader] = useState(false);
  const fetchDeleted = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `/provider/get-blocked-providers?page=${currentPage}&limit=10`
      );
      setDeleteData(response?.data?.data?.providers);
      setPagination(response?.data?.pagination);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching deleted:", error);
    }
  };
  useEffect(() => {

    fetchDeleted();
  }, [currentPage]);
  const navigate = useNavigate();
  
  const handleDelete = async (id) => {
    try {
      setBlockLoader(true);
      const data = {
        providerID:id,
        isBlocked: false,
      };
      const response = await axios.post(
        `/provider/toggle-block-provider`,
        data
      );
      if (response?.status === 200) {
        SuccessToast("Provider unblocked successfully");
        fetchDeleted()
      }
    } catch (error) {
      console.error("Error fetching provider:", error);
    } finally {
      setBlockLoader(false);
    }
  };
 
  return (
    <div>

      <p className="text-2xl font-semibold">Blocked Providers</p>
    {loading ? (
            <SkeletonLoader/>
          ) : (
             <DeleteList
        handleDelete={handleDelete}
        deleteData={deleteData}
        pagination={pagination}
        setCurrentPage={setCurrentPage}
        blockLoader={blockLoader}
        
      />) }
    </div>
  );
};
