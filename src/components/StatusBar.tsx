// StatusBar.tsx
import React from "react";
import type { Status } from "../models/Status";


interface StatusBarProps extends Status {
}

const StatusBar: React.FC<StatusBarProps> = ({ message, type = "info" }) => {
  const getColor = () => {
    switch (type) {
      case "error": return "#ff4d4f";
      default: return "#3498fdff";
    }
  };

  return (
    <div className="status" style={{backgroundColor: getColor()}}>
      {message}
    </div>
  );
};

export default StatusBar;
