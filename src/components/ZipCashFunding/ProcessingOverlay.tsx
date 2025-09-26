import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProcessingOverlay: React.FC = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Navigate to next step after processing completes
          setTimeout(() => {
            navigate("/");
          }, 1000);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="processing-overlay">
      <div className="processing-background"></div>
      <div className="processing-content">
        <div className="processing-spinner">
          <div className="spinner-circle"></div>
        </div>
        <h2 className="processing-title">Processing Transaction</h2>
        <p className="processing-text">Please wait while we process your funding request...</p>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="progress-text">{progress}%</p>
      </div>
    </div>
  );
};

export default ProcessingOverlay;
