import { BiSearch } from "react-icons/bi";
import { useState } from "react";
export default function UserFilter({setSearch , search, setUpdate}) {
  

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="relative items-center flex">
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search by Name"
        className="bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none pr-10"
      />
      <button
        type="button"
        onClick={() => setUpdate (prev => !prev)}
        className="w-8 h-8 absolute right-1 top-1/2 transform -translate-y-1/2 bg-[#62466B] flex items-center justify-center rounded-md text-sm font-medium "
      >
        <BiSearch className="inline-block text-white" />
      </button>
    </div>
  );
}
