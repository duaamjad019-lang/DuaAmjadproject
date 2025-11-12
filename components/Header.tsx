
import React from 'react';

const GoogleIcon: React.FC = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25C22.56 11.45 22.49 10.68 22.36 9.92H12V14.4H18.2C17.96 15.96 17.21 17.3 16.07 18.15V20.65H19.72C21.66 18.88 22.56 15.93 22.56 12.25Z" fill="#4285F4"></path>
        <path d="M12 23C15.24 23 17.95 21.92 19.72 20.65L16.07 18.15C15 18.88 13.62 19.25 12 19.25C8.87 19.25 6.22 17.14 5.27 14.33H1.5V16.9C3.26 20.44 7.29 23 12 23Z" fill="#34A853"></path>
        <path d="M5.27 14.33C5.04 13.63 4.9 12.86 4.9 12C4.9 11.14 5.04 10.37 5.27 9.67V7.1H1.5C0.55 8.94 0 10.4 0 12C0 13.6 0.55 15.06 1.5 16.9L5.27 14.33Z" fill="#FBBC05"></path>
        <path d="M12 4.75C13.77 4.75 15.35 5.36 16.6 6.55L20.25 2.9C17.95 1.1 15.24 0 12 0C7.29 0 3.26 2.56 1.5 6.1L5.27 8.67C6.22 5.86 8.87 4.75 12 4.75Z" fill="#EA4335"></path>
    </svg>
);


export const Header: React.FC = () => {
  return (
    <header className="bg-gray-800/80 backdrop-blur-sm border-b border-gray-700 p-4 shadow-md sticky top-0 z-10">
      <div className="flex items-center space-x-4 max-w-7xl mx-auto">
        <GoogleIcon />
        <div>
            <h1 className="text-lg font-semibold text-gray-100">Developer Projects</h1>
            <p className="text-sm text-blue-400">#dua-amjad-python-project</p>
        </div>
      </div>
    </header>
  );
};
