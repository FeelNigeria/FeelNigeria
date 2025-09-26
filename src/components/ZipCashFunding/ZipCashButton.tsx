import React from 'react';

interface ZipCashButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit";
}

const ZipCashButton = ({ 
  children, 
  onClick, 
  variant = "primary", 
  disabled = false, 
  className = "",
  type = "button"
}: ZipCashButtonProps) => {
  
  // Base Bootstrap classes
  const baseClasses = 'btn fw-semibold rounded-3';
  
  // Variant-specific classes using Bootstrap success colors
  const variantClasses = variant === "primary" 
    ? 'btn-success shadow' // Bootstrap success button (green background, white text)
    : 'btn-outline-success'; // Bootstrap outline success (green border, green text)
  
  // Combine all classes
  const buttonClasses = `${baseClasses} ${variantClasses} ${className}`.trim();
  
  // Inline styles for custom sizing and transitions
  const buttonStyle = {
    padding: '0.75rem 2rem', // Bootstrap equivalent of px-8 py-6
    fontSize: '1.125rem', // Bootstrap equivalent of text-lg
    minWidth: '140px',
    transition: 'all 0.3s ease',
    // Enhanced hover effects for primary variant
    ...(variant === "primary" && {
      '--bs-btn-hover-bg': '#198754', // Darker green on hover
      '--bs-btn-hover-border-color': '#198754'
    })
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      style={buttonStyle}
    >
      {children}
    </button>
  );
};

export default ZipCashButton;