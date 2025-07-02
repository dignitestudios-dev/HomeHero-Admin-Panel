import React, { useEffect, useState } from "react";
import ReportedUsers from "../../../components/app/report/ReportedUsers";
import axios from "../../../axios";
const Report = () => {
  const [reports, setReports] = useState([]);
  const [pagination, setPagination] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const[loading, setLoading] = useState(false);
const [search, setSearch] = useState('');
const [update, setUpdate] = useState(false);
  
  useEffect(() => {
    const fetchReports = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/report/get-reports?page=${currentPage}&limit=10`);
        setReports(response.data.data.reports);
        setPagination(response.data.pagination);
      } catch (error) {
        console.error("Error fetching reports:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchReports();
  },[]);
console.log(reports,'reports');
  return (
    <div>
      <div className="">
        <div className="text-2xl font-semibold">Reports</div>
        <ReportedUsers reports={reports} pagination={pagination} setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
};

export default Report;
