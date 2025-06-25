import React, { useEffect, useState } from "react";
import UserList from "../../../components/app/user/UserTable";
import UserFilter from "../../../components/app/user/UserFilter";
import axios from "../../../axios";

const User = () => {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({});
console.log(pagination, "pagination");
  console.log(data, "data");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/user/get-users?page=1&limit=10");
        setData(response?.data?.data?.users);
        setPagination(response?.data?.pagination);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="flex justify-between p-5">
        <h3 className="text-black text-[28px] font-[500]">Users</h3>
        <UserFilter />
      </div>
      <UserList data={data} pagination={pagination}/>
    </div>
  );
};

export default User;
