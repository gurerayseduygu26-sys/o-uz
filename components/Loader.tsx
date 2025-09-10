
import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center z-10">
      <div className="w-16 h-16 border-4 border-gray-300 border-t-gray-800 rounded-full animate-spin"></div>
      <p className="mt-4 text-gray-700 text-lg font-medium">Generating your masterpiece...</p>
    </div>
  );
};

export default Loader;
