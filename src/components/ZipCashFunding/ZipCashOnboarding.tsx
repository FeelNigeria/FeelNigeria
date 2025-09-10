import { useState } from "react";
import ProgressBar from "./ProgressBar";
import BioDataStep from "./BioDataForm";
import TokenStep from "./TokenForm";
import FundAccountStep from "./FundForm";
import ZipCashCardRequest from "./ZipCashCardRequest";
import nigeriaMapBg from "@/assets/img/nigeria-map-bg.png";
import ZipCardFund from "./ZipCardFund";

interface StepComponentProps {
  onNext: () => void;
}

const ZipCashOnboarding = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const steps: Array<React.ComponentType<StepComponentProps>> = [
    BioDataStep,
    TokenStep,
    FundAccountStep,
    ZipCashCardRequest,
    ZipCardFund
  ];
  const totalSteps = steps.length;
  
  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const finish = () => {
    // Handle completion - could be enhanced with proper state management
    console.log("Onboarding completed!");
  };


  const renderStep = () => {
    const StepComponent = steps[currentStep];
    if (StepComponent) {
      return <StepComponent onNext={nextStep} />;
    }
    // Error handling: return a fallback for invalid steps
    return (
      <div className="text-center text-red-500">
        <p>Invalid step. Please restart the onboarding process.</p>
        <button onClick={() => setCurrentStep(0)} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Restart
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen overflow-hidden pt-5">
      {/* Background Map - Moved to CSS for better maintainability */}
      <div
        className="zipcash-background-map"
        style={{ backgroundImage: `url(${nigeriaMapBg})` }}
      />

      <div className="relative z-10 min-h-screen flex flex-col">
        <div className=" mx-auto px-4  flex-1">
          <ProgressBar currentStep={currentStep} />

          <div className="max-w-5xl">
            <div className="transition-all duration-500 ease-in-out">
              {renderStep()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZipCashOnboarding;
