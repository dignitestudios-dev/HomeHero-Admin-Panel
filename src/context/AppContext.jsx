import React, { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [updatePasswordSuccessfully, setUpdatePasswordSuccessfully] =
    useState(false);
  const [logOutModal, setLogOutModal] = useState(false);
  const [token, setToken] = useState(Cookies.get("token"));
  const [authRecord, setAuthRecord] = useState(Cookies.get("authRecord"));

  const handleLogin =(data  )=>{
    
    Cookies.set("token", data?.token);
    Cookies.set(
      "authRecord",
      JSON.stringify(data?.authRecord)
    );
    setToken(data?.token)
    setAuthRecord(data?.authRecord)
    
  }

  const hadleLogout =()=>{
    setToken(null)
    setAuthRecord(null)
    Cookies.remove("token");
    Cookies.remove("authRecord");
    navigate("/auth/login");
  }
  // Send fcm to backend:
  // const fetchToken = async () => {
  //   const token = await getFCMToken();
  //   const authToken = Cookies.get("token");
  //   if (!authToken) {
  //     ErrorToast("Un authorized | Please relogin.");
  //     navigate("/login");
  //   } else if (authToken && token) {
  //     const response = await axios.post(`/auth/updateFCM`, {
  //       fcmToken: token,
  //     });
  //   }

  // You can send this token to your server or use it as needed

  // onMessageListener()
  //   .then((payload) => {
  //     const data = JSON.parse(payload?.data?.data);
  //     let route = null;
  //     if (data?.type == "booking") {
  //       route = `/rental-tracking/${data?.booking?._id}`;
  //     } else if (data?.type == "product") {
  //       route = `/products/${data?.product?._id}`;
  //     } else if (data?.type == "chat") {
  //       route = `/messages/${data?.chatUser?.chatId}`;
  //     } else {
  //       // WarningToast("Can't route. Something went wrong.");
  //       return;
  //     }
  //     NotificationToast({
  //       title: payload.notification.title,
  //       message: payload.notification.body,
  //       route: route,
  //     });
  //   })
  //   .catch((err) => console.log("failed: ", err));

  const dummyVar = null;

  return (
    <AppContext.Provider
      value={{
        dummyVar,
        setUpdatePasswordSuccessfully,
        updatePasswordSuccessfully,
        setLogOutModal,
        logOutModal,
        handleLogin,
        hadleLogout,
        token,
        authRecord,
        }}
    >
      {children}
    </AppContext.Provider>
  );
};


