"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Headphones,
  BarChart3,
  Settings,
  MessageSquare,
  Zap,
  PenToolIcon as Tool,
  HelpCircle,
  Phone,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import TestAssistantPanel from "@/components/TestAssistantPanel";

function DashboardTab() {
  return (
    <div>
      <h2 className="text-lg font-semibold">Dashboard</h2>
      <p>This is the dashboard content.</p>
    </div>
  );
}

function ControlPanelTab() {
  return (
    <div>
      <h2 className="text-lg font-semibold">Control Panel</h2>
      <p>This is the control panel content.</p>
    </div>
  );
}

function PromptTab() {
  return (
    <div>
      <h2 className="text-lg font-semibold">Prompt</h2>
      <p>This is the prompt content.</p>
    </div>
  );
}

function ToolsTab() {
  return (
    <div>
      <h2 className="text-lg font-semibold">Tools</h2>
      <p>This is the tools content.</p>
    </div>
  );
}

function DeploymentTab() {
  return (
    <div>
      <h2 className="text-lg font-semibold">Deployment</h2>
      <p>This is the deployment content.</p>
    </div>
  );
}

export default function Page({ params  }) {
  // const { id } = params;  
  const resolvedParams = React.use(params);
  const { id } = resolvedParams;

  const [activeTab, setActiveTab] = useState("dashboard");
  const [isTestPanelOpen, setIsTestPanelOpen] = useState(false);

  const agent = {
    id: id,
    name: "Outbound Bot",
    type: "Outbound",
    phoneNumber: "+61489071671",
    avatar: "/placeholder.svg",
    assistantId: "CE_550313544",
    availableMinutes: 98,
    status: "Active",
    lastActive: "2 hours ago",
  };

  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: BarChart3 },
    { id: "control", label: "Control Panel", icon: Settings },
    { id: "prompt", label: "Prompt", icon: MessageSquare },
    { id: "tools", label: "Tools", icon: Tool },
    { id: "deployment", label: "Deployment", icon: Calendar },
  ];

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-8">
              <Link
                href="/agentconfig"
                className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                <span className="text-sm font-medium">Back to Agents</span>
              </Link>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Image
                    src={agent.avatar}
                    alt={agent.name}
                    width={48}
                    height={48}
                    className="rounded-full ring-2 ring-blue-100"
                  />
                  <div className="absolute bottom-0 right-0 h-3.5 w-3.5 bg-green-400 border-2 border-white rounded-full"></div>
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h1 className="text-xl font-semibold text-gray-900">
                      {agent.name}
                    </h1>
                    <span className="px-2 py-1 text-xs font-medium bg-blue-50 text-blue-600 rounded-full">
                      {agent.status}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 mt-1">
                    <p className="text-sm text-gray-500">
                      ID: {agent.assistantId}
                    </p>
                    <span className="text-gray-300">•</span>
                    <p className="text-sm text-gray-500">
                      Last active {agent.lastActive}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 px-4 py-2 bg-blue-50 rounded-lg">
                <Zap className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium text-blue-600">
                  {agent.availableMinutes} Minutes Available
                </span>
              </div>
              <button
                onClick={() => setIsTestPanelOpen(!isTestPanelOpen)}
                className="flex items-center px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
              >
                <Phone className="h-4 w-4 mr-2" />
                Test Your Agent
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <HelpCircle className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-4 py-4 text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? "border-b-2 border-blue-500 text-blue-600 bg-blue-50"
                      : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-8 px-6">
        <div className="flex space-x-8">
          <div className="flex-1">
            <div className="bg-white shadow-sm rounded-xl border border-gray-100">
              <div className="p-6 space-y-8">
                {activeTab === "dashboard" && <DashboardTab />}
                {activeTab === "control" && <ControlPanelTab />}
                {activeTab === "prompt" && <PromptTab />}
                {activeTab === "tools" && <ToolsTab />}
                {activeTab === "deployment" && <DeploymentTab />}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Animated Test Assistant Panel */}
      <AnimatePresence>
        {isTestPanelOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-96 bg-white shadow-lg z-50"
          >
            <TestAssistantPanel
              agent={agent}
              onClose={() => setIsTestPanelOpen(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
