import { useEffect, useState } from "react";
import DisputesList from "../../../components/app/dispute/DisputesList";
import axios from "../../../axios";

export const Disputes = () => {
    const [loading,setLoading] = useState(false);
    const [disputes,setDisputes] = useState([]);
    const [pagination,setPagination] = useState({});
    const [currentPage,setCurrentPage] = useState(1);
    
    useEffect(() => {
        const fetchDisputes = async () => {
          try {
            setLoading(true);
            const response = await axios.get(`/disputes/get-ongoing-disputes?page=${currentPage}&limit=10`);
            setDisputes(response?.data?.data.disputedJobs);
            setPagination(response?.data?.pagination);
          } catch (error) {
            console.error("Error fetching disputes:", error);
          } finally {
            setLoading(false);
          }
        };
        fetchDisputes();
      }, [currentPage]);
      console.log(disputes,'disputes>>>>>');
    return (
       <div className="p-5">
             <h2 className="text-2xl font-semibold mb-4">Disputes</h2>
          <DisputesList disputes={disputes} pagination={pagination} setCurrentPage={setCurrentPage}/>
           </div>
    );
};