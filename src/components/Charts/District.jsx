import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["State", "Crime Count"],
  ["Andhra Pradesh", 1200],
  ["Arunachal Pradesh", 200],
  ["Assam", 800],
  ["Bihar", 1500],
  ["Chhattisgarh", 1000],
  ["Goa", 50],
  ["Gujarat", 1200],
  ["Haryana", 700],
  ["Himachal Pradesh", 300],
  ["Jharkhand", 800],
  ["Karnataka", 1300],
  ["Kerala", 600],
  ["Madhya Pradesh", 1400],
  ["Maharashtra", 1800],
  ["Manipur", 100],
  ["Meghalaya", 150],
  ["Mizoram", 50],
  ["Nagaland", 80],
  ["Odisha", 900],
  ["Punjab", 500],
  ["Rajasthan", 1100],
  ["Sikkim", 30],
  ["Tamil Nadu", 1200],
  ["Telangana", 1000],
  ["Tripura", 70],
  ["Uttar Pradesh", 1800],
  ["Uttarakhand", 300],
  ["West Bengal", 1200],
];

export const options = {
  region: "IN",
  displayMode: "markers",
  sizeAxis: { minValue: 0, maxValue: 100 },
  colorAxis: { colors: ["#FFFFFF", "#000000"] },
  backgroundColor: "#212c3a",
  datalessRegionColor: "#8f9bd5",
  defaultColor: "blue",
   displayMode: 'regions',
  resolution: "provinces",
};

const GeoMap = () => {
  return (
    <Chart
      chartType="GeoChart"
      // width="100%"
      height="100%"
      data={data}
      options={options}
    />
  );
};

export default GeoMap;
