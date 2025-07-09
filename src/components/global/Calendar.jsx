import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarDays } from "react-icons/fa6";
import { dateFormate } from "../../lib/helpers";

const Calendar = ({
  startDate,
  setStartDate = () => {},
  position = "right-0",
  text,
  setEndData = () => {},
  endDate,
  isStyle = false,
  label,
  max,
  min,
}) => {
  const [isOpen, setIsOpen] = useState(false);
 
  const toggleCalendar = () => {
    setIsOpen((prev) => !prev);
  };
 
  const handleChange = (date) => {
    setStartDate(date);
    if (endDate) {
      setEndData(date);
    }
    setIsOpen(false);
  };
 
  return (
    <div className="relative w-full ">
      <label htmlFor="" className="text-[12px] text-[#121516] font-medium">
        {label}
      </label>
      <div
        onClick={toggleCalendar}
        className={`relative w-full h-[36px] p-2 rounded-[8px] border border-[#D9D9D9] bg-white text-[11.63px]
         font-[500] ${
           startDate ? "text-grey-700" : "text-gray-400"
         } cursor-pointer flex items-center`}
      >
        {startDate ? dateFormate(startDate) : "mm/dd/yy"}
 
        <FaRegCalendarDays className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#012C57] w-[12.92px] h-[13.09px]"/>
      </div>
 
      {isOpen && (
        <div
          className={`${
            isStyle ? "absolute  " : "absolute"
          }  z-50 mt-2 ${position}`}
        >
          <DatePicker
            selected={startDate ? new Date(`${startDate}T00:00:00`) : null}
            onChange={handleChange}
            inline
            maxDate={max}
            minDate={min}
            calendarClassName="shadow-lg border rounded-md"
            wrapperClassName="w-[300px]"
            onClickOutside={() => setIsOpen(false)}
          />
        </div>
      )}
    </div>
  );
};
 
export default Calendar;
 