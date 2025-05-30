import React from "react";
import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";
import { useFormik } from "formik";

import useApp, { AppContext } from "../../../context/AppContext";
import { NotificationValues } from "../../../init/app/App";
import { NotificationSchema } from "../../../schema/app/AppSchema";

const NotificationCreateModal = ({ isOpen, setIsOpen }) => {
  const { setUpdatePasswordSuccessfully, updatePasswordSuccessfully } =
    useApp(AppContext);
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: NotificationValues,
      validationSchema: NotificationSchema,
      validateOnChange: true,
      validateOnBlur: true,
      onSubmit: async (values, action) => {
        console.log(updatePasswordSuccessfully, "testt");
        setUpdatePasswordSuccessfully(!updatePasswordSuccessfully);
        const data = {};
      },
    });
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
            className="w-full h-[49px] rounded-[14px] bg-[linear-gradient(180deg,_#D9BBF9_0%,_#775B84_90%)] text-white flex gap-2 items-center justify-center mt-3 text-md font-medium"
          >
            <span>Save</span>
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default NotificationCreateModal;
