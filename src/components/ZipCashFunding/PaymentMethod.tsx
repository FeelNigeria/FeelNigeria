import { useState } from "react";
import ZipCashButton from "./ZipCashButton";
import { CreditCard, Building2, Smartphone, Banknote } from "lucide-react";

interface PaymentMethodStepProps {
  onNext: () => void;
}

const PaymentMethod = ({ onNext }: PaymentMethodStepProps) => {
  const [selectedMethod, setSelectedMethod] = useState<string>("");

  const paymentMethods = [
    { id: "card", icon: CreditCard, label: "Card" },
    { id: "bank", icon: Building2, label: "Bank Transfer" },
    { id: "ussd", icon: Banknote, label: "USSD" },
    { id: "mobile", icon: Smartphone, label: "Mobile Money" },
  ];

  const handleContinue = () => {
    if (selectedMethod) {
      onNext();
    }
  };

  // Custom styles for ZipCash branding (add to your CSS file)
  const customStyles = {
    zipCashCard: {
      backgroundColor: "#fff",
      borderRadius: "0.75rem",
      boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
      maxWidth: "28rem",
    },
    zipCashPrimary: "#your-primary-color", // Replace with actual color
    zipCashDark: "#your-dark-color", // Replace with actual color
    zipCashBackground: "#your-background-color", // Replace with actual color
    selectedCard: {
      borderColor: "#your-primary-color",
      backgroundColor: "#your-background-color",
    },
  };

  return (
    <div className="container-fluid py-4">
      <div className="row justify-content-center">
        <div className="col-12" style={{ maxWidth: "28rem" }}>
          <div
            className="card shadow-lg border-0"
            style={customStyles.zipCashCard}
          >
            <div className="card-body p-4 p-md-5">
              {/* Header */}
              <div className="text-center mb-4">
                <h2
                  className="h4 fw-bold mb-2"
                  style={{ color: customStyles.zipCashDark }}
                >
                  Pay with
                </h2>
                <div className="small fw-medium" style={{ color: "#4A90E2" }}>
                  <span style={{ color: "#4A90E2" }}>paystack</span>{" "}
                  <span style={{ color: "#2d7a3e", fontWeight: "bold" }}>
                    TITAN
                  </span>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="d-grid gap-3 mb-4">
                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    className={`card border cursor-pointer ${
                      selectedMethod === method.id
                        ? "border-primary"
                        : "border-secondary-subtle"
                    }`}
                    style={{
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      ...(selectedMethod === method.id
                        ? customStyles.selectedCard
                        : {}),
                    }}
                    onClick={() => setSelectedMethod(method.id)}
                    onMouseEnter={(e) => {
                      if (selectedMethod !== method.id) {
                        e.currentTarget.style.boxShadow =
                          "0 4px 6px -1px rgb(0 0 0 / 0.1)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (selectedMethod !== method.id) {
                        e.currentTarget.style.boxShadow = "none";
                      }
                    }}
                  >
                    <div className="card-body p-3">
                      <div className="d-flex align-items-center">
                        <method.icon
                          className="me-3"
                          size={20}
                          style={{ color: customStyles.zipCashDark }}
                        />
                        <span
                          className="fw-medium"
                          style={{ color: customStyles.zipCashDark }}
                        >
                          {method.label}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Continue Button */}
              <div className="d-grid">
                <ZipCashButton
                  onClick={handleContinue}
                  disabled={!selectedMethod}
                  className="btn w-100"
                >
                  Continue
                </ZipCashButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
