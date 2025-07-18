import { Navigate, Route, Routes, useNavigate } from "react-router";
import "./App.css";
import DashboardLayout from "./layouts/DashboardLayout";
// import DummyHome from "./pages/app/Home";
import DummyLogin from "./pages/authentication/Login";
import AuthLayout from "./layouts/AuthLayout";
import { ForgetPassword } from "./pages/authentication/ForgetPassword";
import { Otp } from "./pages/authentication/Otp";
import ChangePassword from "./pages/authentication/ChangePassword";
import User from "./pages/app/user/Users";
import PushNotification from "./pages/app/push notification/PushNotification";
import UserDetails from "./pages/app/user/UserDetails";
import DummyHome from "./pages/app/dashboard/DummyHome";
import RevenueManagement from "./pages/app/review managemet/RevenueManagement";
import { Payment } from "./pages/app/payment/Payment";
import { ProviderRequest } from "./pages/app/provider/ProviderRequest";
import ProviderDetails from "./pages/app/provider/ProviderDetails";

import InAppChangedPassword from "./pages/authentication/InAppChangePassword";
import Report from "./pages/app/reports/Report";
import Requests from "./pages/app/request/Request";


import { Delete } from "./pages/app/deleted/Delete";

import { useContext } from "react";
import { AppContext } from "./context/AppContext";

import JobDetails from "./pages/app/job/JobDetails";
import { JobRequest } from "./pages/app/job/JobRequest";
import { PaymentDetails } from "./pages/app/payment/PaymentDetails";
import { Disputes } from "./pages/app/disputes/Disputes";
import { DisputeDetails } from "./pages/app/disputes/DisputeDetails";





function App() {
  
  const {token} = useContext(AppContext)
  return (
    <Routes>
      <Route
        path="/"
        element={
          token ? (
            <Navigate to="/app/dashboard" />
          ) : (
            <Navigate to="/auth/login" />
          )
        }
      />

      {token ? (
        <Route path="app" element={<DashboardLayout />}>
          <Route path="dashboard" element={<DummyHome />} />
          <Route path="users" element={<User />} />
          <Route path="push-notification" element={<PushNotification />} />
          <Route path="users/:id" element={<UserDetails />} />
          <Route path="review" element={<RevenueManagement />} />
          <Route path="payments" element={<Payment />} />
          <Route path="providers" element={<ProviderRequest />} />
          <Route path="providers/:id" element={<ProviderDetails />} />
          <Route path="request" element={<Requests />} />
          <Route path="updatepassword" element={<InAppChangedPassword />} />
          <Route path="reports" element={<Report />} />
          <Route path="job-request" element={<JobRequest />} />
          <Route path="job-request/:id" element={<JobDetails />} />
          <Route path="payments/:id" element={<PaymentDetails />} />
          <Route path="disputes" element={<Disputes />} />
          <Route path="disputes/:id" element={<DisputeDetails />} />
          
          
          
          
          <Route path="delete" element={<Delete />} />
        </Route>
      ) : (
        <Route path="*" element={<Navigate to="/auth/login" replace />} />
      )}

      <Route path="auth" element={<AuthLayout />}>
        <Route path="login" element={<DummyLogin />} />
        <Route path="forgot-password" element={<ForgetPassword />} />
        <Route path="verify-otp" element={<Otp />} />
        <Route path="change-password" element={<ChangePassword />} />
      </Route>

      <Route
        path="*"
        element={<div className="text-7xl">Page Not Found</div>}
      />
    </Routes>
  );
}

export default App;
