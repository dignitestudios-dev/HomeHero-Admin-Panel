import React, { useState } from "react";
import { useNavigate } from "react-router"; // react-router-dom ho sakta hai agar v5 use kar rahe ho
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import ServicesEditedModal from "./ServicesEditedModal";
import { dateFormate } from "../../../lib/helpers";
import Pagination from "../../global/Pagination";



export default function RequestTable({services, pagination, setCurrentPage}) {
  const [modal, setModal] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const navigate = useNavigate();

  // Edit button handler
  const handleEditClick = (request) => {
    setSelectedRequest(request);
    setModal(true);
  };

  return (
    <div>

  
    <div className="bg-gray-50 mt-3 rounded-[25px] overflow-x-auto p-4 ">
      <div className="hidden md:grid grid-cols-10 gap-4 text-black bg-white rounded-lg px-4 font-semibold text-[12px] mb-4">
        <div className="col-span-2 py-3 text-left">Sub Category</div>
        <div className="col-span-2 py-3 text-left">Category</div>
        <div className="col-span-2 py-3 text-left">Service</div>
        <div className="col-span-2 py-3 text-left">Date</div>
        
        <div className="col-span-2 py-3 text-left pl-4">Action</div>
      </div>

      {services?.map((request) => (
        <div key={request.id}>
          <div className="hidden md:grid grid-cols-10 gap-4 items-center py-2 mb-4 text-black text-[12px]">
            <div className="col-span-2 flex items-center pl-4 gap-3">
              <span>{request?.name}</span>
              
            </div>
            <div className="col-span-2 text-left">{request.category?.name}</div>
            <div className="col-span-2 text-left">{request.service?.name}</div>
            <div className="col-span-2 text-left">{dateFormate(request.createdAt)}</div>
           

            <div className="col-span-2 flex ">
              <button onClick={() => handleEditClick(request)}>
                <FaRegEdit size={20} />
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
      <div className="flex justify-end">
      <Pagination pagination={pagination} setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
}
