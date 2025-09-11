import { useNavigate } from "react-router-dom";

interface ZipCashCompletionProps {
  onNext: () => void;
}

const ZipCashCompletion = ({ onNext }: ZipCashCompletionProps) => {
  const navigate = useNavigate();

  const handleFinish = () => {
    // Handle completion logic here
    console.log("ZipCash onboarding completed successfully!");
    onNext();
    navigate("/");
  };

  return (
    <div className="biodata-form-container">
      <main className="main-content">
        <div className="completion-content">
          <div className="completion-message">
            <h1 className="completion-title">
              Congratulation's!
              <br />
              Your ZipCash card is successfully activated
            </h1>
          </div>

          {/* Decorative checkmark circle */}
          <div className="completion-decoration">
            <div className="completion-circle">
              <svg
                className="completion-checkmark"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25 50L42 67L75 33"
                  stroke="#1C6348"
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </main>

      {/* Component-local finish button positioned at bottom-right */}
      <div className="component-continue-container">
        <button
          type="button"
          className="component-continue-button completion-finish-button"
          onClick={handleFinish}
        >
          Finish
        </button>
      </div>
    </div>
  );
};

export default ZipCashCompletion;
