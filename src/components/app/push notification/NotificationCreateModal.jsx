import React, { useContext, useEffect } from "react";
import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";
import { useFormik } from "formik";

import  { AppContext } from "../../../context/AppContext";
import { NotificationValues } from "../../../init/app/App";
import { NotificationSchema } from "../../../schema/app/AppSchema";
import axios from "../../../axios";
import { SuccessToast } from "../../global/Toaster";
const NotificationCreateModal = ({ isOpen, setIsOpen, fetchNotificationData }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const { setUpdatePasswordSuccessfully, updatePasswordSuccessfully } = useContext(AppContext);
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: NotificationValues,
      validationSchema: NotificationSchema,
      validateOnChange: true,
      validateOnBlur: true,
      onSubmit: async (values, action) => {
        setIsLoading(true);
        setError('');
        
        const data = { title: values.Title, description: values.Detail };
        try {
          const response = await axios.post(`/notification/create-notification`, data);
          if (response.status === 200) {
            action.resetForm(); // Reset the form
            setIsOpen(false);
           SuccessToast('Notification created successfully');
           fetchNotificationData();
          }
        } catch (error) {
          console.error("Error creating notification:", error);
          setError('Failed to create notification. Please try again.');
        } finally {
          setIsLoading(false);
        }
      },
    });
    useEffect(() => {
     
    }, []);
  return (
    <div>
      <Modal
        isOpen={isOpen}
        contentLabel="Page Not Found"
        shouldCloseOnOverlayClick={false} // Prevent closing by clicking outside
        shouldCloseOnEsc={false}
        className="flex items-center justify-center border-none outline-none z-[1000] "
        overlayClassName="fixed inset-0  bg-opacity-50  z-[1000] bg-[rgba(0,0,0,0.4)]  flex justify-center items-center"
      >
        <div className="bg-gray-50 w-[430px] p-4    backdrop-blur-[50px] rounded-[16px] shadow-lg   ">
          <div className="flex items-center justify-between mt-3">
            <h3 className="text-black font-[700] text-[24px]">
              Create Notification
            </h3>
            <button onClick={() => setIsOpen(!isOpen)}>
              <IoMdClose className="text-black" />
            </button>
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-3 mt-3">
            <label
              htmlFor=""
              className="text-black font-medium  text-[14px] leading-[100%]"
            >
              Title
            </label>
            <div
              className={`h-[49px] flex justify-start bg-transparent items-start w-full relative border-[1px]  rounded-[14px] ${
                errors?.Title && touched?.Title
                  ? "border-red-500"
                  : "border-[#8b7297]"
              }`}
            >
              <input
                type="text"
                id="Title"
                name="Title"
                value={values.Title}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-[90%] h-full  bg-transparent rounded-[14px] placeholder:text-gray-400 outline-none text-black  px-3 text-[14px] font-normal leading-[20.4px]"
                placeholder="Enter Title"
              />
            </div>

            {errors.Title && touched.Title ? (
              <p className="text-red-700 text-sm font-medium">{errors.Title}</p>
            ) : null}
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-3 mt-3">
            <label
              htmlFor=""
              className="text-black font-medium  text-[14px] leading-[100%]"
            >
              Detail
            </label>
            <div
              className={`p-2 flex justify-start bg-transparent items-start w-full relative border-[1px] rounded-[14px] ${
                errors?.Detail && touched?.Detail
                  ? "border-red-500"
                  : "border-[#8b7297]"
              }`}
            >
              <textarea
                rows={8}
                type="text"
                id="Detail"
                name="Detail"
                value={values.Detail}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-[90%] h-full resize-none  bg-transparent rounded-[14px] placeholder:text-gray-400 outline-none text-black  px-3 text-[14px] font-normal leading-[20.4px]"
                placeholder="Enter Title"
              />
            </div>

            {errors.Detail && touched.Detail ? (
              <p className="text-red-700 text-sm font-medium">
                {errors.Detail}
              </p>
            ) : null}
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            disabled={isLoading || !values.Title || !values.Detail}
            className="w-full h-[49px] rounded-[14px] bg-[linear-gradient(180deg,_#D9BBF9_0%,_#775B84_90%)] text-white flex gap-2 items-center justify-center mt-3 text-md font-medium cursor-pointer"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Loading...</span>
              </div>
            ) : (
              <span>Save</span>
            )}
          </button>
          {error && (
            <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default NotificationCreateModal;
