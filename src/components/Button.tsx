import React from "react";

interface Props {
  href: string;
  child: string;
  className?: string;
}

const Button: React.FC<Props> = ({ href, child, className }) => {
  return (
    <button>
      <a
        href={href}
        className={`btn btn-light text-success rounded-pill py-3 px-5 mt-2 ${
          className || ""
        }`}
      >
        {child}
      </a>
    </button>
  );
};

export default Button;
