import { useState } from "react";

import Pagination from "../../global/Pagination";
import { useNavigate } from "react-router";
import UserModalReport from "./UserModalReport";
import { person } from "../../../assets/export";
import { dateFormate } from "../../../lib/helpers";

export default function ReportedUsers({ reports, pagination, setCurrentPage }) {
  const [isopen, setIsopen] = useState(false);
 
const [report, setReport] = useState(null);
  return (
    <div>
      <div className="bg-gray-50 mt-3 rounded-[25px] overflow-x-auto p-4">
        <div className="hidden md:grid grid-cols-12 gap-4 bg-white rounded-lg px-4 text-black font-semibold text-[12px] mb-4">
          <div className="col-span-2 py-3 text-left">Blocked types</div>
          <div className="col-span-2 py-3 text-left">Blocked By</div>
          <div className="col-span-2 py-3 text-left">Reason</div>
          <div className="col-span-2 py-3 text-left">Blocked By email</div>
          <div className="col-span-2 py-3 text-left">Report Date</div>
          <div className="col-span-2 py-3 text-left pl-6">Action</div>
        </div>

        {reports.map((report, index) => (
          <div key={report._id}>
            <div className="md:hidden  bg-opacity-40 rounded-[15px] p-4 mb-4">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={person}
                  alt="Profile"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-[14px] text-black">
                    {report.reportedByUser
                      ? report.reportedByUser.name
                      : report.reportedByProvider
                      ? report.reportedByProvider.name
                      : "Unknown"}
                  </p>
                  <p className="text-[12px] text-black/70">@mikesmith</p>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center text-[12px] text-black">
                  <span className="w-24 opacity-70">Email:</span>
                  <span>mikesmith12@gmail.com</span>
                </div>
                <div className="flex items-center text-[12px] text-black">
                  <span className="w-24 opacity-70">Contact:</span>
                  <span>(619) 602-6578 x6033</span>
                </div>
                <div className="flex items-center text-[12px] text-black">
                  <span className="w-24 opacity-70">Registered:</span>
                  <span>11/22/44</span>
                </div>
              </div>

              <button
                onClick={() => setIsopen(!isopen)}
                className="bg-[#2F7EF7] flex items-center justify-center w-full text-black px-4 py-2 rounded-[8px] text-[12px] gap-2"
              >
                {/* <img src={view} alt="" className="w-5 h-5" /> */}
                View
              </button>
            </div>

            <div className="hidden md:grid grid-cols-12 gap-6 items-center  py-2 mb-4 text-black text-[12px]">
              <div className="col-span-2 capitalize flex items-center justify-start gap-3">
                <span className="pl-6">{report.type}</span>
              </div>

              <div className="col-span-2  capitalize flex items-center justify-start gap-3">
                <span>
                  {report.reportedByUser
                    ? report.reportedByUser.name
                    : report.reportedByProvider
                    ? report.reportedByProvider.name
                    : "Unknown"}
                </span>
              </div>
              <div className="col-span-2 text-left break-words text-wrap truncate max-w-xs">
  {report.reason?.length > 10
    ? report.reason.slice(0, 10) + "..."
    : report.reason}
</div>
<div className="col-span-2 text-left truncate max-w-[180px]">
  {report.reportedByUser?.email
    ? report.reportedByUser.email.length > 8
      ? report.reportedByUser.email.slice(0, 10) + "..."
      : report.reportedByUser.email
    : report.reportedByProvider?.email
    ? report.reportedByProvider.email.length > 10
      ? report.reportedByProvider.email.slice(0, 10) + "..."
      : report.reportedByProvider.email
    : "Unknown"}
</div>
              <div className="col-span-2 text-left">{dateFormate(report.createdAt)}</div>
              <div className="col-span-2 flex justify-start">
                <button
                  onClick={() => {setIsopen(!isopen); setReport(report)}}
                  className=" bg-[#62466B] flex items-center justify-end px-4 py-2 rounded-[8px] gap-2 text-white"
                >
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end">
        <Pagination pagination={pagination} setCurrentPage={setCurrentPage} />
      </div>
      {isopen&&<UserModalReport isOpen={isopen} setIsOpen={setIsopen} report={report} />}
    </div>
  );
}
