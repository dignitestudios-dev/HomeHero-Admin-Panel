import { useFormik } from "formik";
import { useContext, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

import  { AppContext } from "../../context/AppContext";
import UpdatePasswordSuccessfully from "../../components/authentication/UpdatePasswordSuccessfully";
import { UpdatePasswordValues } from "../../init/authentication/LoginValues";
import { UpdateSchema } from "../../schema/authentication/LoginSchema";
import axios from "../../axios";
import { useNavigate } from "react-router";
export default function InAppChangedPassword() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [IsNewPassword, setIsNewPassword] = useState(false);
  const [isReEnterPassword, setIsReEnterPassword] = useState(false);
  const { updatePasswordSuccessfully, setUpdatePasswordSuccessfully } = useContext(AppContext);
  const navigate = useNavigate();
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: UpdatePasswordValues,
      validationSchema: UpdateSchema,
      validateOnChange: true,
      validateOnBlur: true,
      onSubmit: async (values, action) => {
        try {
          if (values.newPassword !== values.reEnterPassword) {
            action.setFieldError("reEnterPassword", "Passwords do not match");
            return;
          }
          action.setSubmitting(true);
      
          const data = {
            currentPassword: values.oldPassword,
            newPassword: values.newPassword,
          };
      
          const response = await axios.post("auth/change-password", data);
      
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
    <div className="h-[75vh]">
      <h3 className="font-[500] text-[28px] text-black">Change Password</h3>
      <div className="bg-gray-50 rounded-[15px] px-3 py-3 mt-2 backdrop-blur-[50] h-full ">
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-[393px] mt-5 flex flex-col justify-start items-start gap-4"
        >
          <div className="w-full h-auto flex flex-col justify-start items-start gap-1">
            <label
              htmlFor=""
              className="text-black font-medium  text-sm leading-[21px]"
            >
              Old Password
            </label>
            <div
              className={`h-[49px] flex justify-start bg-transparent items-start w-full relative border-[0.8px] rounded-[14px] ${
                errors?.oldPassword && touched?.oldPassword
                  ? "border-red-500"
                  : "border-black"
              }`}
            >
              <input
                type={isPasswordVisible ? "text" : "password"}
                id="oldPassword"
                name="oldPassword"
                value={values.oldPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-[90%] h-full  bg-transparent rounded-[14px] placeholder:text-black outline-none text-black  px-3 text-[14px] font-normal leading-[20.4px]"
                placeholder="Old Password"
              />
              <button
                type="button"
                onClick={() => setIsPasswordVisible((prev) => !prev)}
                className="w-[10%] h-full rounded-r-[8px] bg-transparent text-md text-black flex items-center justify-center"
              >
                {isPasswordVisible ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            </div>
            <p className="text-black text-sm font-normal">
              You must enter current password in order to change your password.
            </p>
            {errors.oldPassword && touched.oldPassword ? (
              <p className="text-red-700 text-sm font-medium">
                {errors.oldPassword}
              </p>
            ) : null}
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-1">
            <label
              htmlFor=""
              className="text-black font-medium  text-sm leading-[21px]"
            >
              New Password
            </label>
            <div
              className={`h-[49px] flex justify-start bg-transparent items-start w-full relative border-[0.8px] rounded-[14px] ${
                errors?.newPassword && touched?.newPassword
                  ? "border-red-500"
                  : "border-black"
              }`}
            >
              <input
                type={IsNewPassword ? "text" : "password"}
                id="newPassword"
                name="newPassword"
                value={values.newPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-[90%] h-full  bg-transparent rounded-[14px] placeholder:text-black outline-none text-black  px-3 text-[14px] font-normal leading-[20.4px]"
                placeholder="New Password"
              />
              <button
                type="button"
                onClick={() => setIsNewPassword((prev) => !prev)}
                className="w-[10%] h-full rounded-r-[8px] bg-transparent text-md text-black flex items-center justify-center"
              >
                {IsNewPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            </div>
            {errors.newPassword && touched.newPassword ? (
              <p className="text-red-700 text-sm font-medium">
                {errors.newPassword}
              </p>
            ) : null}
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-1">
            <label
              htmlFor=""
              className="text-black font-medium  text-sm leading-[21px]"
            >
              Re-enter Password
            </label>
            <div
              className={`h-[49px] flex justify-start bg-transparent items-start w-full relative border-[0.8px] rounded-[14px] ${
                errors?.reEnterPassword && touched?.reEnterPassword
                  ? "border-red-500"
                  : "border-black"
              }`}
            >
              <input
                type={isReEnterPassword ? "text" : "password"}
                id="reEnterPassword"
                name="reEnterPassword"
                value={values.reEnterPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-[90%] h-full  bg-transparent rounded-[14px] placeholder:text-black outline-none text-black  px-3 text-[14px] font-normal leading-[20.4px]"
                placeholder="Re-enter Password"
              />
              <button
                type="button"
                onClick={() => setIsReEnterPassword((prev) => !prev)}
                className="w-[10%] h-full rounded-r-[8px] bg-transparent text-md text-black flex items-center justify-center"
              >
                {isReEnterPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            </div>
            {errors.reEnterPassword && touched.reEnterPassword ? (
              <p className="text-red-700 text-sm font-medium">
                {errors.reEnterPassword}
              </p>
            ) : null}
          </div>

          <button
            type="submit"
            className="w-full h-[49px] rounded-[14px] bg-[linear-gradient(180deg,_#D9BBF9_0%,_#775B84_90%)]  text-white flex gap-2 items-center justify-center text-md font-medium"
          >
            <span>Save</span>
          </button>
        </form>
      </div>
      <UpdatePasswordSuccessfully />
    </div>
  );
}
