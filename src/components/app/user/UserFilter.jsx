import { useEffect } from "react";
import { BiSearch } from "react-icons/bi";
export default function UserFilter({setSearch , search, setUpdate}) {
  
useEffect(() => {
    const delayDebounce = setTimeout(() => {
      
      setUpdate((prev) => !prev);
    }, 500); // 500ms delay

    return () => clearTimeout(delayDebounce); // clear on every change
  }, [search]);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="relative  flex flex-col items-start">
      <label htmlFor="search" className="text-sm font-medium">Search by Name</label>
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search..."
        className="bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none pr-12"
      />
      <button
        type="button"
        onClick={() => setUpdate (prev => !prev)}
        className="absolute right-2 top-10 transform -translate-y-1/2 bg-[#62466B] flex items-center justify-center rounded-md text-sm font-medium p-1 "
      >
        <BiSearch className="inline-block text-white" />
      </button>
    </div>
  );
}
