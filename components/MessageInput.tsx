
import React from 'react';

const SendIcon: React.FC = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
    </svg>
);


export const MessageInput: React.FC = () => {
  return (
    <footer className="bg-gray-800 p-4 border-t border-gray-700">
      <div className="relative max-w-7xl mx-auto">
        <input
          type="text"
          placeholder="You are observing this channel."
          disabled
          className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 pl-4 pr-12 text-gray-400 placeholder-gray-500 cursor-not-allowed"
        />
        <button
          disabled
          className="absolute inset-y-0 right-0 flex items-center justify-center px-4 text-gray-500 cursor-not-allowed"
        >
          <SendIcon />
        </button>
      </div>
    </footer>
  );
};
