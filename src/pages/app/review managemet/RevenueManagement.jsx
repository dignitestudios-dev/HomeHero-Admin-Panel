import React, { useEffect, useState } from "react";
import CustomerReveiw from "../../../components/app/reveiw/CustomerReveiw";
import axios from "../../../axios";

const RevenueManagement = () => {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState({});
  const [reviewsCounts, setReviewsCounts] = useState([]);
  const [totalReviews, setTotalReviews] = useState(0);
  const [customercomments, setCustomercomments] = useState([]);
  const fetchCustomerreviews = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `/review/get-review-counts`
        
      );
      if(response?.status === 200){
        setReviewsCounts(response?.data.data.reviewCounts);
      setTotalReviews(response?.data.data.totalCount);
      setPagination(response?.data.pagination);
      }
      
    } catch (error) {
      console.error("Error fetching providers:", error);
    } finally {
      setLoading(false);
    }
  };
 
  const fetchCustomerComments = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `/review/get-reviews?page=1&limit=10`
        
      );
      if(response?.status === 200){
        setCustomercomments(response?.data?.data?.reviews);
     
      setPagination(response?.data.pagination);
      }
      
    } catch (error) {
      console.error("Error fetching providers:", error);
    } finally {
      setLoading(false);
    }
  };
console.log(customercomments,'customercomments');

  useEffect(() => {
    fetchCustomerreviews();
    fetchCustomerComments();
  }, [currentPage]);
  
  return (
    <div className="p-5">
      <h2 className="text-lg font-semibold">Customer Reviews</h2>
      <CustomerReveiw reviewsCounts={reviewsCounts} pagination={pagination} setCurrentPage={setCurrentPage} totalReviews={totalReviews} customercomments={customercomments} />
    </div>
  );
};

export default RevenueManagement;
