"use client";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
import { BsArrowUpCircle } from "react-icons/bs";

const totalRevenueSeries = [
  {
    name: "Last Month",
    data: [183, 124, 115, 85, 143, 143, 96],
  },
  {
    name: "Running Month",
    data: [95, 84, 72, 44, 108, 108, 47],
  },
];

const TotalRevenueOptions: any = {
  chart: {
    type: "bar",
    toolbar: {
      show: false,
    },
  },
  colors: ["#475BE8", "#CFC8FF"],
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: false,
      columnWidth: "55%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: false,
  },
  stroke: {
    colors: ["transparent"],
    width: 4,
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  },
  yaxis: {
    title: {
      text: "$ (thousands)",
    },
  },
  fill: {
    opacity: 1,
  },
  legend: {
    position: "top",
    horizontalAlign: "right",
  },
  tooltip: {
    y: {
      formatter(val: number) {
        return `$ ${val} thousands`;
      },
    },
  },
};

function TotalRevenue() {
  return (
    <div className="bg-white rounded-lg w-[60%] p-4 relative">
      <h3 className="text-xl mb-3">Total Revenue</h3>

      <div className="flex gap-6">
        <p className="font-medium text-2xl">$ 236,535</p>

        <div className="flex items-center gap-2">
          <BsArrowUpCircle className="text-xl text-[#275be8]" />

          <div className="text-zinc-600 text-xs">
            <p>0.8%</p>

            <p>Than last month</p>
          </div>
        </div>
      </div>

      <ReactApexChart
        options={TotalRevenueOptions}
        series={totalRevenueSeries}
        type="bar"
        width={"600px"}
        height={"250px"}
      />
    </div>
  );
}

export default TotalRevenue;
