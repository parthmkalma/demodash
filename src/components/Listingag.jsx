"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
const data = [
  { id: 1, name: "Outbound Bot", type: "Outbound", phone: "+61489071671" },
  { id: 2, name: "Inbound Bot", type: "Inbound", phone: "+61489071672" },
  { id: 3, name: "Support Bot", type: "Support", phone: "+61489071673" },
  { id: 4, name: "Outbound Bot", type: "Outbound", phone: "+61489071674" },
  { id: 5, name: "Inbound Bot", type: "Inbound", phone: "+61489071675" },
  { id: 6, name: "Support Bot", type: "Support", phone: "+61489071676" },
  { id: 7, name: "Outbound Bot", type: "Outbound", phone: "+61489071677" },
  { id: 8, name: "Inbound Bot", type: "Inbound", phone: "+61489071678" },
  { id: 9, name: "Support Bot", type: "Support", phone: "+61489071679" },
  { id: 10, name: "Outbound Bot", type: "Outbound", phone: "+61489071680" },
  { id: 11, name: "Inbound Bot", type: "Inbound", phone: "+61489071681" },
  { id: 12, name: "Support Bot", type: "Support", phone: "+61489071682" },
  { id: 13, name: "Outbound Bot", type: "Outbound", phone: "+61489071683" },
  { id: 14, name: "Inbound Bot", type: "Inbound", phone: "+61489071684" },
  { id: 15, name: "Support Bot", type: "Support", phone: "+61489071685" },
  { id: 16, name: "Outbound Bot", type: "Outbound", phone: "+61489071686" },
  { id: 17, name: "Inbound Bot", type: "Inbound", phone: "+61489071687" },
  { id: 18, name: "Support Bot", type: "Support", phone: "+61489071688" },
];

export default function Listingag() {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setPage(0); // Reset to the first page after a search
  };

  const handleRowClick = (id) => {
    router.push(`/agents/${id}`);
  };

  const filteredData = data.filter(
    (row) =>
      row.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.phone.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Search Input */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search assistants..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full bg-white border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b shadow-sm">
              </tr>
            <tr className="bg-gray-50 border-b shadow-sm">
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                Assistant Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                Type
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                Phone Number
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <tr
                  key={row.id}
                  onClick={() => handleRowClick(row.id)}
                  className="cursor-pointer hover:bg-blue-100 transition-colors duration-200"
                >
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">
                    {row.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {row.type}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {row.phone}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Rows per page:</span>
          <select
            value={rowsPerPage}
            onChange={handleChangeRowsPerPage}
            className="p-2 border rounded-lg text-sm text-gray-700"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </select>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => handleChangePage(page - 1)}
            disabled={page === 0}
            className="px-4 py-2 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <span className="text-sm text-gray-600">
            Page {page + 1} of {Math.ceil(filteredData.length / rowsPerPage)}
          </span>
          <button
            onClick={() => handleChangePage(page + 1)}
            disabled={page === Math.floor(filteredData.length / rowsPerPage)}
            className="px-4 py-2 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
