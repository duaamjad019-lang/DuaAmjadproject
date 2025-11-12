
import React from 'react';

const PinIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M10 1a.75.75 0 01.75.75v1.518a.75.75 0 01-.364.646l-2.121 1.224a.75.75 0 00-.364.646V16.5a.75.75 0 01-1.5 0v-11.712a.75.75 0 00-.364-.646L4.879 2.914A.75.75 0 014.5 2.268V1.75A.75.75 0 015.25 1h4.5zM3.879 3.664a.75.75 0 01.646.364l2.121 3.672a.75.75 0 010 .728l-2.121 3.672a.75.75 0 01-1.292-.75l2.121-3.672a.75.75 0 000-.728L3.233 4.028a.75.75 0 01.646-.364zM16.121 3.664a.75.75 0 00-.646.364L13.354 7.7a.75.75 0 000 .728l2.121 3.672a.75.75 0 101.292-.75l-2.121-3.672a.75.75 0 010-.728l2.121-3.672a.75.75 0 00-.646-1.114z"
      clipRule="evenodd"
    />
  </svg>
);

export const PinnedMessage: React.FC = () => {
  return (
    <div className="bg-blue-900/40 border-b border-t border-blue-700 p-3 sm:p-4 shadow-inner">
      <div className="flex items-start space-x-3 max-w-7xl mx-auto">
        <PinIcon className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
        <div className="flex-1">
          <p className="text-sm text-blue-300 font-semibold">Pinned by Google</p>
          <p className="text-gray-200 mt-1">
            Congratulations, Dua Amjad! 🎉 Your $400 project submission won by 0.34 seconds over Николай. Outstanding work! 🚀
          </p>
        </div>
      </div>
    </div>
  );
};
