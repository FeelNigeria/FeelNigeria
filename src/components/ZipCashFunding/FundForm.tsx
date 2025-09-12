import React, { useState } from "react";
import PaymentMethod from "./PaymentMethod";
import ZipCashBack from "./ZipCashBack";

interface BioDataStepProps {
  onNext: () => void;
  onBack: () => void;
}

const FundForm= ({onNext, onBack}:BioDataStepProps) => {
  const [formData, setFormData] = useState({
    amount: "",
    pin: "",
  });
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPaymentModal(true);
  };

  const handlePaymentMethodNext = () => {
    // Close modal and proceed to next step
    setShowPaymentModal(false);
    onNext();
  }

  const handleCloseModal = () => {
    setShowPaymentModal(false);
  };

  return (
    <>
    <div className="biodata-form-container">
      <main className="main-content">
        <h1 className="form-title">Fund your ZipCash account</h1>

        <div className="form-container">
          <form onSubmit={handleSubmit} className="biodata-form">
            <div className="form-grid">
              <div className="form-column">
                <div className="form-field">
                  <label className="field-label">Enter the amount</label>
                  <input
                    type="text"
                    className="field-input"
                    name="amount"
                    placeholder="₦10,000.00 - ₦10,000,000.00"
                    value={formData.amount}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-field">
                  <label className="field-label">Enter your pin</label>
                  <input
                    type="password"
                    className="field-input"
                    name="pin"
                    placeholder="******"
                    value={formData.pin}
                    onChange={handleChange}
                    maxLength={6}
                    pattern="[0-9]{6}"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="button-container" style={{ display: 'flex', justifyContent: 'space-between' }}>
              <ZipCashBack onClick={onBack}>
                Back
              </ZipCashBack>
              <button type="submit" className="continue-button">
                Fund
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
    {/* Payment Method Modal */}
      
      {showPaymentModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <button 
                className="modal-close-btn" 
                onClick={handleCloseModal}
                aria-label="Close modal"
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <PaymentMethod onNext={handlePaymentMethodNext} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FundForm;
