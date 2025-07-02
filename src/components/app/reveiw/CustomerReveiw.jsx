import React from "react";
import { FaStar } from "react-icons/fa6";
import { person } from "../../../assets/export";

const CustomerReveiw = ({reviewsCounts , totalReviews,customercomments}) => {

 
  

  const reviews = [5, 4, 3, 2, 1].map((stars) => ({
    stars,
    count: reviewsCounts[stars] || 0,
  }));
  
  
  return (
    <div className="w-full h-full bg-white py-6">
    <div className="w-full p-4 border rounded shadow-md">
      <p className="text-yellow-500 text-xl flex items-center">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} />
        ))}
        <span className="text-gray-400 text-sm">
          {" "}
          ({totalReviews} reviews)
        </span>
      </p>
      <div className="space-y-2 mt-2">
        {reviews.map((item) => (
          <div key={item.stars} className="flex items-center space-x-2">
            <span>{item.stars} stars</span>
            <div className="flex-1 bg-gray-200 rounded h-3 relative">
              <div
                className="bg-[#775B84] h-3 rounded"
                style={{ width: `${totalReviews ? (item.count / totalReviews) * 100 : 0}%` }}
              ></div>
            </div>
            <span>{item.count}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
  {customercomments.map((review, index) => (
    <div
      key={index}
      className="w-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="flex flex-col gap-4">
        {/* Top section - user */}
        <div className="flex items-center gap-4">
          <img
            src={review?.user?.profilePicture || person}
            alt="User"
            className="w-14 h-14 rounded-full object-cover bg-slate-100"
          />
          <div>
            <p className="text-base font-semibold text-gray-800">{review?.user?.name}</p>
            <p className="text-xs text-gray-500">{review?.user?.email}</p>
          </div>
        </div>

        {/* Star Rating */}
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`text-sm ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`}
            />
          ))}
        </div>

        {/* Comment */}
        <p className="text-sm text-gray-700 leading-relaxed">{review.review}</p>

        {/* Provider section */}
        <div className="flex items-center gap-2 mt-3">
          <img
            src={review?.provider?.profilePicture || person}
            alt="Provider"
            className="w-8 h-8 rounded-full bg-slate-200"
          />
          <p className="text-sm text-gray-600">{review?.provider?.name}</p>
        </div>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default CustomerReveiw;
