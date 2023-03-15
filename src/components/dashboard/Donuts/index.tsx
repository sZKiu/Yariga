"use client";
import React from "react";
import dynamic from "next/dynamic";
("../Donuts");
const ReactAprexCharts = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

function Docunts({
  title,
  number,
  series,
  colors,
}: {
  title: string;
  number: number;
  series: number[];
  colors: string[];
}) {
  return (
    <div className="bg-white rounded-lg flex justify-between items-center py-1 pl-6">
      <div>
        <h3 className="text-gray-600 text-sm">{title}</h3>

        <p className="text-xl font-medium">{number}</p>
      </div>

      <div>
        <ReactAprexCharts
          options={{
            chart: { type: "donut" },
            legend: { show: false },
            dataLabels: { enabled: false },
            colors,
          }}
          series={series}
          type="donut"
          width={"100px"}
          height={"80px"}
        />
      </div>
    </div>
  );
}

export default Docunts;
