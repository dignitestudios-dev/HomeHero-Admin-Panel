import React, { useRef, useState } from "react";
import { Logo } from "../../assets/export";
import { FaArrowLeftLong } from "react-icons/fa6";
import CountDown from "../../components/authentication/CountDown";
import { IoArrowBack } from "react-icons/io5";
import { useLogin } from "../../hooks/api/Post";
import { ErrorToast, SuccessToast } from "../../components/global/Toaster";
import { NavLink, useNavigate } from "react-router";
import axios from "../../axios";
import Cookies from "js-cookie";
export const Otp = () => {
  const [otp, setOtp] = useState(Array(4).fill(''));
  const [loading, setLoading] = useState(false);
  const inputs = useRef([]);
  const [isActive, setIsActive] = useState(true);
  const [seconds, setSeconds] = useState(30);
  const navigate = useNavigate();
  const email =sessionStorage.getItem('email');
  const verifyOtp = async () => {
    if (loading) return;

    const otpString = otp.join('');
    if (otpString.length !== 4) {
      ErrorToast('Please enter a 4-digit OTP');
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post('/auth/verify-reset-otp',{
        email: email,
        otp: otpString,
      });

      if (response.data.success) {
        Cookies.set("token", response?.data?.data?.token);
        SuccessToast('OTP verified successfully');
        navigate('/auth/change-password');
      } else {
        ErrorToast('Invalid OTP. Please try again');
      }
    } catch (error) {
      ErrorToast(error.response?.data?.message || 'Failed to verify OTP');
    } finally {
      setLoading(false);
    }
    setOtp(Array(4).fill(''));
  };

  const handleChange = (e, index) => {
    const { value } = e.target;

    if (/^\d$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (index < otp.length - 1) {
        inputs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);

      if (index > 0) {
        inputs.current[index - 1].focus();
      }
    }
  };

  const handlePaste = (e) => {
    const pastedData = e.clipboardData.getData("Text");
    if (pastedData.length === otp.length) {
      const newOtp = pastedData.split("");
      setOtp(newOtp);
      inputs.current.forEach((input, index) => {
        input.value = newOtp[index];
      });
      verifyOtp();
    }
  };

  const handleRestart = async () => {
    try {
      // Send email for password reset
      const response = await axios.post(
        "/auth/forgot-password",
       
        {
          email:email,
        }
      );
      console.log(response, "response");
      if (response?.status === 200) {
        
        
        SuccessToast(response?.data?.message);
        setSeconds(30);
        setIsActive(true);
       setOtp(Array(4).fill(''));
      }
      // Navigate to OTP verificatio
    } catch (error) {
      ErrorToast(
        error.response?.data?.message || "Failed to send reset email"
      );
    }
   
  };

  return (
    <div>
      <div className="mt-10">
        <img
          src={Logo}
          alt="orange_logo"
          className="w-[128px] mx-auto mb-4 relative z-10"
        />
        <div className="w-full h-auto relative z-10 backdrop-blur-[50px] flex flex-col  p-6 justify-center   rounded-[19px]">
          <div className="w-auto flex  items-center">
            <NavLink to="/auth/forgotpassword">
              <IoArrowBack size={20} className="text-black" />
            </NavLink>

            <h2 className="text-[24px] font-bold mx-auto leading-[36px] text-black">
              Verification
            </h2>
          </div>
          <p className="font-normal text-[13px] leading-[19px] text-black mt-3 text-center">
            Enter the OTP sent to loremipsum@outlook.com <br />
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              verifyOtp();
            }}
            className="w-full md:w-[393px] mt-5 flex flex-col justify-start items-start gap-4"
          >
            <div className="w-full h-auto flex justify-center items-center gap-4">
              {otp.map((_, index) => {
                return (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    value={otp[index]}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    onPaste={handlePaste}
                    ref={(el) => (inputs.current[index] = el)}
                    className="w-[50px] h-[50px] rounded-[14px] bg-transparent outline-none text-center border-[1px] border-black text-black text-2xl focus-within:border-[#62466B] flex items-center justify-center"
                  />
                );
              })}
            </div>
            <p className="font-normal text-[13px] flex gap-2 leading-[19px] text-black mt-3 mx-auto">
              Didn't get OTP?{" "}
              {isActive ? (
                <CountDown
                  isActive={isActive}
                  setIsActive={setIsActive}
                  seconds={seconds}
                  setSeconds={setSeconds}
                />
              ) : (
                <button
                  type="button"
                  onClick={handleRestart}
                  className="outline-none text-[13px] border-none text-[#62466B] font-bold"
                >
                  Resend Otp
                </button>
              )}
            </p>
            <button
              type="submit"
              disabled={loading}
              className="w-full h-[49px] rounded-[14px] bg-[#62466B] text-white flex gap-2 items-center justify-center text-md font-medium"
            >
              {loading ? (
                <>
                  <FaArrowLeftLong className="animate-spin mr-2" />
                  Verifying...
                </>
              ) : (
                'Send Otp'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
