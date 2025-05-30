import React from "react";

export const FilterBooking = ({
  providerFilter,
  setProviderFilter,
  serviceFilter,
  setServiceFilter,
  dateFilter,
  setDateFilter,
}) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Filter by Provider"
        value={providerFilter}
        onChange={(e) => setProviderFilter(e.target.value)}
        style={{ marginRight: "10px", padding: "5px" }}
      />
      <input
        type="text"
        placeholder="Filter by Service"
        value={serviceFilter}
        onChange={(e) => setServiceFilter(e.target.value)}
        style={{ marginRight: "10px", padding: "5px" }}
      />
      <input
        type="date"
        value={dateFilter}
        onChange={(e) => setDateFilter(e.target.value)}
        style={{ padding: "5px" }}
      />
    </div>
  );
};