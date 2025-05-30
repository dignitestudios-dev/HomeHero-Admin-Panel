import React, { useState } from "react";
import { useNavigate } from "react-router"; // react-router-dom ho sakta hai agar v5 use kar rahe ho
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import ServicesEditedModal from "./ServicesEditedModal";

const requests = [
  {
    id: 1,
    user: "John Doe",
    provider: "FixIt Co.",
    service: "AC Repair",
    date: "2024-05-12",
    status: "Pending",
    price: 120,
  },
  {
    id: 2,
    user: "Sarah Khan",
    provider: "Cleaners Pro",
    service: "Home Cleaning",
    date: "2024-05-13",
    status: "Completed",
    price: 90,
  },
];

export default function RequestTable() {
  const [modal, setModal] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const navigate = useNavigate();

  // Edit button handler
  const handleEditClick = (request) => {
    setSelectedRequest(request);
    setModal(true);
  };

  return (
    <div className="bg-gray-50 mt-3 rounded-[25px] overflow-x-auto p-4 ">
      <div className="hidden md:grid grid-cols-12 gap-4 text-black bg-white rounded-lg px-4 font-semibold text-[12px] mb-4">
        <div className="col-span-2 py-3 text-left">User</div>
        <div className="col-span-2 py-3 text-left">Provider</div>
        <div className="col-span-2 py-3 text-left">Service</div>
        <div className="col-span-2 py-3 text-left">Date</div>
        <div className="col-span-2 py-3 text-left">Status</div>
        <div className="col-span-2 py-3 text-left pl-4">Action</div>
      </div>

      {requests.map((request) => (
        <div key={request.id}>
          <div className="hidden md:grid grid-cols-12 gap-4 items-center py-2 mb-4 text-black text-[12px]">
            <div className="col-span-2 flex items-center pl-4 gap-3">
              <span>{request.user}</span>
            </div>
            <div className="col-span-2 text-left">{request.provider}</div>
            <div className="col-span-2 text-left">{request.service}</div>
            <div className="col-span-2 text-left">{request.date}</div>
            <div className="col-span-2 text-left">{request.status}</div>

            <div className="col-span-2 flex justify-start gap-2">
              <button onClick={() => handleEditClick(request)}>
                <FaRegEdit size={20} />
              </button>
              <button className="flex items-center justify-center px-4 py-2 rounded-[8px] gap-2">
                <AiOutlineDelete size={20} className="text-red-500" />
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Modal */}
      <ServicesEditedModal
        isOpen={modal}
        setIsOpen={setModal}
        requestData={selectedRequest}
      />
    </div>
  );
}
