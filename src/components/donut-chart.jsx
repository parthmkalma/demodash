import React from "react";

const DonutChart = ({ percentage }) => {
  const radius = 50; // Radius of the circle
  const circumference = 2 * Math.PI * radius; // Circumference of the circle
  const strokeDasharray = `${circumference} ${circumference}`; // Total length of the stroke
  const strokeDashoffset = circumference - (percentage / 100) * circumference; // Offset based on percentage

  return (
    <svg width="150" height="150" viewBox="0 0 120 120">
      {/* Background Circle */}
      <circle
        cx="60"
        cy="60"
        r={radius}
        fill="transparent"
        stroke="#E5E7EB" // Light gray color for background
        strokeWidth="10"
      />
      {/* Foreground Circle */}
      <circle
        cx="60"
        cy="60"
        r={radius}
        fill="transparent"
        stroke="#3B82F6" // Blue color for progress
        strokeWidth="10"
        strokeDasharray={strokeDasharray}
        strokeDashoffset={strokeDashoffset}
        transform="rotate(-90 60 60)" // Rotates the circle to start at the top
        style={{ transition: "stroke-dashoffset 0.5s ease" }} // Smooth transition for animation
      />
    </svg>
  );
};

export default DonutChart;
