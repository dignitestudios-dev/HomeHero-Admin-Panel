import { useEffect } from "react";
import { BiSearch } from "react-icons/bi";

export default function ProviderFilter({setSearch , search, setCategory, category, setUpdate}) {
  console.log(category,' ---category');
 
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      
      setUpdate((prev) => !prev);
    }, 500); // 500ms delay

    return () => clearTimeout(delayDebounce); // clear on every change
  }, [search, category]);

  const handleSearch = (e) => {
    setSearch(e.target.value); // update temp input only
  };

   const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  // useEffect(() => {
  //   // Jab search ya category empty ho, tabhi update trigger ho
  //   if (search === "" || category === "") {
  //     setUpdate((prev) => !prev);
  //   }
  // }, [search, category]);
  
   return (
     <div className="relative items-center flex gap-4">
      <div className="w-[400px] border-gray-300">
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
       <div className="w-[400px] border-gray-300">
       <label htmlFor="category" className="text-sm font-medium">
         Search by Category
       </label>
       <div className="relative">
         <input
           type="text"
           id="category"
           value={category}
           onChange={handleCategory}
           placeholder="Search..."
           className="bg-white border  rounded-md px-3 py-2 text-sm focus:outline-none w-full"
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
     </div>
   );
}
