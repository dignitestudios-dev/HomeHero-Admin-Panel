// import { useUsers } from "../../hooks/api/Get";/

import { LineGraph } from "../../../components/app/dashboard/Graph";
import { Hero } from "../../../components/app/dashboard/Hero";
import LatestList from "../../../components/app/dashboard/LatestTable";

const DummyHome = () => {
  return (
    <div className="p-5">
      <p className="text-2xl font-semibold">Dashboard</p>
      <Hero />
      <LineGraph />
      <div className="pt-9">
        <p className="text-2xl font-semibold">Latest Users</p>
        <LatestList />
      </div>
    </div>
  );
};

export default DummyHome;
