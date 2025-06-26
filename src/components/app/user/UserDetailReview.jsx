// import  from "react";
// import { person, star } from "../../../assets/export";
import { dateFormate } from "../../../lib/helpers";
import { CiStar } from "react-icons/ci";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
const UserDetailReview = ({review }) => {
  console.log(review,'reviewdfdsfdsf');
  const totalStars = 5;
const rating = review?.rating || 0; 

  return (
    <div>
      <div className="w-full flex flex-col p-4 gap-2 my-2 bg-white rounded-[15px]">
        <div className="w-full flex items-start justify-between my-2">
          <div className="flex items-center ">
{Array.from({ length: totalStars }, (_, index) => {
  const starNumber = index + 1;

  if (rating >= starNumber) {
    return <FaStar key={index} color="#FBBF24" />; 
  } else if (rating >= starNumber - 0.5) {
    return <FaStarHalfAlt key={index} color="#FBBF24" />; 
  } else {
    return <CiStar key={index} color="#FBBF24" />; 
  }
})}    
          </div>
          <p className="text-[12px] font-normal text-black">{ dateFormate(review?.createdAt)}</p>
        </div>
        
        <div className="flex flex-col gap-2">
        <div className="flex items-start gap-2">
          <img src={review?.provider?.profilePicture} alt="" className="w-14 h-14 rounded-full" />
          <p className="text-[14px] flex flex-col gap-1 text-black font-medium">{review?.provider?.name} <span className="text-[12px] text-black/60">{review?.provider?.email}</span>
          <span className="text-[12px] text-black/60">{review?.review}</span></p>
        </div>
          
        </div>
      </div>
    </div>
  );
};

export default UserDetailReview;
