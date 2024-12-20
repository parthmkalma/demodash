"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronLeft, ChevronRight, Search } from "lucide-react";

export default function Page() {
  const assistants = [
    {
      id: "1",
      name: "Outbound Bot",
      type: "Outbound",
      phoneNumber: "+61489071671",
      avatar: "/placeholder.svg",
    },
    {
      id: "2",
      name: "Sales Assistant",
      type: "Outbound",
      phoneNumber: "+61489071672",
      avatar: "/placeholder.svg",
    },
    {
      id: "3",
      name: "Support Bot",
      type: "Inbound",
      phoneNumber: "+61489071673",
      avatar: "/placeholder.svg",
    },
    {
      id: "4",
      name: "Customer Service",
      type: "Inbound",
      phoneNumber: "+61489071674",
      avatar: "/placeholder.svg",
    },
    {
      id: "5",
      name: "Lead Generator",
      type: "Outbound",
      phoneNumber: "+61489071675",
      avatar: "/placeholder.svg",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [sortDirection, setSortDirection] = useState("asc");
  const [isRowsPerPageOpen, setIsRowsPerPageOpen] = useState(false);

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

  return (
    <div className="w-full  mx-auto p-4 space-y-4 ">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="border rounded-lg overflow-hidden bg-white ">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left">
                <button
                  onClick={toggleSort}
                  className="flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-blue-600"
                >
                  Assistant Name
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      sortDirection === "desc" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Type
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Phone Number
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {currentAssistants.map((assistant) => (
              <tr key={assistant.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Image
                      src={assistant.avatar}
                      alt={assistant.name}
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <span className="text-sm font-medium text-gray-900">
                      {assistant.name}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      assistant.type === "Outbound"
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {assistant.type}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {assistant.phoneNumber}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between">
        <div className="relative">
          <button
            onClick={() => setIsRowsPerPageOpen(!isRowsPerPageOpen)}
            className="inline-flex items-center gap-2 px-3 py-2 border rounded-lg text-sm text-gray-700 hover:bg-gray-50"
          >
            {rowsPerPage} rows
            <ChevronDown
              className={`h-4 w-4 transition-transform ${
                isRowsPerPageOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {isRowsPerPageOpen && (
            <div className="absolute top-full mt-1 w-24 bg-white border rounded-lg shadow-lg py-1">
              {[5, 10, 20, 50].map((value) => (
                <button
                  key={value}
                  onClick={() => {
                    setRowsPerPage(value);
                    setIsRowsPerPageOpen(false);
                    setCurrentPage(1);
                  }}
                  className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  {value} rows
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-700">
            {startIndex + 1}-{Math.min(endIndex, sortedAssistants.length)} of{" "}
            {sortedAssistants.length}
          </span>
          <div className="flex gap-1">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-2 border rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="sr-only">Previous page</span>
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="p-2 border rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="sr-only">Next page</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
