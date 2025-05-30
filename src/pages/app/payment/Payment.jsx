import React from "react";
import { PaymentsEarnings } from "../../../components/app/payment/PaymentsEarnings";

export const Payment = () => {
  return (
    <div className="p-5">
      <h2 className="text-2xl font-semibold mb-4">Payments & Earnings</h2>
      <PaymentsEarnings />
    </div>
  );
};
