import { useState } from "react";
import { FaAngleRight, FaChevronLeft } from "react-icons/fa6";
export default function Pagination() {
  const [pageNo, setPageNo] = useState(1);
  const totalPages = 5;
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handlePageChange = (page) => {
    setPageNo(page);
  };

  return (
    <div className="flex  items-center">
      <button
        onClick={() => setPageNo((prev) => Math.max(prev - 1, 1))}
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
              page === pageNo
                ? " bg-gradient-to-r from-[#D9BBF9] to-[#775B84] rounded-l-xl"
                : ""
            }`}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        onClick={() => setPageNo((prev) => Math.min(prev + 1, totalPages))}
        className="w-full p-3 text-base bg-transparent"
        aria-label="Next Page"
      >
        <FaAngleRight color="#775B84" />
      </button>
    </div>
  );
}
