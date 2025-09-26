import React from "react";

interface ProgressBarProps {
  currentStep: number;
}

const ProgressBar = ({ currentStep }: ProgressBarProps) => {
  return (
    <div className="progress-tracker">
      {[...Array(8)].map((_, index) => (
        <React.Fragment key={index}>
          <div
            className={`progress-circle ${
              index < currentStep + 1 ? "active" : ""
            }`}
          >
            <div className="circle-inner" />
          </div>
          {index < 7 && (
            <div
              className={`progress-line ${
                index < currentStep + 1 ? "active" : ""
              }`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProgressBar;
