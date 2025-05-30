import React, { useState } from "react";

import RequestTable from "../../../components/app/request/RequestTable";

import RequestFilter from "../../../components/app/request/RequestFilter";
import ServicesCreateModal from "../../../components/app/request/ServicesCreateModal";
import ServicesEditedModal from "../../../components/app/request/ServicesEditedModal";

export default function Requests() {
  const [selectedRequest, setSelectedRequest] = useState(false);

  return (
    <div className="p-5">
      <div className="flex justify-between py-3">
        <h1 className="text-2xl font-bold mb-4">Services</h1>
        <button
          onClick={() => setSelectedRequest(!selectedRequest)}
          className="w-[168px] h-[44px] text-[#FFFFFF] bg-[linear-gradient(180deg,_#D9BBF9_0%,_#775B84_90%)] rounded-[8px]"
        >
          Create
        </button>
      </div>
      <div className="flex ">
        <RequestFilter />
      </div>

      <RequestTable />
      <ServicesCreateModal
        isOpen={selectedRequest}
        setIsOpen={setSelectedRequest}
      />
    </div>
  );
}
