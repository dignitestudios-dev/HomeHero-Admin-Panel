import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";

const ServicesEditedModal = ({ isOpen, setIsOpen, requestData }) => {
  const [formData, setFormData] = useState({
    user: "",
    provider: "",
    service: "",
    date: "",
    status: "",
    price: "",
  });

  // Jab requestData change ho to formData update karo
  useEffect(() => {
    if (requestData) {
      setFormData({
        user: requestData.user || "",
        provider: requestData.provider || "",
        service: requestData.service || "",
        date: requestData.date || "",
        status: requestData.status || "",
        price: requestData.price || "",
      });
    }
  }, [requestData]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSave = () => {
    // Yahan tum formData ko API ya parent component ko bhej sakte ho
    console.log("Saved data:", formData);
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      contentLabel="Edit Request"
      className="flex items-center justify-center border-none outline-none z-[1000] "
      overlayClassName="fixed inset-0  bg-opacity-50  z-[1000] bg-[rgba(0,0,0,0.4)]  flex justify-center items-center"
    >
      <div className="bg-gray-100 w-[430px] p-4    backdrop-blur-[50px] rounded-[16px] shadow-lg   ">
        <div className="flex items-center justify-between mt-3">
          <h3 className="text-xl font-bold py-5">Edit Request</h3>
          <button onClick={() => setIsOpen(false)}>
            <IoMdClose size={24} />
          </button>
        </div>
        <form className="flex flex-col gap-3">
          <div className="flex flex-col">
            <label className="text-lg font-medium ">User</label>
            <input
              className="w-full px-3 rounded-md h-10 border-2 border-[#775B84] outline-none"
              type="text"
              name="user"
              value={formData.user}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-medium ">Provider</label>
            <input
              className="w-full px-3 rounded-md h-10 border-2 border-[#775B84] outline-none"
              type="text"
              name="provider"
              value={formData.provider}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-medium ">Service</label>
            <input
              className="w-full px-3 rounded-md h-10 border-2 border-[#775B84] outline-none"
              type="text"
              name="service"
              value={formData.service}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-medium ">Date</label>
            <input
              className="w-full px-3 rounded-md h-10 border-2 border-[#775B84] outline-none"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-lg font-medium ">Status</label>
            <input
              className="w-full px-3 rounded-md h-10 border-2 border-[#775B84] outline-none"
              type="text"
              name="status"
              value={formData.status}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap- ">
            <label className="text-lg font-medium ">Price</label>
            <input
              className="w-full px-3 rounded-md h-10 border-2 border-[#775B84] outline-none"
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
          </div>

          <button
            type="button"
            onClick={handleSave}
            className="mt-4 bg-[linear-gradient(180deg,_#D9BBF9_0%,_#775B84_90%)] rounded-[8px] text-white py-2 px-4"
          >
            Save
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default ServicesEditedModal;
