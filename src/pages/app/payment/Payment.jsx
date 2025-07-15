import React, { useState } from "react";
import { PaymentsEarnings } from "../../../components/app/payment/PaymentsEarnings";
import axios from "../../../axios";
import { useEffect } from "react";
import SkeletonLoader from "../../../components/app/user/SkeletonLoader";
export const Payment = () => {
  const [loading, setLoading] = useState(false);
  const [payments, setPayments] = useState([]);
  const [pagination, setPagination] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  


  
  useEffect(() => {
    const fetchPayments = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/payments/get-job-payments?page=${currentPage}&limit=10`);
        setPayments(response?.data?.data?.pendingPaymentJobs);
        setPagination(response?.data?.pagination);
      } catch (error) {
        console.error("Error fetching payments:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPayments();
  }, [currentPage]);
  console.log(payments,'payments>>>>>');
  return (
    <div className="p-5">
      <h2 className="text-2xl font-semibold mb-4">Payments</h2>
      {loading ? (
      <SkeletonLoader/>
      ) : (
        <PaymentsEarnings payments={payments} pagination={pagination} setCurrentPage={setCurrentPage}/>
      )}
    </div>
  );
};
