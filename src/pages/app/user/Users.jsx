import React from "react";
import UserList from "../../../components/app/user/UserTable";
import UserFilter from "../../../components/app/user/UserFilter";

const User = () => {
  return (
    <div>
      <div className="flex justify-between p-5">
        <h3 className="text-black text-[28px] font-[500]">Users</h3>
        <UserFilter />
      </div>
      <UserList />
    </div>
  );
};

export default User;
