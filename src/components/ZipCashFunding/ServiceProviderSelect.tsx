import React, { useState } from "react";

interface ZipCashCardRequestProps {
  onNext: () => void;
}

const ServiceProviderSelect = ({ onNext }: ZipCashCardRequestProps) => {
  const [selectedProvider, setSelectedProvider] = useState<string>("");

  const handleProviderSelect = (provider: string) => {
    setSelectedProvider(provider);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedProvider) {
      onNext();
    }
  };

  return (
    <div className="biodata-form-container">
      <main className="main-content">
        <h1 className="form-title">Request your ZipCash card</h1>
        
        <div className="form-container">
          <div className="provider-selection-container">
            <h2 className="provider-selection-title">Select any of our service providers</h2>
            
            <form onSubmit={handleSubmit} className="provider-form">
              <div className="provider-grid">
                <div 
                  className={`provider-item ${selectedProvider === 'gig' ? 'selected' : ''}`}
                  onClick={() => handleProviderSelect('gig')}
                >
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/f7c4aed26dfe5a330adc21d5313d4cc28d695cc1?width=312" 
                    alt="GIG Logistics" 
                    className="provider-logo"
                  />
                </div>
                
                <div 
                  className={`provider-item ${selectedProvider === 'dhl' ? 'selected' : ''}`}
                  onClick={() => handleProviderSelect('dhl')}
                >
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/282fb3a72b64155ade94f1e0647bee9ca8267f96?width=350" 
                    alt="DHL" 
                    className="provider-logo"
                  />
                </div>
                
                <div 
                  className={`provider-item ${selectedProvider === 'fedex' ? 'selected' : ''}`}
                  onClick={() => handleProviderSelect('fedex')}
                >
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/2185bf16e0ce2f89ff43e4fd3854aa27eaca58f1?width=328" 
                    alt="FedEx" 
                    className="provider-logo"
                  />
                </div>
              </div>
              
              <div className="button-container">
                <button 
                  type="submit" 
                  className="continue-button"
                  disabled={!selectedProvider}
                >
                  Request
                </button>
              </div>
            </form>
            
            <p className="pickup-info">
              You would be required to pick up your card upon your arrival or get it delivered through any of our service providers
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServiceProviderSelect;
