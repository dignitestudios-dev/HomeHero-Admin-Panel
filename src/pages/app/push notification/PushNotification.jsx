import { useState } from "react";
import Cards from "../../../components/app/push notification/Cards";
import NotificationCreateModal from "../../../components/app/push notification/NotificationCreateModal";

const PushNotification = () => {
  const [isNotification, setIsNotification] = useState(false);
  return (
    <div>
      <div className="flex justify-between">
        <h3 className="text-[#FFFFFF] text-2xl font-semibold">Notification</h3>
        <button
          onClick={() => setIsNotification(!isNotification)}
          className="w-[168px] h-[44px] text-[#FFFFFF] bg-[linear-gradient(180deg,_#D9BBF9_0%,_#775B84_90%)] rounded-[8px]"
        >
          Create
        </button>
      </div>
      <div className="flex flex-col gap-4 mt-5">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((items) => (
          <Cards key={items} />
        ))}
      </div>
      <NotificationCreateModal
        isOpen={isNotification}
        setIsOpen={setIsNotification}
      />
    </div>
  );
};

export default PushNotification;
