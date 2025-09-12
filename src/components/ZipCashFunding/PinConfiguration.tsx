import React, { useState } from "react";
import ZipCashBack from "./ZipCashBack";

interface PinConfigurationProps {
  onNext: () => void;
  onBack: () => void;
}

const PinConfiguration = ({ onNext, onBack }: PinConfigurationProps) => {
  const [formData, setFormData] = useState({
    pin: "",
    confirmPin: "",
  });

  const [errors, setErrors] = useState({
    pin: "",
    confirmPin: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Only allow numeric input and limit to 6 digits
    const numericValue = value.replace(/\D/g, '').slice(0, 6);
    
    setFormData((prev) => ({
      ...prev,
      [name]: numericValue,
    }));

    // Clear errors when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      pin: "",
      confirmPin: "",
    };

    if (!formData.pin) {
      newErrors.pin = "PIN is required";
    } else if (formData.pin.length !== 6) {
      newErrors.pin = "PIN must be exactly 6 digits";
    }

    if (!formData.confirmPin) {
      newErrors.confirmPin = "Please confirm your PIN";
    } else if (formData.confirmPin.length !== 6) {
      newErrors.confirmPin = "PIN must be exactly 6 digits";
    } else if (formData.pin !== formData.confirmPin) {
      newErrors.confirmPin = "PINs do not match";
    }

    setErrors(newErrors);
    return !newErrors.pin && !newErrors.confirmPin;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onNext();
    }
  };

  return (
    <div className="biodata-form-container">
      <main className="main-content">
        <h1 className="form-title">Configure your ZipCash pin</h1>
        
        <div className="form-container">
          <form onSubmit={handleSubmit} className="pin-configuration-form">
            <div className="pin-form-fields">
              <div className="pin-field">
                <label className="pin-field-label">Enter your 6 digit pin</label>
                <div className="pin-input-container">
                  <input
                    type="password"
                    className={`pin-input ${errors.pin ? 'error' : ''}`}
                    name="pin"
                    placeholder="******"
                    value={formData.pin}
                    onChange={handleChange}
                    maxLength={6}
                    pattern="[0-9]{6}"
                    inputMode="numeric"
                    autoComplete="new-password"
                  />
                </div>
                {errors.pin && <span className="error-message">{errors.pin}</span>}
              </div>

              <div className="pin-field">
                <label className="pin-field-label">Confirm your 6 digit pin</label>
                <div className="pin-input-container">
                  <input
                    type="password"
                    className={`pin-input ${errors.confirmPin ? 'error' : ''}`}
                    name="confirmPin"
                    placeholder="******"
                    value={formData.confirmPin}
                    onChange={handleChange}
                    maxLength={6}
                    pattern="[0-9]{6}"
                    inputMode="numeric"
                    autoComplete="new-password"
                  />
                </div>
                {errors.confirmPin && <span className="error-message">{errors.confirmPin}</span>}
              </div>
            </div>

          </form>
        </div>
      </main>

      {/* Fixed continue button positioned at bottom-right of the page */}
      <div className="component-continue-container" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <ZipCashBack onClick={onBack}>
          Back
        </ZipCashBack>
        <button
          type="button"
          className="component-continue-button"
          onClick={() => {
            // Validate and proceed
            if (validateForm()) {
              onNext();
            }
          }}
          aria-disabled={!formData.pin || !formData.confirmPin}
          disabled={!formData.pin || !formData.confirmPin}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default PinConfiguration;
