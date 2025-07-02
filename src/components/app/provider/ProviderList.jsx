// import { person, view } from "../../../assets/export";
import { person } from "../../../assets/export";
import Pagination from "../../global/Pagination";
import { useNavigate } from "react-router";

export default function ProviderList({provider,  setCurrentPage , pagination, }) {
 

  const navigate = useNavigate("");
  return (
    <div>
      <div className="bg-gray-50 mt-3 rounded-[25px] overflow-x-auto p-4">
        <div className="grid grid-cols-7 gap-4 text-black bg-white rounded-lg px-4 font-semibold text-[12px] mb-4">
          <div className="py-3 text-left">Name</div>

          {/* Category Filter */}
          <div className="py-3">
            <div  className="text-left outline-none  py-1 rounded-md">
         Categories
              
            </div>
          </div>

          {/* Location Filter */}
          <div className="py-3">
            <div className=" text-left outline-none  py-1 rounded-md">
               Locations
              
            </div>
          </div>

          {/* Status Filter */}
          <div className="py-3">
            <div className=" text-left outline-none  py-1 rounded-md ">
              Statuses
              
            </div>
          </div>

          <div className="py-3 text-left">
            <div className="text-left outline-none  py-1 rounded-md">
            Block Status
              
            </div>
          </div>
          <div className="py-3 text-left">Earnings</div>
          <div className="py-3 text-left pl-4">Action</div>
        </div>

        {provider?.map((item,index) => (
          <div key={index} className="overflow-x-auto">
            <div className="grid grid-cols-7 gap-4 items-center  py-2 mb-4 text-black text-[12px]">
              <div className=" flex items-center justify-start gap-3">
                <img
                  src={item?.profilePicture}
                  alt="Profile"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <span>{item?.name}</span>
              </div>
              <div className=" text-left break-words text-wrap">
                {item?.detail?.category}
              </div>
              <div className=" text-left">{item?.state},{' '}{item?.city}</div>
              <div className=" text-left">  {item?.identityStatus}</div>
              <div className={item?.isBlocked ? "text-red-500 font-semibold" : "text-green-500 font-semibold"} text-left  >{item?.isBlocked ? "Blocked" : "Unblocked"}</div>
              <div className=" text-left">{item?.earnings}</div>

              <div className=" flex justify-start">
                <button
               onClick={() => navigate(`/app/providers/${item?._id}`, { state: item })}
                  className="bg-[#62466B] text-white flex items-center justify-center px-4 py-2 rounded-[8px] gap-2"
                >
                  {/* <img src={view} alt="" className="w-5 h-5" /> */}
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end">  
        <Pagination setCurrentPage={setCurrentPage} pagination={pagination} />
      </div>
    </div>
    // <div className="p-6 bg-gray-100 min-h-screen space-y-8">
    //   <h2 className="text-2xl font-bold">Service Provider Management</h2>

    //   {/* Filters */}
    //   <div className="flex flex-wrap gap-4 mb-6">
    //     <select className="border p-2 rounded w-full sm:w-auto">
    //       <option>Filter by Category</option>
    //       <option>Driver</option>
    //       <option>Electrician</option>
    //     </select>
    //     <select className="border p-2 rounded w-full sm:w-auto">
    //       <option>Approval Status</option>
    //       <option>Approved</option>
    //       <option>Pending</option>
    //       <option>Rejected</option>
    //     </select>
    //     <input
    //       type="text"
    //       placeholder="Search by Location"
    //       className="border p-2 rounded w-full sm:w-auto"
    //     />
    //   </div>

    //   {/* Provider Cards */}
    //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    //     {providers.map((provider) => (
    //       <div
    //         key={provider.id}
    //         className="bg-white p-4 rounded-xl shadow space-y-2"
    //       >
    //         <div className="text-lg font-semibold">{provider.name}</div>
    //         <div className="text-sm text-gray-600">
    //           Category: {provider.category}
    //         </div>
    //         <div className="text-sm text-gray-600">
    //           Location: {provider.location}
    //         </div>
    //         <div className="text-sm">
    //           Status:{" "}
    //           <span
    //             className={
    //               provider.status === "Approved"
    //                 ? "text-green-600"
    //                 : "text-yellow-600"
    //             }
    //           >
    //             {provider.status}
    //           </span>
    //         </div>
    //         <div className="text-sm">
    //           Verified:{" "}
    //           <span
    //             className={
    //               provider.verified ? "text-green-600" : "text-red-600"
    //             }
    //           >
    //             {provider.verified ? "Yes" : "No"}
    //           </span>
    //         </div>
    //         <div className="text-sm font-medium">
    //           Earnings: {provider.earnings}
    //         </div>

    //         {/* Actions */}
    //         <div className="flex flex-wrap gap-2 mt-3">
    //           {provider.status === "Pending" && (
    //             <>
    //               <button className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700">
    //                 Approve
    //               </button>
    //               <button className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700">
    //                 Reject
    //               </button>
    //             </>
    //           )}
    //           <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
    //             View Profile
    //           </button>
    //           <button className="bg-gray-700 text-white px-3 py-1 rounded text-sm hover:bg-gray-800">
    //             Block
    //           </button>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
}
