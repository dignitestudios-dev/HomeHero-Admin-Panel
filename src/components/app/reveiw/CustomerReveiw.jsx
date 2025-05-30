import React from "react";
import { FaStar } from "react-icons/fa6";
import { person } from "../../../assets/export";

const CustomerReveiw = () => {
  const customerreviews = [
    {
      name: "Mike Smith",
      location: "New York, USA",
      price: "$50.00",
      rating: 2,
      review:
        "Amazing product. I booked on Monday and I got my order on the next day. I'm highly impressed with their services. Highly recommended!",
    },
    {
      name: "Sarah Johnson",
      location: "Los Angeles, USA",
      price: "$75.00",
      rating: 5,
      review: "Fantastic service and quick delivery. Quality is top-notch!",
    },
    {
      name: "David Brown",
      location: "Chicago, USA",
      price: "$60.00",
      rating: 4,
      review: "Great experience overall. Will order again!",
    },
  ];
  const reviews = [
    { stars: 5, count: 10 },
    { stars: 4, count: 2 },
    { stars: 3, count: 3 },
    { stars: 2, count: 4 },
    { stars: 1, count: 5 },
  ];
  const totalReviews = reviews.reduce((sum, review) => sum + review.count, 0);
  return (
    <div>
      <div className="w-full h-full bg-white py-6">
        <div className="w-full p-4 border rounded shadow-md">
          <p className="text-yellow-500 text-xl flex">
            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
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
                    style={{ width: `${(item.count / totalReviews) * 100}%` }}
                  ></div>
                </div>
                <span>{item.count}</span>
              </div>
            ))}
          </div>
        </div>
        {customerreviews.map((review) => (
          <div className="relative mt-8 w-full rounded-2xl  border p-6">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4">
                <img
                  src={person}
                  alt=""
                  className="w-16 h-16 rounded-xl bg-slate-100"
                />
                <div>
                  <p className="text-lg font-medium">{review.name}</p>
                  <p className="text-[11px] text-gray-400">{review.location}</p>
                </div>
              </div>

              <div className="flex ">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p>{review.review}</p>
              <div className="flex gap-2">
                <img
                  src={person}
                  alt={"sadsa"}
                  className="w-8 h-8 rounded-full bg-slate-200"
                />
                <p>{review.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReveiw;
