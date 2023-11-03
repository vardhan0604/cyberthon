import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Solved", 11],
  ["New Cases", 3],
  ["Assigned", 7], // CSS-style declaration
];

export const options = {
    legend: {
        textStyle: {
          color: "#fff",
          fontSize: 16,
        // Set the color of the legend text
        },
        spacing: 20
      },
    pieHole: 0.6,
    is3D: false,
    backgroundColor: "#111312",
    color: "#fff"
  };






const DonutChart = () => {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="100%"
      data={data}
      options={options}
    />
  )
}

export default DonutChart