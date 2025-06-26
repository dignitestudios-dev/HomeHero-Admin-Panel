// import { useUsers } from "../../hooks/api/Get";/

import { useEffect, useState } from "react";
import { LineGraph } from "../../../components/app/dashboard/Graph";
import { Hero } from "../../../components/app/dashboard/Hero";
import LatestList from "../../../components/app/dashboard/LatestTable";
import axios from "../../../axios";
import SkeletonLoader from "../../../components/app/user/SkeletonLoader";

const DummyHome = () => {
  const[loading, setLoading] = useState(false);
    const [data, setData] = useState('');
  const [GraphPage, setGraphPage] = useState();
    useEffect(() => {
      const fetchData = async () => {
        try {
          setLoading(true);
          const response = await axios.get("/dashboard/get-stats");
          setData(response?.data?.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }, []);

    useEffect(() => {
      const fetchGraphData = async () => {
        try {
          setLoading(true);
          const response = await axios.get("/dashboard/get-graph-data?year=2025");
          setGraphPage(response?.data?.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchGraphData();
    }, []);
   
  return (
    <div className="p-5">
      <p className="text-2xl font-semibold">Dashboard</p>
      <Hero data={data}/>
      <LineGraph Graphdata={GraphPage}/>
      <div className="pt-9">
        <p className="text-2xl font-semibold">Latest Users</p>
        {loading ? (
            <SkeletonLoader/>
      ) : (
        <LatestList data={data}/>
      )}
      </div>
    </div>
  );
};

export default DummyHome;
