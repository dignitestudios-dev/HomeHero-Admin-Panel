import React from "react";
import { FiLoader } from "react-icons/fi";
import { IoArrowBack } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router";
import { Logo } from "../../assets/export";
import { forgotValues } from "../../init/authentication/LoginValues";
import { forgotSchema } from "../../schema/authentication/LoginSchema";
import { useFormik } from "formik";
import { processLogin } from "../../lib/utils";
import { useLogin } from "../../hooks/api/Post";

export const ForgetPassword = () => {
  const { loading, postData } = useLogin();
  const navigate = useNavigate();
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: forgotValues,
      validationSchema: forgotSchema,
      validateOnChange: true,
      validateOnBlur: true,
      onSubmit: async (values, action) => {
        const data = {
          email: values?.email,
          password: values?.password,
        };
        navigate("/auth/verify-otp");
        // postData("/admin/login", false, null, data, processLogin);

        // Use the loading state to show loading spinner
        // Use the response if you want to perform any specific functionality
        // Otherwise you can just pass a callback that will process everything
      },
    });
  return (
    <div>
      <div className="w-full h-auto flex flex-col items-center p-6 justify-center md:w-[499px] md:h-[548px]   rounded-[19px] z-[10] ">
        <div className="w-auto flex flex-col mt-4 justify-center items-center ">
          <img src={Logo} alt="orange_logo" className="w-[128px]" />
        </div>
        <div className="w-auto flex flex-col mt-10 justify-center backdrop-blur-[50px]  p-8 rounded-[15px]">
          <div className="w-auto flex items-center">
            <NavLink to={"/auth/login"}>
              <IoArrowBack size={20} className="text-black" />
            </NavLink>
            <h2 className="text-[24px] font-[700] leading-[48px] mx-auto text-black">
              Forgot Password
            </h2>
          </div>

          <p className="text-[13px] text-black font-normal text-center py-4">
            Enter your registered email address to recover your <br /> password.
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
                Email address
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full h-[49px] border-[0.8px] bg-transparent outline-none  rounded-[14.96px] placeholder:text-[#959393] text-black px-3 text-[14px] font-normal leading-[21px] ${
                  errors?.email && touched?.email
                    ? "border-red-500"
                    : "border-black"
                }`}
                placeholder="Email Address"
              />
              {errors.email && touched.email ? (
                <p className="text-red-700 text-sm font-medium">
                  {errors.email}
                </p>
              ) : null}
            </div>

            <button
              type="submit"
              className="w-full h-[49px] rounded-[14.96px] bg-[#62466B]
          text-white flex gap-2 items-center justify-center text-md font-medium"
            >
              <span>Send OTP</span>
              {loading && <FiLoader className="animate-spin text-lg " />}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
