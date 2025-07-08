import { FaMoneyBillTrendUp, FaUser } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi";
import { MdDashboard, MdHomeRepairService, MdReviews } from "react-icons/md";
import { RiDeleteBin7Fill, RiNotificationBadgeFill } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { VscReport } from "react-icons/vsc";

export const sidebarData = [
  {
    title: "Dashboard",
    icon: <MdDashboard color="white" size={20} />,
    whiteicon: <MdDashboard color="#62466B" size={15} />,
    link: "/app/dashboard",
  },
  {
    title: "Users",
    icon: <FaUser color="white" size={20} />,
    whiteicon: <FaUser color="#62466B" size={15} />,
    link: "/app/users",
  },
  {
    title: "Providers",
    icon: <HiUserGroup color="white" size={20} />,
    whiteicon: <HiUserGroup color="#62466B" size={15} />,
    link: "/app/providers",
  },
  {
    title: "Payments",
    icon: <FaMoneyBillTrendUp color="white" size={20} />,
    whiteicon: <FaMoneyBillTrendUp color="#62466B" size={15} />,
    link: "/app/payments",
  },
  {
    title: "Disputes",
    icon: <FaMoneyBillTrendUp color="white" size={20} />,
    whiteicon: <FaMoneyBillTrendUp color="#62466B" size={15} />,
    link: "/app/disputes",
  },
  {
    title: "Sub Category",
    icon: <MdHomeRepairService color="white" size={20} />,
    whiteicon: <MdHomeRepairService color="#62466B" size={15} />,
    link: "/app/request",
  },
 
  {
    title: "Job Request",
    icon: <VscReport color="white" size={20} />,
    whiteicon: <VscReport color="#62466B" size={15} />,
    link: "/app/job-request",
  },
  
  {
    title: "Reviews",
    icon: <MdReviews color="white" size={20} />,
    whiteicon: <MdReviews color="#62466B" size={15} />,
    link: "/app/review",
  },
  {
    title: "Push Notifications",
    icon: <RiNotificationBadgeFill color="white" size={20} />,
    whiteicon: <RiNotificationBadgeFill color="#62466B" size={15} />,
    link: "/app/push-notification",
  },
  {
    title: "Blocked Providers",
    icon: <RiDeleteBin7Fill color="white" size={20} />,
    whiteicon: <RiDeleteBin7Fill color="#62466B" size={15} />,
    link: "/app/delete",
  },
  {
    title: " Reports",
    icon: <TbReportAnalytics or="white" size={20} />,
    whiteicon: <TbReportAnalytics color="#62466B" size={15} />,
    link: "/app/reports",
  },
];
