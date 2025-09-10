
import React from 'react';

const MarbleIcon: React.FC = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="w-10 h-10 mr-3 text-gray-700"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
    >
      <circle cx="50" cy="50" r="45" />
      <path
        d="M25 30 Q 40 50, 50 20 T 75 70"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 75 Q 50 60, 70 80 T 90 50"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
       <path
        d="M70 20 Q 60 40, 40 45 T 20 60"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

const Header: React.FC = () => {
  return (
    <header className="py-6 px-4 md:px-8 border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-center">
        <MarbleIcon />
        <h1 className="text-4xl font-bold tracking-tight text-gray-800">
          Marble<span className="font-light text-gray-600">Media</span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
