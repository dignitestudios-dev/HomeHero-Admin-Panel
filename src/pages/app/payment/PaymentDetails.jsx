import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "../../../axios";
import { dateFormate } from "../../../lib/helpers";
import { SkeletonPayment } from "../../../components/app/payment/SkeletonPayment";
import { ErrorToast, SuccessToast } from "../../../components/global/Toaster";

export const PaymentDetails = () => {
const location = useLocation();
const payment = location.state;
const [loading,setLoading] = useState(false);
const[paymentdetails,setPaymentdetails] = useState({});

useEffect(() => {
    const fetchPaymentDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/payments/get-job-details/${payment?._id}`);
        setPaymentdetails(response?.data.data.jobTransaction);
      } catch (error) {
        console.error("Error fetching job details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPaymentDetails();
  }, [payment?._id]);
  
  const handleApprove = async () => {
    try {
      setLoading(true);
      const response = await axios.post(`/payments/pay-provider?transactionID=${paymentdetails._id}`);
      console.log(response.data);
      if(response?.status === 200){
        SuccessToast(response?.data?.message);
      }
    } catch (error) {
      ErrorToast(error.response?.data?.message || "Error approving payment");
    } finally {
      setLoading(false);
    }
  };
  console.log(paymentdetails,"paymentdetailsid");
    return (
        <div>
            {loading ? (
            <SkeletonPayment/>
            ) : (
            <div className="flex flex-col p-5">
                  <h2 className="text-2xl font-semibold py-6">Job Details</h2>
                  <div className="flex flex-col gap-3  bg-gray-50 backdrop-blur-[50px] rounded-[15px]">
                    <div className="w-full p-5 space-y-5">
                      <div className="w-full border-b pb-3 ">
                        <span className="font-[500] text-[18px] text-black">Job Title</span>
                        <p className="font-[400] text-[18px] text-gray-500">
                          {paymentdetails?.job?.title}
                        </p>
                      </div>
                      <div className="w-full border-b pb-3 ">
                        <span className="font-[500] text-[18px] text-black">Service</span>
                        <p className="font-[400] text-[18px] text-gray-500">
                          {paymentdetails?.job?.service?.name}
                        </p>
                      </div>
                      <div className="w-full border-b pb-3 ">
                        <span className="font-[500] text-[18px] text-black">Category</span>
                        <p className="font-[400] text-[18px] text-gray-500">
                          {paymentdetails?.job?.category?.name}
                        </p>
                      </div>
                      <div className="w-full border-b pb-3 ">
                        <span className="font-[500] text-[18px] text-black">
                          Subcategory
                        </span>
                        <p className="font-[400] text-[18px] text-gray-500">
                          {paymentdetails?.job?.subcategory?.name}
                        </p>
                      </div>
                      <div className="w-full border-b pb-3 ">
                        <span className="font-[500] text-[18px] text-black">Budget</span>
                        <p className="font-[400] text-[18px] text-gray-500">
                          {paymentdetails?.job?.budget}
                        </p>
                      </div>
                     
                     
                      
                      <div className="w-full border-b pb-3 ">
                        <span className="font-[500] text-[18px] text-black">Date</span>
                        <p className="font-[400] text-[18px] text-gray-500">
                          {dateFormate(paymentdetails?.estimatedStartDate)}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full grid grid-cols-2 gap-5 py-6 ">
                  <div className="bg-gray-50 p-5 rounded-[15px]">
                      <p className="font-[500] text-[18px] text-black">Provider </p>
                      <div className="w-full flex items-center gap-3 pt-4">
                        <img
                          src={paymentdetails?.job?.provider?.profilePicture}
                          alt=""
                          className="w-12 h-12 rounded-full object-cover"
                        />
            
                        <div className="flex flex-col">
                          <p className="font-[400] text-[18px] text-gray-500">
                            {paymentdetails?.job?.provider?.name}
                          </p>
            
                          <p className="font-[400] text-[18px] text-gray-500">
                            {paymentdetails?.job?.provider?.email}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-5 rounded-[15px]">
                      <p className="font-[500] text-[18px] text-black">User</p>
                      <div className="w-full flex items-center gap-3 pt-4">
                        <img
                          src={paymentdetails?.job?.user?.profilePicture}
                          alt=""
                          className="w-12 h-12 rounded-full object-cover"
                        />
            
                        <div className="flex flex-col">
                          <p className="font-[400] text-[18px] text-gray-500">
                            {paymentdetails?.job?.user?.name}
                          </p>
            
                          <p className="font-[400] text-[18px] text-gray-500">
                            {paymentdetails?.job?.user?.email}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                  <button className="w-24 bg-[#62466B] text-white hover:bg-[#62466B]/80 px-4 py-2 rounded-[8px]" onClick={handleApprove}>Approve</button>
                  </div>
                </div>
            )
          }
        </div>
     
    );
};