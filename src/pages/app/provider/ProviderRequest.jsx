import React from "react";
import ProviderList from "../../../components/app/provider/ProviderList";
import ProviderFilter from "../../../components/app/provider/ProviderFilter";

export const ProviderRequest = () => {
  return (
    <div>
      <div className="flex justify-between p-5">
        <h2 className="text-2xl font-semibold my-4">Providers</h2>
        <ProviderFilter />
      </div>
      <ProviderList />
    </div>
  );
};
