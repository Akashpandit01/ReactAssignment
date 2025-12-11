import React from "react";
import { MessageSquare, X } from "lucide-react";
import { twMerge } from "tailwind-merge";
import "./chatbutton.css";

const Chatbutton = ({ isOpen, OnClick }) => {
  return (
    <button
      onClick={OnClick}
      className={twMerge(
        "fixed bottom-4 left-4 w-12 h-12 rounded-full shadow-lg",
        "flex items-center justify-center transition-all duration-300",
        "hover:scale-110 active:scale-95",
        isOpen ? "bg-gray-700" : "bg-gray-900"
      )}
    >
      {isOpen ? (
        <X className="w-5 h-5 text-white" />
      ) : (
        <MessageSquare className="w-5 h-5 text-white" />
      )}
    </button>
  );
};

export default Chatbutton;
