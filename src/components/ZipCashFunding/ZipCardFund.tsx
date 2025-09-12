import React from "react";
import ZipCashBack from "./ZipCashBack";

interface ZipCardFundProps {
  onNext: () => void;
  onBack: () => void;
}

const ZipCardFund: React.FC<ZipCardFundProps> = ({ onNext, onBack }) => {
  const handleRequest = () => {
    // Handle the card request logic here
    console.log("ZipCash card requested");
    onNext();
  };

  return (
    <div className="biodata-form-container">
      <main className="main-content">
        <h1 className="form-title" style={{ 
          textAlign: 'left', 
          marginBottom: '2rem',
          color: '#2d5a3d',
          fontSize: '2.5rem',
          fontWeight: 'bold'
        }}>
          Fund your ZipCash Account
        </h1>

        <div className="form-container" style={{ maxWidth: '1000px', margin: '0' }}>
          <div className="biodata-form">
            {/* Terms & Conditions Section */}
            <div 
              style={{
                background: "rgba(255,255,255,0.95)",
                borderRadius: '20px',
                border: "2px solid #e0e0e0",
                padding: '2rem',
                marginBottom: '2rem',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                maxHeight: '300px',
                overflowY: 'auto'
              }}
            >
              <h2 style={{ 
                color: "#2d5a3d", 
                fontSize: '1.5rem', 
                marginTop: 0, 
                marginBottom: '1.5rem',
                textAlign: 'left',
                fontWeight: 'bold'
              }}>
                Terms & Conditions
              </h2>

              <div style={{ fontSize: '0.95rem', lineHeight: '1.6', color: '#333' }}>
                {/* Eligibility Section */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{ 
                    color: "#2d5a3d", 
                    fontSize: '1.1rem', 
                    fontWeight: 'bold',
                    marginBottom: '0.5rem'
                  }}>
                    Eligibility
                  </h3>
                  <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
                    <li style={{ marginBottom: '0.5rem' }}>
                      Only verified account holders who have successfully completed BVN/NRBVN verification and
                      account funding are eligible to request a ZipCash Debit Card.
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      A valid government-issued ID (e.g., international passport) and the system-generated Unique
                      Token are required for collection.
                    </li>
                  </ul>
                </div>

                {/* Delivery & Pickup Section */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{ 
                    color: "#2d5a3d", 
                    fontSize: '1.1rem', 
                    fontWeight: 'bold',
                    marginBottom: '0.5rem'
                  }}>
                    Delivery & Pickup
                  </h3>
                  <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
                    <li style={{ marginBottom: '0.5rem' }}>
                      Debit cards will be delivered only to the mapped location chosen by the account holder (e.g.,
                      designated airport pickup desk, partner bank branch, or official Feel Nigeria collection point).
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      Card pickup can only be made in person by the account holder. No third-party collection is permitted.
                    </li>
                  </ul>
                </div>

                {/* Identification & Verification Section */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{ 
                    color: "#2d5a3d", 
                    fontSize: '1.1rem', 
                    fontWeight: 'bold',
                    marginBottom: '0.5rem'
                  }}>
                    Identification & Verification
                  </h3>
                  <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
                    <li style={{ marginBottom: '0.5rem' }}>The Unique Token issued during application.</li>
                    <li style={{ marginBottom: '0.5rem' }}>A valid government-issued ID matching the account details.</li>
                    <li style={{ marginBottom: '0.5rem' }}>Feel Nigeria staff will authenticate the identity before releasing the card.</li>
                  </ul>
                </div>

                {/* Timeframe Section */}
                <div>
                  <h3 style={{ 
                    color: "#2d5a3d", 
                    fontSize: '1.1rem', 
                    fontWeight: 'bold',
                    marginBottom: '0.5rem'
                  }}>
                    Timeframe
                  </h3>
                  <p style={{ margin: 0 }}>
                    Card pickup must occur within 30 days of issuance confirmation. After this period, the card may be deactivated.
                  </p>
                </div>
              </div>
            </div>

            {/* Button Section */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <ZipCashBack onClick={onBack}>
                Back
              </ZipCashBack>
              <button
                type="button"
                onClick={handleRequest}
                className="continue-button"
              >
                Fund
              </button>
            </div>

            {/* Footer Note */}
            {/* <div style={{ 
              color: "#666", 
              textAlign: 'center',
              fontSize: '0.9rem',
              fontStyle: 'italic',
              background: 'rgba(45, 90, 61, 0.05)',
              padding: '1rem',
              borderRadius: '10px',
              border: '1px solid rgba(45, 90, 61, 0.1)'
            }}>
              📍 You would be required to pick up your card upon your arrival
            </div> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ZipCardFund;
