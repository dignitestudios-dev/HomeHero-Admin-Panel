// import  from "react";
// import { person, star } from "../../../assets/export";

import { person } from "../../../assets/export";

const UserDetailReview = () => {
  return (
    <div>
      <div className="w-full flex flex-col p-4 gap-2 my-2 bg-white rounded-[15px]">
        <div className="w-full flex items-start justify-between">
          {/* <div className="flex gap-1">
            <img src={star} alt="" className="w-[16px]" />
            <img src={star} alt="" className="w-[16px]" />
            <img src={star} alt="" className="w-[16px]" />
            <img src={star} alt="" className="w-[16px]" />
            <img src={star} alt="" className="w-[16px]" />
          </div> */}
          <p className="text-[12px] font-normal text-black">21Feb</p>
        </div>
        <div>
          <p className="text-black text-[12px] font-[400]">
            Amazing Show. I booked on Monday and I got. I’m highly impressed
            with their services. Highly recommended!
          </p>
        </div>
        <div className="flex items-center gap-2">
          <img src={person} alt="" className="w-9" />
          <p className="text-[14px] text-black font-medium">mike Smith</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetailReview;
