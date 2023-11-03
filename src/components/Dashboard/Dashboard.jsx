import React from "react";
import "./Dashboard.css";
import Table from "../Cases/Cases";
import GeoMap from "../Charts/GeoMap";
import DonutChart from "../Charts/DonutChart";
import Navtop from "../Navbar/Navtop";
import ChandigarhGeoChart from "../Charts/chandigarhGeoMap";
import ChandigarhMap from "../Charts/chandigarhGeoMap";
import DistrictWiseCrimeMap from "../Charts/District";
import CrimeRateLineChart from "../Charts/lineChart";

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <Navtop />
      <div className="graph-cases">
        <div className="graph-cases-left">
          <div className="graph-cases-left-head">
            Officers Position: Officers name
          </div>
          <div className="graph-cases-left-geo-graph">
            <div className="m">
              <GeoMap />
            </div>
            <div className="mm">
              <DistrictWiseCrimeMap />
            </div>
          </div>
          <div className="graph-cases-left-other-graph">
            <CrimeRateLineChart />
          </div>
        </div>
        <div className="graph-cases-right">
          <div className="graph-cases-right-graph">
            <DonutChart />
          </div>
          <div className="cases">
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
