import { useState } from "react";
import { FaAngleRight, FaChevronLeft } from "react-icons/fa6";
export default function Pagination({pagination , setCurrentPage}) {
  const currentPage = pagination?.currentPage;
  const totalPages = pagination?.totalPages;
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex  items-center">
      <button
        onClick={() =>  setCurrentPage((prev) => (prev - 1))}
        className="w-full p-3 text-base bg-transparent"
        aria-label="Previous Page"            
      >
        <FaChevronLeft color="#775B84" />
      </button>

      <div className="bg-[#62466B] flex items-center rounded-[15px]">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`w-full px-4 py-2 text-base text-white ${
              page === currentPage
                ? " bg-gradient-to-r from-[#D9BBF9] to-[#775B84] rounded-l-xl"
                : ""
            }`}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        onClick={() =>  setCurrentPage((prev) => (prev + 1))}
        className="w-full p-3 text-base bg-transparent"
        aria-label="Next Page"
      >
        <FaAngleRight color="#775B84" />
      </button>
    </div>
  );
}
