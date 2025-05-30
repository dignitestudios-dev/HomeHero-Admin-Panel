import React, { useState } from "react";
import ReportedUsers from "../../../components/app/report/ReportedUsers";

const Report = () => {
  return (
    <div>
      <div className="">
        <div className="text-2xl font-semibold">Reports</div>
        <ReportedUsers />
      </div>
    </div>
  );
};

export default Report;
