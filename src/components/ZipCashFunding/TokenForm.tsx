import React, { useState } from "react";
import ZipCashBack from "./ZipCashBack";

interface BioDataStepProps {
  onNext: () => void;
  onBack: () => void;
}

const TokenForm = ({onNext, onBack}: BioDataStepProps) => {
  const [formData, setFormData] = useState({
    name: "",
    token: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <div className="biodata-form-container">
      <main className="main-content">
        <h1 className="form-title">Token</h1>

        <div className="form-container">
          <form onSubmit={handleSubmit} className="biodata-form">
            <div className="form-grid">
              <div className="form-column">
                <label className="field-label">Name</label>
                <input
                  type="text"
                  className="field-input"
                  name="name"
                  placeholder="Enter your account number"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-column">
                <label className="field-label">Enter your token</label>
                <input
                  type="text"
                  className="field-input"
                  name="token"
                  placeholder="Enter here"
                  value={formData.token}
                  onChange={handleChange}
                  maxLength={6}
                  pattern="[0-9]{6}"
                  required
                />
              </div>

              <div className="form-column">
                <div className="form-field">
                  <p className="file-text">
                    A 6-digit token will be sent to your email and phone number. Please do not share your 6-digit token to anyone.
                  </p>
                </div>
              </div>
            </div>

            <div className="button-container" style={{ display: 'flex', justifyContent: 'space-between' }}>
              <ZipCashBack onClick={onBack}>
                Back
              </ZipCashBack>
              <button type="submit" className="continue-button">
                Continue
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default TokenForm;
