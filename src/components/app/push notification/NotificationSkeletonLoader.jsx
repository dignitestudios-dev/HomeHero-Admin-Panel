import React from "react";

const NotificationSkeletonLoader = () => {
  return (
    <div className="bg-white animate-pulse">
      <div className="flex items-start justify-between p-4 border-b shadow rounded-xl bg-gray-100">
        {/* Left section */}
        <div className="flex items-start gap-3">
          <div className="mt-1">
            <div className="w-6 h-6 rounded-full bg-[#dcc2f9]" />
          </div>
          <div className="space-y-2">
            <div className="h-4 w-32 bg-gray-300 rounded" /> {/* Title */}
            <div className="h-3 w-64 bg-gray-200 rounded" /> {/* Description */}
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <div className="text-sm text-gray-500 text-right space-y-1">
            <div className="h-3 w-16 bg-gray-300 rounded" /> {/* Time */}
            <div className="h-3 w-20 bg-gray-300 rounded" /> {/* Date */}
          </div>
          <div className="w-5 h-5 rounded bg-gray-300" /> {/* Checkbox placeholder */}
        </div>
      </div>
    </div>
  );
};

export default NotificationSkeletonLoader;
