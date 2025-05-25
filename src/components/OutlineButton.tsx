import React from "react";

interface OutlineButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const OutlineButton: React.FC<OutlineButtonProps> = ({ children, className = "", ...props }) => (
  <button
    className={`border-2 border-yellow-400 text-yellow-400 px-4 py-2 uppercase font-semibold bg-transparent cursor-pointer   ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default OutlineButton;