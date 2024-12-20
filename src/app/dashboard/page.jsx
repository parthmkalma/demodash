"use client";

import { useState } from "react";
import DonutChart from "@/components/donut-chart";
import Callvolume from "@/components/Callvolume";
import Dashcard from "@/components/Dashcard";

const agents = [
  {
    id: "CE_550313744",
    name: "Agent 1",
    availableMinutes: 98,
    totalMinutesAllocated: 100,
    totalCalls: 1,
    minutesUsed: "1:18",
    avgCallDuration: "1:18",
    completionRate: 75,
    customGreeting: "Hey there!",
  },
  {
    id: "CE_550313745",
    name: "Agent 2",
    availableMinutes: 45,
    totalMinutesAllocated: 100,
    totalCalls: 2,
    minutesUsed: "2:36",
    avgCallDuration: "1:18",
    completionRate:     85,
    customGreeting: "Welcome! How can I help?",
  },
];

export default function dashboard() {
  const [selectedAgent, setSelectedAgent] = useState(agents[0]);

  return (
    <div className="min-h-screen bg-gray-50 font-Nunito">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-black mb-4">
            Agent Dashboard
          </h1>
          <select
            className="w-72 p-2 border border-blue-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onChange={(e) =>
              setSelectedAgent(
                agents.find((a) => a.id === e.target.value) || agents[0]
              )
            }
            value={selectedAgent.id}
          >
            {agents.map((agent) => (
              <option key={agent.id} value={agent.id}>
                {agent.name} ({agent.id})
              </option>
            ))}
          </select>

          {/* </div> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Stats Grid */}
          <div className="bg-white rounded-lg shadow-md p-6 flex">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {/* Total Calls */}
              <div className="flex flex-col items-center">
                <h3 className="text-sm font-medium text-blue-600">
                  Total calls
                </h3>
                <p className="mt-1 text-3xl font-semibold text-black">
                  {selectedAgent.totalCalls}
                </p>
              </div>

              {/* Minutes Used */}
              <div className="flex flex-col items-center">
                <h3 className="text-sm font-medium text-blue-600">
                  Minutes used
                </h3>
                <p className="mt-1 text-3xl font-semibold text-black">
                  {selectedAgent.minutesUsed}
                </p>
              </div>

              {/* Avg. Call Duration */}
              <div className="flex flex-col items-center">
                <h3 className="text-sm font-medium text-blue-600">
                  Avg. call duration
                </h3>
                <p className="mt-1 text-3xl font-semibold text-black">
                  {selectedAgent.avgCallDuration}
                </p>
              </div>

              {/* Allocated Minutes */}
              <div className="flex flex-col items-center">
                <h3 className="text-sm font-medium text-blue-600">
                  Allocated Minutes
                </h3>
                <p className="mt-1 text-3xl font-semibold text-black">
                  {selectedAgent.totalMinutesAllocated}:00
                </p>
              </div>

              {/* Available Minutes */}
              <div className="flex flex-col items-center">
                <h3 className="text-sm font-medium text-blue-600">
                  Available Minutes
                </h3>
                <p className="mt-1 text-3xl font-semibold text-black">
                  {selectedAgent.availableMinutes}:00
                </p>
              </div>
            </div>
          </div>

          {/* Chart */}
          <div className="bg-white rounded-lg shadow-md p-6 ">
            <h2 className="text-xl font-bold text-black mb-4">
              Call Completion Ratio
            </h2>{" "}
            {/* Heading */}
            <div className="relative flex items-center justify-center">
              <DonutChart percentage={selectedAgent.completionRate} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-3xl font-bold text-black">
                    {selectedAgent.completionRate}%
                  </p>
                  <p className="text-sm text-blue-600">Success</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Greeting */}

        <Callvolume />
        <div className="mt-4">
          <Dashcard />
        </div>
      </div>
    </div>
  );
}
