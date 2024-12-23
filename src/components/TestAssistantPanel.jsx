import React, { useState } from "react";
import Image from "next/image";
import { Headphones, X, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const TestAssistantPanel = ({ agent, onClose }) => {
  const [recipientName, setRecipientName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errors, setErrors] = useState({});

  const validateFields = () => {
    const newErrors = {};

    if (!recipientName.trim() || recipientName.trim().length < 2) {
      newErrors.recipientName = "Name must be at least 2 characters";
    }

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!phoneNumber || phoneNumber.replace(/\D/g, "").length < 10) {
      newErrors.phoneNumber = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateFields()) {
      console.log("Starting test call to:", {
        name: recipientName,
        email,
        phone: phoneNumber,
      });
    }
  };

  const InputError = ({ error }) =>
    error ? (
      <div className="flex items-center gap-1 mt-1 text-red-500 text-xs">
        <AlertCircle className="h-3 w-3" />
        <span>{error}</span>
      </div>
    ) : null;

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center p-6 border-b">
        <h3 className="text-lg font-semibold text-gray-900">
          Test Your Assistant
        </h3>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
          <X className="h-5 w-5" />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-6">
        <div className="space-y-6">
          <motion.div
            className="flex flex-col items-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative mb-4">
              <Image
                src={agent.avatar}
                alt={agent.name}
                width={80}
                height={80}
                className="rounded-full ring-4 ring-blue-50"
              />
              <div className="absolute bottom-0 right-0 h-4 w-4 bg-green-400 border-2 border-white rounded-full"></div>
            </div>
            <h4 className="text-lg font-medium text-gray-900">{agent.name}</h4>
            <p className="text-sm text-gray-500 mt-1">Ready to make calls</p>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div>
              <input
                type="text"
                placeholder="Enter recipient name"
                // defaultValue={recipientName}
                value={recipientName}
                onChange={(e) => setRecipientName(e.target.value)}
                className={`w-full px-4 py-2.5 text-gray-900 border rounded-lg transition-shadow ${
                  errors.recipientName
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                } focus:ring-2 focus:border-transparent`}
              />
              <InputError error={errors.recipientName} />
            </div>

            <div>
              <input
                type="email"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-4 py-2.5 text-gray-900 border rounded-lg transition-shadow ${
                  errors.email
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                } focus:ring-2 focus:border-transparent`}
              />
              <InputError error={errors.email} />
            </div>

            <div>
              <PhoneInput
                country={"us"}
                value={phoneNumber}
                onChange={setPhoneNumber}
                inputClass={`w-full px-4 py-2.5 text-gray-900 border rounded-lg transition-shadow ${
                  errors.phoneNumber
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                } focus:ring-2 focus:border-transparent`}
              />
              <InputError error={errors.phoneNumber} />
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="p-6 border-t"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <button
          className="w-full flex items-center justify-center px-4 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleSubmit}
          disabled={!recipientName || !email || !phoneNumber}
        >
          <Headphones className="h-4 w-4 mr-2" />
          Start Test Call
        </button>
      </motion.div>
    </div>
  );
};

export default TestAssistantPanel;
