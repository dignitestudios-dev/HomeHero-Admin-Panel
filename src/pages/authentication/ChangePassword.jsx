import React, { useContext, useState } from "react";
import { useLogin } from "../../hooks/api/Post";
import { processLogin } from "../../lib/utils";
import { useFormik } from "formik";

import { NavLink, useNavigate } from "react-router";
import { FiLoader } from "react-icons/fi";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Logo } from "../../assets/export";
import { changepasswordValues } from "../../init/authentication/LoginValues";
import { changepasswordSchema } from "../../schema/authentication/LoginSchema";
import  { AppContext } from "../../context/AppContext";
import UpdatePasswordSuccessfully from "../../components/authentication/UpdatePasswordSuccessfully";
// import axios from "axios";
import axios from "../../axios";
const ChangePassword = () => {
  const { updatePasswordSuccessfully, setUpdatePasswordSuccessfully } =useContext(AppContext);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const { loading, postData } = useLogin();

  const navigate = useNavigate();

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: changepasswordValues,
      validationSchema: changepasswordSchema,
      validateOnChange: true,
      validateOnBlur: true,
      onSubmit: async (values, action) => {
        try {
          if (values.password !== values.confirmpassword) {
            action.setFieldError("confirmpassword", "Passwords do not match");
            return;
          }
          action.setSubmitting(true);
      
          const data = {
            newPassword: values.password,
          };
      
          const response = await axios.post("auth/reset-password", data);
      
          if (response.status === 200) {
            setUpdatePasswordSuccessfully(true);
            action.resetForm();
      
            // ✅ Navigate after 3 seconds
            setTimeout(() => {
              setUpdatePasswordSuccessfully(false);
              navigate("/auth/login");
            }, 5000);
          } else {
            console.error("Password change failed:", response.message);
          }
        } catch (error) {
          console.error("Password change failed:", error);
        } finally {
          action.setSubmitting(false);
        }
      }
    });

  return (
    <div className="w-full h-auto flex flex-col items-center p-6 justify-center md:w-[499px] md:h-[548px]  mt-10 rounded-[19px] z-[10] ">
      <div className="w-auto flex flex-col mt-4 justify-center items-center ">
        <img src={Logo} alt="orange_logo" className="w-[128px]" />
      </div>
      <div className="w-auto flex flex-col mt-10 justify-center items-center backdrop-blur-[50px] p-8 rounded-[15px]">
        <h2 className="text-[24px] font-[700] leading-[48px] text-black">
          create new password
        </h2>
        <p className="text-[13px] text-black font-normal text-center py-4">
          Enter new password to reset.
        </p>
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-[393px] mt-5 flex flex-col justify-start items-start gap-4"
        >
          <div className="w-full h-auto flex flex-col justify-start items-start gap-1">
            <label
              htmlFor=""
              className="text-black mb-1 text-[14px] leading-[21px]"
            >
              Password
            </label>
            <div
              className={`h-[49px] flex justify-start bg-transparent  items-start w-full relative border-[0.8px]  border-black rounded-[14.96px] ${
                errors?.password && touched?.password
                  ? "border-red-500"
                  : "border-[#D9D9D9]"
              }`}
            >
              <input
                type={isPasswordVisible ? "text" : "password"}
                id="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-[90%] h-full  bg-transparent rounded-[14.96px] placeholder:text-[#959393] outline-none text-black px-3 text-[14px] font-normal leading-[21px]"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={() => setIsPasswordVisible((prev) => !prev)}
                className="w-[10%] h-full rounded-[14.96px] bg-transparent text-md text-black  flex items-center justify-center"
              >
                {isPasswordVisible ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            </div>
            {errors.password && touched.password ? (
              <p className="text-red-700 text-sm font-medium">
                {errors.password}
              </p>
            ) : null}
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-1">
            <label
              htmlFor="confirmpassword"
              className="text-black mb-1 text-[14px] leading-[21px]"
            >
              Confirm Password
            </label>
            <div
              className={`h-[49px] flex justify-start bg-transparent  items-start w-full relative border-[0.8px]  border-black rounded-[14.96px] ${
                errors?.password && touched?.password
                  ? "border-red-500"
                  : "border-black"
              }`}
            >
              <input
                type={isConfirmPasswordVisible ? "text" : "password"}
                id="confirmpassword"
                name="confirmpassword"
                value={values.confirmpassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-[90%] h-full  bg-transparent rounded-[14.96px] placeholder:text-[#959393] outline-none text-black px-3 text-[14px] font-normal leading-[21px]"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={() => setIsConfirmPasswordVisible((prev) => !prev)}
                className="w-[10%] h-full rounded-[14.96px] bg-transparent text-md text-black  flex items-center justify-center"
              >
                {isConfirmPasswordVisible ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            </div>
            {errors.confirmpassword && touched.confirmpassword ? (
              <p className="text-red-700 text-sm font-medium">
                {errors.confirmpassword}
              </p>
            ) : null}
          </div>

          <button
            type="submit"
            className="w-full h-[49px] rounded-[14.96px] bg-[#62466B]
          text-white flex gap-2 items-center justify-center text-md font-medium"
          >
            <span>Change Password </span>
            {loading && <FiLoader className="animate-spin text-lg " />}
          </button>
        </form>
      </div>
      {updatePasswordSuccessfully && <UpdatePasswordSuccessfully />}
    </div>
  );
};

export default ChangePassword;
