"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Search,
  Grid,
  List,
} from "lucide-react";
import { useRouter } from "next/navigation";
// import "../styles/globals.css";

export default function Page() {
  const router = useRouter();
  const assistants = [
    {
      id: "1",
      name: "Outbound Bot",
      type: "Outbound",
      phoneNumber: "+61489071671",
      avatar: "/placeholder.svg",
      assistantId: "CE_550313544",
      availableMinutes: 98,
    },
    {
      id: "2",
      name: "Sales Assistant",
      type: "Outbound",
      phoneNumber: "+61489071672",
      avatar: "/placeholder.svg",
      assistantId: "CE_550313545",
      availableMinutes: 120,
    },
    {
      id: "3",
      name: "Support Bot",
      type: "Inbound",
      phoneNumber: "+61489071673",
      avatar: "/placeholder.svg",
      assistantId: "CE_550313546",
      availableMinutes: 45,
    },
    {
      id: "4",
      name: "Customer Service",
      type: "Inbound",
      phoneNumber: "+61489071674",
      avatar: "/placeholder.svg",
      assistantId: "CE_550313547",
      availableMinutes: 75,
    },
    {
      id: "5",
      name: "Lead Generator",
      type: "Outbound",
      phoneNumber: "+61489071675",
      avatar: "/placeholder.svg",
      assistantId: "CE_550313548",
      availableMinutes: 60,
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [sortDirection, setSortDirection] = useState("asc");
  const [isRowsPerPageOpen, setIsRowsPerPageOpen] = useState(false);
  const [viewMode, setViewMode] = useState("list");

  // Filter assistants based on search query
  const filteredAssistants = assistants.filter((assistant) =>
    assistant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort assistants
  const sortedAssistants = [...filteredAssistants].sort((a, b) => {
    if (sortDirection === "asc") {
      return a.name.localeCompare(b.name);
    }
    return b.name.localeCompare(a.name);
  });

  // Calculate pagination
  const totalPages = Math.ceil(sortedAssistants.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentAssistants = sortedAssistants.slice(startIndex, endIndex);

  // Handle sort toggle
  const toggleSort = () => {
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  // Handle agent selection
  const handleAgentClick = async (agent) => {
    const { id } = await agent;
    router.push(`/agent/${id}`);
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6 space-y-6 bg-gray-50 font-poppins">
      {/* <h1 className="text-3xl font-bold text-gray-800 mb-8">AI Assistants</h1> */}
      <div className="flex justify-between items-center">
        <div className="relative flex-grow mr-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search assistants"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out"
          />
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => setViewMode("list")}
            className={`p-2 rounded-lg transition duration-200 ease-in-out ${
              viewMode === "list"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            <List className="h-5 w-5" />
          </button>
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 rounded-lg transition duration-200 ease-in-out ${
              viewMode === "grid"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            <Grid className="h-5 w-5" />
          </button>
        </div>
      </div>

      {viewMode === "list" ? (
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left">
                  <button
                    onClick={toggleSort}
                    className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-blue-600 transition duration-200 ease-in-out"
                  >
                    Assistant Name
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        sortDirection === "desc" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Phone Number
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Available Minutes
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {currentAssistants.map((assistant) => (
                <tr
                  key={assistant.id}
                  className="hover:bg-gray-50 cursor-pointer transition duration-150 ease-in-out"
                  onClick={() => handleAgentClick(assistant)}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Image
                        src={assistant.avatar}
                        alt={assistant.name}
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                      <span className="text-sm font-medium text-gray-800">
                        {assistant.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        assistant.type === "Outbound"
                          ? "bg-green-100 text-green-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {assistant.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {assistant.phoneNumber}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {assistant.availableMinutes}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentAssistants.map((assistant) => (
            <div
              key={assistant.id}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200 cursor-pointer"
              onClick={() => handleAgentClick(assistant)}
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={assistant.avatar}
                  alt={assistant.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {assistant.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {assistant.assistantId}
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Type:</span>{" "}
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      assistant.type === "Outbound"
                        ? "bg-green-100 text-green-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {assistant.type}
                  </span>
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Phone:</span>{" "}
                  {assistant.phoneNumber}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Available Minutes:</span>{" "}
                  {assistant.availableMinutes}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="flex items-center justify-between mt-6">
        <div className="relative">
          <button
            onClick={() => setIsRowsPerPageOpen(!isRowsPerPageOpen)}
            className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition duration-150 ease-in-out"
          >
            {rowsPerPage} rows
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-200 ${
                isRowsPerPageOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {isRowsPerPageOpen && (
            <div className="absolute top-full mt-1 w-24 bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-10">
              {[5, 10, 20, 50].map((value) => (
                <button
                  key={value}
                  onClick={() => {
                    setRowsPerPage(value);
                    setIsRowsPerPageOpen(false);
                    setCurrentPage(1);
                  }}
                  className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out"
                >
                  {value} rows
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">
            {startIndex + 1}-{Math.min(endIndex, sortedAssistants.length)} of{" "}
            {sortedAssistants.length}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition duration-150 ease-in-out"
            >
              <span className="sr-only">Previous page</span>
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition duration-150 ease-in-out"
            >
              <span className="sr-only">Next page</span>
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
