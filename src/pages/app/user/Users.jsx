import React, { useEffect, useState } from "react";
import UserList from "../../../components/app/user/UserTable";
import UserFilter from "../../../components/app/user/UserFilter";
import axios from "../../../axios";
import SkeletonLoader from "../../../components/app/user/SkeletonLoader";

const User = () => {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({});
  const [currentPage, setCurrentPage] = useState({});
  const[loading, setLoading] = useState(false);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/user/get-users?page=${currentPage}&limit=10`);
        setData(response?.data?.data?.users);
        setPagination(response?.data?.pagination);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [currentPage]);
  return (
    <div>
      <div className="flex justify-between p-5">
        <h3 className="text-black text-[28px] font-[500]">Users</h3>
        <UserFilter />
      </div>
      {loading ? (
        <SkeletonLoader/>
      ) : (
        <UserList data={data} pagination={pagination} setCurrentPage={setCurrentPage}  />
      )}
    </div>
  );
};

export default User;
