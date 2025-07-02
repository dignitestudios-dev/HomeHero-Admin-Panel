import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "../../../axios";
import UserDetailReview from "../../../components/app/user/UserDetailReview";
const UserDetails = () => {

  const [ActiveTab, setActiveTab] = useState("All");
  const location = useLocation();
  const user = location.state;

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `/user/get-user-reviews/${user?._id}?page=1&limit=10`
        );
        setReviews(response?.data?.data?.reviews);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    if (user?._id) {
      fetchReviews();
    }
  }, [user?._id]);

  console.log(reviews,'review');
  return (
    <div className="p-5">
      <h2 className="text-2xl font-semibold pb-3">Users Details</h2>
      <div className="flex flex-col gap-3">
        <div className=" bg-gray-100 backdrop-blur-[50px] rounded-[15px]  items-center p-5 flex gap-24">
          <div className="flex items-center gap-5 ">
            <img
              src={user?.profilePicture}
              className="rounded-full w-[100px] h-[100px] object-cover "
              alt="person"
            />
            <div className="flex  gap-1">
              <h3 className="text-black text-[20px] font-[500]">{user?.name}</h3>
              <p className="text-black text-[14px] font-normal">{user?.username}</p>
            </div>
          </div>
          <div>
           
            <div className=" flex items-center gap-20">
              
                <div className="flex items-center gap-3">
                  <p className="font-[500] text-[18px] text-black ">Email:</p>
                  <p className="font-[400] text-[18px] text-black ">
                    {user?.email}
                  </p>
                </div>
             
              
                <div className="flex items-center gap-3">
                  <p className="font-[500] text-[18px] text-black ">Phone:</p>
                  <p className="font-[400] text-[18px] text-black ">
                    {user?.phone}
                  </p>
                </div>
             
            </div>
          </div>
        </div>
        <div className=" h-[300px] overflow-auto py-5 bg-gray-100 backdrop-blur-[50px] rounded-[15px] p-3">
          <div className="flex items-center gap-3">
            <h3 className="font-[500] text-[20px] text-black ">Reviews</h3>
            <div className="flex items-center gap-1">
              {/* <img src={star} className="w-4" alt="review star" /> */}
              <span className="font-[400] text-[14px] text-black">{reviews?.length}</span>
            </div>
          </div>
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <UserDetailReview key={index} review={review} />
              
            ))
          ) : (
            <p className="text-sm text-black/60">No reviews available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
