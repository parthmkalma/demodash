"use client";

import { Sidebar } from "@/components/Sidebar";
import { useState } from "react";
import "./globals.css";
import {Navbar} from "@/components/Navbar";

export default function RootLayout({ children }) {
  // Sidebar collapsed state
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <html lang="en">
      <body className="flex flex-col bg-gray-50 min-h-screen">
        {/* Navbar Component */}
        <Navbar isCollapsed={isCollapsed} />

        <div className="flex flex-1">
          {/* Sidebar Component */}
          <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

          {/* Main Content Area */}
          <main
            className={`transition-all duration-300 ${
              isCollapsed ? "ml-[80px]" : "ml-[240px]"
            } flex-1 p-6`}
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
