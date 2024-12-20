import React from "react";
import { Clock, PhoneIncoming, PhoneOutgoing } from "lucide-react"; // Import Lucide icons

const Dashcard = () => {
  const cards = [
    {
      title: "Duration",
      description: "Captured minutes of calls",
      value: "0.00",
      footer: "No previous data available",
      icon: <Clock className="w-6 h-6 text-gray-700" />, // Use Lucide Clock icon
    },
    {
      title: "Inbound",
      description: "Calls received by Agent",
      value: "0",
      footer: "No previous data available",
      icon: <PhoneIncoming className="w-6 h-6 text-gray-700" />, // Use Lucide Phone icon
    },
    {
      title: "Outbound",
      description: "Calls made by Agent",
      value: "0",
      footer: "No previous data available",
      icon: <PhoneOutgoing className="w-6 h-6 text-gray-700" />, // Use Lucide PhoneOutgoing icon
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-Ubuntu">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow p-6 flex flex-col justify-between hover:shadow-2xl shadow-blue-200 transition duration-300"
        >
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-lg font-bold text-gray-900">{card.title}</h2>
              <p className="text-sm text-gray-500">{card.description}</p>
            </div>
            <div className="bg-blue-100 p-2 rounded-lg">
              <span>{card.icon}</span>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-3xl font-bold text-gray-900">{card.value}</p>
            <p className="text-sm text-gray-500 mt-1">{card.footer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashcard;
