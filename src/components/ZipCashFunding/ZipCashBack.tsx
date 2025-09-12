import React from 'react';

interface ZipCashBackProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit";
}

const ZipCashBack = ({
  children,
  onClick,
  disabled = false,
  className = "",
  type = "button"
}: ZipCashBackProps) => {

  // Bootstrap classes for outline button with custom styling
  const baseClasses = 'btn btn-outline-success fw-semibold rounded-pill px-4 py-3 d-flex align-items-center gap-2';
  
  // Custom styles for the back button
  const customStyles = {
    fontSize: '18px',
    fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif',
    borderWidth: '2px',
    transition: 'all 0.18s ease',
    '--bs-btn-hover-bg': '#135734',
    '--bs-btn-hover-border-color': '#135734',
    '--bs-btn-hover-color': '#fff',
    '--bs-btn-active-bg': '#047857',
    '--bs-btn-active-border-color': '#047857',
    '--bs-btn-disabled-bg': 'transparent',
    '--bs-btn-disabled-border-color': '#d1d5db',
    '--bs-btn-disabled-color': '#9ca3af',
  } as React.CSSProperties;

  const buttonClasses = `${baseClasses} ${className}`.trim();

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      e.currentTarget.style.transform = 'translateY(-3px)';
      e.currentTarget.style.boxShadow = '0 8px 20px rgba(5,150,105,0.15)';
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'none';
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      style={customStyles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Back arrow icon */}
      <svg 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M19 12H5M12 19l-7-7 7-7"/>
      </svg>
      {children}
    </button>
  );
};

export default ZipCashBack;