import React from "react";
import Booking from "../../../components/app/booking/Booking";
import { BookingRequest } from "./BookingRequest";
import { Link } from "react-router";

export const BookingServices = () => {
  return (
    <div>
      <div className="flex justify-between p-5">
        <h2 className="text-2xl font-bold mb-4">Booking & Request</h2>
        <Link to={"/app/booking-request"}>
          <button className="w-[168px] h-[44px] text-[#FFFFFF] bg-[linear-gradient(180deg,_#D9BBF9_0%,_#775B84_90%)] rounded-[8px]">
            Request
          </button>
        </Link>
      </div>
      <Booking />
    </div>
  );
};
