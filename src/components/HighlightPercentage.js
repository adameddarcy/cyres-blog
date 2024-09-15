import React, { useEffect, useState } from "react";
import "./HighlightNumber.css";

const HighlightPercentage = ({ header, number }) => {
  const [visible, setVisible] = useState(false);

  // Calculate color based on the number (0 to 100)
  const getGradientColor = (number) => {
    const red = Math.min(255, Math.max(0, 255 - (number * 255) / 100));
    const green = Math.min(255, Math.max(0, (number * 255) / 100));
    return `rgb(${red},${green},0)`;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 500); // Trigger visibility after a short delay (optional)

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="highlight-container">
      <h2 className="highlight-header">{header}</h2>
      <div
        className={`highlight-number ${visible ? "circle-animate" : ""}`}
        style={{
          color: getGradientColor(number),
        }} // Dynamic text color
      >
        {number}%
        <div
          className="circle"
          style={{
            borderColor: getGradientColor(number),
          }} // Dynamic circle border color
        />
      </div>
    </div>
  );
};

export default HighlightPercentage;
