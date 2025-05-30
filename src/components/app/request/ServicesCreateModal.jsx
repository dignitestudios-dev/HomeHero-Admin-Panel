import React from "react";
import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";
import { useFormik } from "formik";

import useApp, { AppContext } from "../../../context/AppContext";
import { ServicesSchema } from "../../../schema/app/AppSchema";
import { CategoryValues } from "../../../init/app/App";

const ServicesCreateModal = ({ isOpen, setIsOpen }) => {
  const { setUpdatePasswordSuccessfully, updatePasswordSuccessfully } =
    useApp(AppContext);

  const formik = useFormik({
    initialValues: CategoryValues,
    validationSchema: ServicesSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values, action) => {
      console.log("Submitted Values:", values);
      setUpdatePasswordSuccessfully(!updatePasswordSuccessfully);
      setIsOpen(false); // Close the modal on success
      action.resetForm(); // Reset form after submit
    },
  });

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    formik;

  return (
    <Modal
      isOpen={isOpen}
      contentLabel="Create Service"
      shouldCloseOnOverlayClick={false}
      shouldCloseOnEsc={false}
      className="flex items-center justify-center border-none outline-none z-[1000]"
      overlayClassName="fixed inset-0 bg-opacity-50 z-[1000] bg-[rgba(0,0,0,0.4)] flex justify-center items-center"
    >
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 w-[430px] p-4 backdrop-blur-[50px] rounded-[16px] shadow-lg"
      >
        <div className="flex items-center justify-between mt-3">
          <h3 className="text-black font-[700] text-[24px]">Create Services</h3>
          <button type="button" onClick={() => setIsOpen(false)}>
            <IoMdClose className="text-black" />
          </button>
        </div>

        {/* Service */}
        <div className="w-full flex flex-col gap-3 mt-3">
          <label className="text-black font-medium text-[14px] leading-[100%]">
            Service
          </label>
          <div
            className={`h-[49px] flex items-center w-full relative border-[0.8px] rounded-[14px] ${
              errors?.Category && touched?.Category
                ? "border-red-500"
                : "border-black"
            }`}
          >
            <input
              type="text"
              name="Category"
              value={values.Category}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full h-full bg-transparent rounded-[14px] placeholder:text-gray-400 outline-none text-black px-3 text-[14px]"
              placeholder="Enter Title"
            />
          </div>
          {errors.Category && touched.Category && (
            <p className="text-red-700 text-sm font-medium">
              {errors.Category}
            </p>
          )}
        </div>

        {/* Sub Category */}
        <div className="w-full flex flex-col gap-3 mt-3">
          <label className="text-black font-medium text-[14px] leading-[100%]">
            Sub Category
          </label>
          <div
            className={`h-[49px] flex items-center w-full relative border-[0.8px] rounded-[14px] ${
              errors?.SubCategory && touched?.SubCategory
                ? "border-red-500"
                : "border-black"
            }`}
          >
            <input
              type="text"
              name="SubCategory"
              value={values.SubCategory}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full h-full bg-transparent rounded-[14px] placeholder:text-gray-400 outline-none text-black px-3 text-[14px]"
              placeholder="Enter Category"
            />
          </div>
          {errors.SubCategory && touched.SubCategory && (
            <p className="text-red-700 text-sm font-medium">
              {errors.SubCategory}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full h-[49px] rounded-[14px] bg-[linear-gradient(180deg,_#D9BBF9_0%,_#775B84_90%)] text-white flex gap-2 items-center justify-center mt-5 text-md font-medium"
        >
          <span>Save</span>
        </button>
      </form>
    </Modal>
  );
};

export default ServicesCreateModal;
