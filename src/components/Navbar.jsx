"use client";

import React from "react";
import {
  Menu,
  MessageSquare,
  Calendar,
  Grid,
  PhoneCall,
  Bell,
} from "lucide-react";

export function Navbar({ isCollapsed }) {
  return (
    <header
      className={`flex items-center justify-between px-6 h-16 bg-white shadow-md transition-all duration-300 ${
        isCollapsed ? "pl-[80px]" : "pl-[240px]"
      }`}
    >
      {/* Left Section */}
      <div className="flex items-center gap-6">
        <p></p>
        {/* Navigation Links */}
        <nav className="flex items-center gap-6">
          <NavItem icon={Grid} label="Prompting Guidelines" />
          <NavItem icon={MessageSquare} label="Support" />
          <NavItem icon={Calendar} label="Calendar" />
          <NavItem icon={PhoneCall} label="Batch Calling" />
        </nav>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        {/* Notification Bell */}
        <button className="relative text-gray-600 hover:text-gray-800">
          <Bell size={24} />
          {/* Notification Dot */}
          <span className="absolute top-0 right-0 h-2 w-2 bg-blue-500 rounded-full"></span>
        </button>

        {/* Profile Avatar */}
        <img
          src="/profile.png"
          alt="Profile"
          className="h-8 w-8 rounded-full border border-gray-200"
        />
      </div>
    </header>
  );
}

function NavItem({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-2 text-gray-700 hover:text-blue-500 transition-colors cursor-pointer">
      <Icon size={20} />
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}
