
import React from 'react';

interface PromptInputProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  onGenerate: () => void;
  isLoading: boolean;
}

const PromptInput: React.FC<PromptInputProps> = ({ prompt, setPrompt, onGenerate, isLoading }) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      if (!isLoading) {
        onGenerate();
      }
    }
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-200/50 transition-shadow hover:shadow-xl focus-within:shadow-xl w-full">
      <div className="relative">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="e.g., A photorealistic image of a majestic marble statue of a lion in a sunlit ancient Greek temple..."
          className="w-full h-28 p-4 pr-12 text-base text-gray-700 bg-gray-50 rounded-lg border-2 border-gray-200 focus:ring-2 focus:ring-gray-400 focus:border-gray-400 focus:outline-none resize-none transition-colors duration-200"
          disabled={isLoading}
        />
        <button
          onClick={onGenerate}
          disabled={isLoading || !prompt.trim()}
          className="absolute bottom-3 right-3 flex items-center justify-center h-10 w-28 px-4 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 disabled:scale-100"
        >
          {isLoading ? (
             <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            'Generate'
          )}
        </button>
      </div>
    </div>
  );
};

export default PromptInput;
