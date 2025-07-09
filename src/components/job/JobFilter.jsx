import { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import Calendar from "../global/Calendar";

export default function JobFilter({setSearch,search, setDate, date, setStatus, status ,setUpdate}) {
 
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      
      setUpdate((prev) => !prev);
    }, 500); // 500ms delay

    return () => clearTimeout(delayDebounce); // clear on every change
  }, [search, date]);

  const handleSearch = (e) => {
    setSearch(e.target.value); // update temp input only
  };

  
  
  
   return (
     <div className="relative items-center flex gap-4">
      <div className="w-[200px] border-gray-300">
       <label htmlFor="search" className="text-sm font-medium">
         Search by Name
       </label>
       <div className="relative">
         <input
           type="text"
           id="search"
           value={search}
           onChange={handleSearch}
           placeholder="Search..."
           className="bg-white border rounded-md px-3 py-2 text-sm focus:outline-none w-full"
         />
         <button
           type="button"
           onClick={() => setUpdate (prev => !prev)}
           className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#62466B] flex items-center justify-center rounded-md text-sm font-medium p-1"
         >
           <BiSearch className="inline-block text-white" />
         </button>
       </div>
       </div>
       <div className="w-[200px] border-gray-300">
       <label htmlFor="category" className="text-sm font-medium">
         Search by date
       </label>
       <div className="relative">
         {/* <input
           type="date"
           id="date"
           value={date}
           onChange={handleCategory}
           placeholder="Search..."
           className="bg-white border  rounded-md px-3 py-2 text-sm focus:outline-none w-full"
         /> */}
         <Calendar
            endDate={true}
            startDate={date ? date.toISOString().split("T")[0] : ""}
            setStartDate={setDate}
            text={"DD/MM/YY"}
            isStyle={true}
           
          />
          {date && (
            <button
              type="button"
              onClick={() => setDate("")}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#62466B] flex items-center justify-center rounded-md text-sm font-medium p-1"
            >
              <IoClose className="inline-block text-white" />
            </button>
          )}
        
       </div>
       </div>
     </div>
   );
}
