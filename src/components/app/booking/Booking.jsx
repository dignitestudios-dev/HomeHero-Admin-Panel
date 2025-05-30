import React, { useState } from "react";
import { useNavigate } from "react-router";
import { FilterBooking } from "./FilterBooking";

const initialRequests = [
  {
    id: 1,
    user: "John Doe",
    provider: "FixIt Co.",
    service: "AC Repair",
    date: "2024-05-12",
    location: "Lahore",
    price: 120,
    paymentStatus: "Paid",
  },
  {
    id: 2,
    user: "Sarah Khan",
    provider: "Cleaners Pro",
    service: "Home Cleaning",
    date: "2024-05-13",
    location: "Karachi",
    price: 90,
    paymentStatus: "Pending",
  },
  {
    id: 3,
    user: "Ali Raza",
    provider: "FixIt Co.",
    service: "Plumbing",
    date: "2024-05-15",
    location: "Islamabad",
    price: 70,
    paymentStatus: "Paid",
  },
];

export default function Booking() {
  const [providerFilter, setProviderFilter] = useState("");
  const [serviceFilter, setServiceFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  const navigate = useNavigate();

  const filteredRequests = initialRequests.filter((req) => {
    return (
      req.provider.toLowerCase().includes(providerFilter.toLowerCase()) &&
      req.service.toLowerCase().includes(serviceFilter.toLowerCase()) &&
      req.date.includes(dateFilter)
    );
  });

  return (
    <div>
      <div className="flex justify-end">
        <FilterBooking
          providerFilter={providerFilter}
          setProviderFilter={setProviderFilter}
          serviceFilter={serviceFilter}
          setServiceFilter={setServiceFilter}
          dateFilter={dateFilter}
          setDateFilter={setDateFilter}
        />
      </div>

      <div className="bg-gray-50 mt-3 rounded-[25px] overflow-x-auto p-4">
        <div className="hidden md:grid grid-cols-8 gap-4 text-black bg-white rounded-lg px-4 font-semibold text-[12px] mb-4">
          <div className="col-span-1 py-3 text-left">User</div>
          <div className="col-span-1 py-3 text-left">Provider</div>
          <div className="col-span-1 py-3 text-left">Service</div>
          <div className="col-span-1 py-3 text-left">Date</div>
          <div className="col-span-1 py-3 text-left">Location</div>
          <div className="col-span-1 py-3 text-left pl-4">Price</div>
          <div className="col-span-1 py-3 text-left pl-4">Payment Status</div>
          <div className="col-span-1 py-3 text-right pl-4">Action</div>
        </div>

        {filteredRequests.map((req) => (
          <div className="border-b" key={req.id}>
            <div className="hidden md:grid grid-cols-8 gap-4 items-center py-4 mt-4 text-black text-[12px]">
              <div className="col-span-1">{req.user}</div>
              <div className="col-span-1">{req.provider}</div>
              <div className="col-span-1">{req.service}</div>
              <div className="col-span-1">{req.date}</div>
              <div className="col-span-1">{req.location}</div>
              <div className="col-span-1">${req.price}</div>
              <div className="col-span-1">{req.paymentStatus}</div>
              <div className="col-span-1 flex justify-end">
                <button
                  onClick={() => navigate(`/app/booking-services/${req.id}`)}
                  className="bg-[#62466B] text-white px-4 py-2 rounded-[8px] text-[12px]"
                >
                  View
                </button>
              </div>
            </div>
          </div>
        ))}

        {filteredRequests.length === 0 && (
          <p className="text-center text-gray-500 mt-4">No results found</p>
        )}
      </div>
    </div>
  );
}
