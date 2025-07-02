import { useEffect, useState } from "react";
import Cards from "../../../components/app/push notification/Cards";
import NotificationCreateModal from "../../../components/app/push notification/NotificationCreateModal";
import axios from "../../../axios";
import NotificationSkeletonLoader from "../../../components/app/push notification/NotificationSkeletonLoader";
const PushNotification = () => {
  const [isNotification, setIsNotification] = useState(false);
  const [notificationData, setNotificationData] = useState([]);
  const [pagination, setPagination] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const fetchNotificationData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/notification/get-notifications?page=${currentPage}&limit=10`);
      if (response.status === 200) {
        setNotificationData(response.data.data.notifications);
        setPagination(response.data.data.pagination);
      }
    } catch (error) {
      console.error("Error fetching notification data:", error);
    }finally{
      setLoading(false);
    }
  };
  const handleCheckboxChange = async (id) => {
   try {
    const response = await axios.post(`/notification/read-notification`, { notificationID: id });
    if (response.status === 200) {
      fetchNotificationData();
    }
   } catch (error) {
    console.error("Error toggling notification:", error);
   }
  };
  useEffect(() => {
    fetchNotificationData();
  }, [currentPage, ]);
  return (
    <div>
      <div className="flex justify-between">
        <h3 className="text-black text-2xl font-semibold">Notification</h3>
        <button
          onClick={() => setIsNotification(!isNotification)}
          className="w-[168px] h-[44px] text-[#FFFFFF] bg-[linear-gradient(180deg,_#D9BBF9_0%,_#775B84_90%)] rounded-[8px]"
        >
          Create
        </button>
      </div>
      <div className="flex flex-col gap-4 mt-5">
        {
        loading ? (
          <NotificationSkeletonLoader/>
        ):(
        notificationData.length> 0?(
          notificationData.map((items) => (
            <Cards key={items._id}       data={items} handleCheckboxChange={handleCheckboxChange} />
          ))
        ):(
          <h1 className="text-black text-2xl font-semibold">No Notification Found</h1>
        )
        
       )}
        
      </div>
      <NotificationCreateModal fetchNotificationData={fetchNotificationData}
        isOpen={isNotification}
        setIsOpen={setIsNotification}
      />
    </div>
  );
};

export default PushNotification;
