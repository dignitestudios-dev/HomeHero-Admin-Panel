import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import axios from "../../../axios";
import SkeletonLoader from "../../../components/app/user/SkeletonLoader";
import { SkeletonPayment } from "../../../components/app/payment/SkeletonPayment";
import { dateFormate } from "../../../lib/helpers";
import { ErrorToast, SuccessToast } from "../../../components/global/Toaster";
export const DisputeDetails = () => {
  const location = useLocation();
  const dispute = location.state;
  const [loading, setLoading] = useState(false);
  const [disputeDetails, setDisputeDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDisputeDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `/disputes/get-dispute-details/${dispute?._id}`
        );
        setDisputeDetails(response?.data?.data.disputeDetails);
      } catch (error) {
        console.error("Error fetching dispute details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDisputeDetails();
  }, [dispute?._id]);

  const openImage = (url) => {
    window.open(url, "_blank");
  };


  const handleResolveDispute = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        `/disputes/resolve-dispute-user?jobID=${disputeDetails?.jobDetails?._id}&transactionID=${disputeDetails?.transactionID}`
      );
      if(response?.status === 200){
        SuccessToast(response?.data?.data.message || "Dispute resolved successfully");
        navigate(`/app/disputes`);
      }
    } catch (error) {
      ErrorToast(error?.response?.data?.message || "Error resolving dispute");
    } finally {
      setLoading(false);
    }
  }
  const handleRejectDispute = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        `/disputes/resolve-dispute-provider?jobID=${disputeDetails?.jobDetails?._id}&transactionID=${disputeDetails?.transactionID}`
      );
      if(response?.status === 200){
        SuccessToast(response?.data?.message || "Dispute rejected successfully");
        navigate(`/app/disputes`);
      }
    } catch (error) {
      ErrorToast(error?.response?.data?.message || "Error rejecting dispute");
    } finally {
      setLoading(false);
    }
  }
  console.log(disputeDetails, "disputeDetails>>>>>");
  return loading ? (
    <SkeletonPayment />
  ) : (
    <div>
      <div className="flex flex-col p-5">
        <h2 className="text-2xl font-semibold py-6">Job Dispute</h2>

        <div className="flex flex-col gap-3  bg-gray-50 backdrop-blur-[50px] rounded-[15px]">
          <div className="w-full p-5 space-y-5">
            <div className="w-full border-b pb-3 ">
              <span className="font-[500] text-[18px] text-black">
                Job Title
              </span>
              <p className="font-[400] text-[18px] text-gray-500">
                {disputeDetails?.jobDetails?.title}
              </p>
            </div>
            <div className="w-full border-b pb-3 ">
              <span className="font-[500] text-[18px] text-black">Service</span>
              <p className="font-[400] text-[18px] text-gray-500">{disputeDetails?.jobDetails?.service?.name}</p>
            </div>
            <div className="w-full border-b pb-3 ">
              <span className="font-[500] text-[18px] text-black">
                Category
              </span>
              <p className="font-[400] text-[18px] text-gray-500">{disputeDetails?.jobDetails?.category?.name}</p>
            </div>
            <div className="w-full border-b pb-3 ">
              <span className="font-[500] text-[18px] text-black">
                Subcategory
              </span>
              <p className="font-[400] text-[18px] text-gray-500">{disputeDetails?.jobDetails?.subcategory?.name}</p>
            </div>
            <div className="w-full border-b pb-3 ">
              <span className="font-[500] text-[18px] text-black">Budget</span>
              <p className="font-[400] text-[18px] text-gray-500">{disputeDetails?.jobDetails?.budget}</p>
            </div>
          
            
            
            <div className="w-full border-b pb-3 ">
              <span className="font-[500] text-[18px] text-black">Date</span>
              <p className="font-[400] text-[18px] text-gray-500">{dateFormate(disputeDetails?.jobDetails?.createdAt)}</p>
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 gap-5 py-6 ">
          <div className="col-span-2 grid grid-cols-3 gap-3">
            {/* {disputeDetails?.disputes.pictures?.map((i)=>(
                        <div key={i}>
                          <img
                            src={i}
                            alt="User Profile"
                            className="w-full h-[200px] object-cover rounded-[15px]"
                          />
                        </div>
                      ))} */}
          </div>
          {disputeDetails?.disputeProvider?.reason ? (
          <div className="bg-gray-50 p-5 rounded-[15px] flex flex-col">
            <p className="font-[500] text-[18px] text-black">Provider </p>
            <div className="w-full flex items-center gap-3 pt-4">
              <img
                src={disputeDetails?.jobDetails?.provider?.profilePicture}
                alt=""
                className="w-12 h-12 rounded-full object-cover"
              />

              <div className="flex flex-col">
                <p className="font-[400] text-[18px] text-gray-500">{disputeDetails?.jobDetails?.provider?.name}</p>

                <p className="font-[400] text-[18px] text-gray-500">{disputeDetails?.jobDetails?.provider?.email}</p>
              </div>
             
            </div>
            <div className="pt-4">
              <p>
                {disputeDetails?.disputeProvider?.reason}
              </p>
            </div>
            <div className="grid grid-cols-4 gap-2">{disputeDetails?.disputeProvider?.pictures?.map((i)=>(
                        <div className="cursor-pointer" key={i}>
                          <img onClick={()=>openImage(i)}
                            src={i}
                            alt="User Profile"
                            className="w-[100px] h-[100px] object-cover rounded-[15px]"
                          />
                        </div>
                      ))}</div>
            <div className="flex justify-end  pt-4">
              <button onClick={handleRejectDispute} className="bg-[#62466B] text-white rounded-md px-4 py-2">
                Approve Payment
              </button>
            </div>
          </div>
          ):""}









          {disputeDetails?.disputeUser?.reason ? (
          <div className="bg-gray-50 p-5 rounded-[15px] flex flex-col">
            <p className="font-[500] text-[18px] text-black">User</p>
            <div className="w-full flex items-center gap-3 pt-4">
              <img
                src={disputeDetails?.jobDetails?.user?.profilePicture}
                alt=""
                className="w-12 h-12 rounded-full object-cover"
              />

              <div className="flex flex-col">
                <p className="font-[400] text-[18px] text-gray-500">{disputeDetails?.jobDetails?.user?.name}</p>

                <p className="font-[400] text-[18px] text-gray-500">{disputeDetails?.jobDetails?.user?.email}</p>
              </div>
             
            </div>
            <div className="py-4">
              <p>
                {disputeDetails?.disputeUser?.reason}
              </p>
            </div>
            <div className="grid grid-cols-4 gap-2">{disputeDetails?.disputeUser?.pictures?.map((i)=>(
                        <div className="cursor-pointer" key={i}>
                          <img onClick={()=>openImage(i)}
                            src={i}
                            alt="User Profile"
                            className="w-[100px] h-[100px] object-cover rounded-[15px]"
                          />
                        </div>
                      ))}</div>
            <div className="flex justify-end  pt-4">
              <button onClick={handleResolveDispute} className="bg-[#62466B] text-white rounded-md px-4 py-2">
                Refund
              </button>
            </div>
          </div>
          ):""}
        </div>
      </div>
    </div>
  );
};
