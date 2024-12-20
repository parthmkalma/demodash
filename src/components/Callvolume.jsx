import React from "react";
import ReactApexCharts from "react-apexcharts";

const Callvolume = () => {
  const chartOptions = {
    chart: {
      type: "line",
      height: 350,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    markers: {
      size: 4,
      colors: ["#6C63FF", "#FF6E6E"], // Purple and pink for markers
      strokeWidth: 2,
      strokeColors: "#fff",
    },
    colors: ["#6C63FF", "#FF6E6E"], // Purple for Inbound, Pink for Outbound
    xaxis: {
      categories: [
        "Dec 13",
        "Dec 14",
        "Dec 15",
        "Dec 16",
        "Dec 17",
        "Dec 18",
        "Dec 19",
        "Dec 20",
      ],
    },
    legend: {
      position: "bottom",
      horizontalAlign: "center",
      markers: {
        radius: 12,
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
    grid: {
      strokeDashArray: 5,
    },
    yaxis: {
      min: 0,
      max: 4,
      tickAmount: 4,
    },
    title: {
      text: "Call Volume",
      align: "left",
      style: {
        fontSize: "18px",
        fontWeight: "bold",
        color: "#333",
      },
    },
    subtitle: {
      text: "Calls received and made ",
      align: "left",
      style: {
        fontSize: "14px",
        fontWeight: "normal",
        color: "#666",
      },
    },
  };

  const chartSeries = [
    {
      name: "Inbound",
      data: [3, 1, 2, 1, 2, 3, 4, 3], // Example data for Inbound
    },
    {
      name: "Outbound",
      data: [0, 1, 0, 2, 1, 2, 1, 2], // Example data for Outbound
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <ReactApexCharts
        options={chartOptions}
        series={chartSeries}
        type="line"
        height={350}
      />
    </div>
  );
};

export default Callvolume;
