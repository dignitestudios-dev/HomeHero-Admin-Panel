export default function UserFilter() {
  return (
    <div className="flex items-center gap-3">
      <select
        name=""
        className="bg-[#FBFBFB1A] event-select w-[130px] py-1 px-2 focus:outline-none border border-[#F4F4F480] text-black h-[32px] text-[10px] font-[400] rounded-[10px] "
        id=""
      >
        <option value="">Select Name</option>
      </select>
      <select
        name=""
        className="bg-[#FBFBFB1A] event-select w-[130px] py-1 px-2 focus:outline-none border border-[#F4F4F480] text-black h-[32px] text-[10px] font-[400] rounded-[10px] "
        id=""
      >
        <option value="">Select Status</option>
      </select>
      <select
        name=""
        className="bg-[#FBFBFB1A] event-select w-[130px] py-1 px-2 focus:outline-none border border-[#F4F4F480] text-black h-[32px] text-[10px] font-[400] rounded-[10px] "
        id=""
      >
        <option value="">Select Numder </option>
      </select>
    </div>
  );
}
