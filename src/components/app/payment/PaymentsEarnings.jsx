import React from "react";

export const PaymentsEarnings = () => {
  return (
    <div>
      <div className="py-4 min-h-screen">
        {/* Section 1: Payment Records */}
        <div className="bg-gray-50 rounded-2xl shadow p-6 mb-6">
          <div className="overflow-x-auto space-y-4 ">
            <div className="grid grid-cols-7 bg-white rounded-lg px-4 text-sm font-semibold text-left p-2 ">
              <div>User</div>
              <div>Amount</div>
              <div>Admin Commission</div>
              <div>Provider Earnings</div>
              <div>Booking ID</div>
              <div>Date</div>
              <div className="w-full flex pl-4">Action</div>
            </div>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((items) => (
              <div
                key={items}
                className="grid grid-cols-7 text-sm p-2 border-b"
              >
                <div>John Doe</div>
                <div>$25.00</div>
                <div>$5.00</div>
                <div>$5.00</div>
                <div>#12345</div>
                <div>2025-05-08</div>
                <button className="w-28  px-2 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition">
                  View Refunds
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
