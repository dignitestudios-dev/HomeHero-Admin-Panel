import { Route, Routes } from "react-router";
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
import { BookingServices } from "./pages/app/booking/BookingServices";
import { BookingRequest } from "./pages/app/booking/BookingRequest";
import { Delete } from "./pages/app/deleted/Delete";
import BookingDetails from "./pages/app/booking/BookingDetails";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="text-7xl">
            Project Template || Please read readme file
          </div>
        }
      />

      <Route path="app" element={<DashboardLayout />}>
        <Route path="dashboard" element={<DummyHome />} />
        <Route path="users" element={<User />} />
        <Route path="push-notification" element={<PushNotification />} />
        <Route path="users/:id" element={<UserDetails />} />
        <Route path="review" element={<RevenueManagement />} /> 
        <Route path="payment-earnings" element={<Payment />} />
        <Route path="providers" element={<ProviderRequest />} />
        <Route path="providers/:id" element={<ProviderDetails />} />
        <Route path="request" element={<Requests />} />
        <Route path="updatepassword" element={<InAppChangedPassword />} />
        <Route path="reports" element={<Report />} />
        <Route path="booking-services" element={<BookingServices />} />
        <Route path="booking-services/:id" element={<BookingDetails />} />
        <Route path="booking-request" element={<BookingRequest />} />
        <Route path="delete" element={<Delete />} />
      </Route>

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
