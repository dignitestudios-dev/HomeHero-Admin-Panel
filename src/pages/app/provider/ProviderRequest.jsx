import React, { useEffect, useState } from "react";
import ProviderList from "../../../components/app/provider/ProviderList";
import ProviderFilter from "../../../components/app/provider/ProviderFilter";
import axios from "../../../axios";
import SkeletonLoader from "../../../components/app/user/SkeletonLoader";
export const ProviderRequest = () => {
  const[provider, setProvider] = useState([]);
  const [pagination, setPagination] = useState({});
  const [currentPage, setCurrentPage] = useState({});
  const[loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [update, setUpdate] = useState(false);
  const [category, setCategory] = useState('');
  useEffect(() => {
    const fetchProviders = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/provider/get-providers?page=${currentPage}&limit=10&search=${search}&categorySearch=${category}`);
        setProvider(response?.data.data.providers);
        setPagination(response?.data.pagination);

      } catch (error) {
        console.error("Error fetching providers:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProviders();
  }, [currentPage, update ]);
  console.log(provider,'provider');
  return (
    <div>
      <div className="flex justify-between p-5">
        <h2 className="text-2xl font-semibold my-4">Providers</h2>
        <ProviderFilter setSearch={setSearch} search={search} setUpdate={setUpdate} setCategory={setCategory} category={category}/>
      </div>
      {loading ? (
        <SkeletonLoader/>
      ) : (
        
      <ProviderList provider={provider} pagination={pagination} setCurrentPage={setCurrentPage} setSearch={setSearch}/>
      )}
    </div>
  );
};
