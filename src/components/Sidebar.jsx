"use client";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  History,
  HelpCircle,
  LayoutDashboard,
  LogOut,
  Menu,
  Rocket,
  Settings,
  Share2,
  UserSquare2,
  // puzzle,
  Puzzle,
  Wand2,
} from "lucide-react";

const NavItem = ({ href, icon: Icon, label, isActive, isCollapsed }) => {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-4 py-2.5  rounded-lg text-[15px] transition-all ${
        isActive
          ? "bg-blue-600 text-white"
          : "text-gray-600 hover:bg-blue-50 hover:text-blue-600 "
      }`}
    >
      <Icon
        className={`transition-all ${isCollapsed ? "h-5 w-5" : "h-6 w-6"} ${
          isActive ? "text-white" : "text-gray-600"
        }`}
      />
      {!isCollapsed && <span className="font-medium">{label}</span>}
    </Link>
  );
};

export function Sidebar({ isCollapsed, setIsCollapsed }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const pathname = usePathname();
  const [isGettingStartedOpen, setIsGettingStartedOpen] = React.useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside
      className={`text-black fixed font-inter left-0 top-0 h-screen bg-white border-r  border-gray-200 flex flex-col overflow-hidden transition-all duration-300 ease-in-out ${
        isCollapsed ? "w-[80px]" : "w-[240px]"
      }`}
    >
      {/* Header */}
      <div className="h-[60px] px-4 flex items-center justify-between border-b border-gray-100">
        {!isCollapsed && (
          <Link href="/" className="flex items-center gap-2">
            AI
            <img src="/logo.svg" alt="logo" className="h-8" />
          </Link>
        )}
        <button
          onClick={toggleSidebar}
          className="text-gray-600 hover:text-blue-600"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto">
        <div className="px-2 py-2">
          <NavItem
            href="/dashboard"
            icon={LayoutDashboard}
            label="Dashboard"
            isActive={pathname === "/dashboard"}
            isCollapsed={isCollapsed}
          />

          {/* Agent Section */}
          <div className="mt-6">
            {!isCollapsed && (
              <div className="px-4 mb-2 text-xs font-medium text-gray-500">
                Agent
              </div>
            )}
            <NavItem
              href="/agentconfig"
              icon={UserSquare2}
              label="Agents configuration"
              isActive={pathname === "/agentconfig"}
              isCollapsed={isCollapsed}
            />
          </div>

          {/* Call Section */}
          <div className="mt-6">
            {!isCollapsed && (
              <div className="px-4 mb-2 text-xs font-medium text-gray-500">
                Tools
              </div>
            )}
            <NavItem
              href="/tools"
              icon={History}
              label="Tools"
              isActive={pathname === "/tools"}
              isCollapsed={isCollapsed}
            />
          </div>
          <div className="mt-6">
            {!isCollapsed && (
              <div className="px-4 mb-2 text-xs font-medium text-gray-500">
                Tools
              </div>
            )}
            <NavItem
              href="/integration"
              icon={Puzzle}
              label="Integration"
              isActive={pathname === "/integration"}
              isCollapsed={isCollapsed}
            />
          </div>
        </div>
      </nav>

      {/* Footer Navigation */}
      <div className="border-t border-gray-100">
        <div className="px-2 py-2">
          <NavItem
            href="/settings"
            icon={Settings}
            label="Settings"
            isCollapsed={isCollapsed}
          />
          <NavItem
            href="/gettingstarted"
            icon={Rocket}
            label="Getting Started"
            isCollapsed={isCollapsed}
          />
          <NavItem
            href="/help"
            icon={HelpCircle}
            label="Help Center"
            isCollapsed={isCollapsed}
          />
          <button
            onClick={() => {
              // Add logout logic here
            }}
            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600"
          >
            <LogOut className="h-4 w-4" />
            {!isCollapsed && <span className="font-medium">Log out</span>}
          </button>
        </div>

        {/* User Profile */}
        {!isCollapsed && (
          <div className="p-4 border-t">
            <div className="flex items-center gap-3">
              <img
                src="/placeholder.svg?height=40&width=40"
                alt="Profile"
                className="h-10 w-10 rounded-full bg-gray-100"
              />
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-900">Parth</span>
                <span className="text-xs text-gray-500">Kalma</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
