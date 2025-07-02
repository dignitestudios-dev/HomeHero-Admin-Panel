import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";
import { useFormik } from "formik";
import { ServicesSchema } from "../../../schema/app/AppSchema";
import { CategoryValues } from "../../../init/app/App";
import axios from "../../../axios";
import { SuccessToast } from "../../global/Toaster";
import { FaSpinner } from "react-icons/fa";

const ServicesCreateModal = ({ isOpen, setIsOpen, services }) => {
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState([]);
  
  const [selectedServiceId, setSelectedServiceId] = useState("");
console.log(category, "category");
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(`/provider/get-all-categories`);
        setCategory(response?.data?.data?.categories || []);
      } catch (error) {
        console.error("Error fetching categories:", error)
      } 
    };
    fetchCategory();
  }, [services]);

  const formik = useFormik({
    initialValues: CategoryValues,
    validationSchema: ServicesSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values, action) => {
      try {
        setLoading(true);
        const data = {
          serviceID: values.serviceID,
          categoryID: values.categoryID,
          name: values.name,
        };
        const response = await axios.post(`/service/create-subcategory`, data);
        console.log("Service created successfully:", response.data);
        if(response?.data?.success){
        SuccessToast("Sub Category created successfully");
          setIsOpen(false);
          action.resetForm();
        }
        
      } catch (error) {
        console.error("Error creating service:", error);
      } finally {
        setLoading(false);
      }
    },
  });

  const { values, handleBlur, handleChange, handleSubmit, setFieldValue, errors, touched } = formik;

  const filteredCategories = category.filter(
    (cat) => cat.service?._id === selectedServiceId
  );

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

          <select name="serviceID" id="" value={values.serviceID}
            onChange={(e) => {
              setFieldValue("serviceID", e.target.value);
              setSelectedServiceId(e.target.value);
              setFieldValue("categoryID", ""); // Reset category selection on service change
            }}>
            <option value="">Select Service</option>
            {category
              .map((cat) => cat.service) // extract service objects
              .filter((v, i, a) => a.findIndex(t => t._id === v._id) === i) // remove duplicates
              .map((service) => (
                <option key={service?._id} value={service?._id}>
                  {service?.name}
                </option>
              ))}
          </select>
          {errors.serviceID && touched.serviceID && (
            <p className="text-red-700 text-sm font-medium">{errors.serviceID}</p>
          )}
        </div>

        {/* Sub Category */}
        <div className="w-full flex flex-col gap-3 mt-3">
          <label className="text-black font-medium text-[14px]">Sub Category</label>
          <select
            name="categoryID"
            value={values.categoryID}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full px-3 rounded-md h-10 border border-[#775B84] outline-none"
          >
            <option value="">Select Sub Category</option>
            {filteredCategories.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
          </select>
          {errors.categoryID && touched.categoryID && (
            <p className="text-red-700 text-sm font-medium">{errors.categoryID}</p>
          )}
        </div>
          <div  className="w-full flex flex-col gap-3 mt-3">
          <label className="text-black font-medium text-[14px] leading-[100%]">
              Sub Category
            </label>
            <input type="text" name="name" onChange={handleChange}  className="w-full px-3 rounded-md h-10 border-2 border-[#775B84] outline-none"/>
          {errors.name && touched.name && (
            <p className="text-red-700 text-sm font-medium">{errors.name}</p>
          )}
        </div>

        <button
        disabled={loading}
          type="submit"
          className="w-full h-[49px] rounded-[14px] bg-[linear-gradient(180deg,_#D9BBF9_0%,_#775B84_90%)] text-white flex gap-2 items-center justify-center mt-5 text-md font-medium"
        > 
          {loading ? (
            <FaSpinner className="animate-spin"></FaSpinner>
          ) : (
            <span>Save</span>
          )}
        </button>
      </form>
    </Modal>
  );
};

export default ServicesCreateModal;
