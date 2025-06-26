const SkeletonLoader = () => {
    const skeletonRows = Array.from({ length: 5 });
  
    return (
      <div className="bg-gray-50 mt-3 rounded-[25px] overflow-x-auto p-4 animate-pulse">
        {/* Table Head for Desktop */}
        <div className="hidden md:grid grid-cols-10 gap-4 bg-white rounded-lg px-4 font-semibold text-[12px] mb-4 h-10">
          <div className="col-span-2"> </div>
          <div className="col-span-2"> </div>
          <div className="col-span-2"> </div>
          <div className="col-span-2"> </div>
          <div className="col-span-2"> </div>
        </div>
  
        {/* Rows */}
        {skeletonRows.map((_, index) => (
          <div key={index} className="border-b">
            {/* Mobile Card Skeleton */}
            <div className="md:hidden bg-opacity-40 rounded-[15px] p-4 mb-4 bg-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-300"></div>
                <div className="space-y-2">
                  <div className="w-24 h-3 bg-gray-300 rounded"></div>
                  <div className="w-20 h-2 bg-gray-200 rounded"></div>
                </div>
              </div>
  
              <div className="space-y-3 mb-4 text-[12px]">
                <div className="flex items-center">
                  <span className="w-24 opacity-70">Email:</span>
                  <div className="w-32 h-2 bg-gray-200 rounded"></div>
                </div>
                <div className="flex items-center">
                  <span className="w-24 opacity-70">Contact:</span>
                  <div className="w-28 h-2 bg-gray-200 rounded"></div>
                </div>
                <div className="flex items-center">
                  <span className="w-24 opacity-70">Registered:</span>
                  <div className="w-24 h-2 bg-gray-200 rounded"></div>
                </div>
              </div>
  
              <div className="h-8 bg-gray-300 rounded w-full"></div>
            </div>
  
            {/* Desktop Row Skeleton */}
            <div className="hidden md:grid grid-cols-10 gap-4 items-center py-4 mt-4 text-[12px]">
              <div className="col-span-2 flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <div className="w-20 h-3 bg-gray-200 rounded"></div>
              </div>
              <div className="col-span-2">
                <div className="w-32 h-2 bg-gray-200 rounded"></div>
              </div>
              <div className="col-span-2">
                <div className="w-24 h-2 bg-gray-200 rounded"></div>
              </div>
              <div className="col-span-2">
                <div className="w-20 h-2 bg-gray-200 rounded"></div>
              </div>
              <div className="col-span-2">
                <div className="h-8 bg-gray-300 rounded w-24"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default SkeletonLoader;
  