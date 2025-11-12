
import React from 'react';
import type { Message } from '../types';
import { Sentiment } from '../types';

interface ChatMessageProps {
  message: Message;
  index: number;
}

const getFlagEmoji = (countryCode: string): string => {
  if (!countryCode) return '';
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
};

const SentimentIndicator: React.FC<{ sentiment: Sentiment }> = ({ sentiment }) => {
  const sentimentClasses = {
    [Sentiment.POSITIVE]: 'bg-green-500',
    [Sentiment.NEGATIVE]: 'bg-red-500',
    [Sentiment.NEUTRAL]: 'bg-gray-500',
  };

  return (
    <span className={`w-2 h-2 rounded-full ${sentimentClasses[sentiment]}`} title={`Sentiment: ${sentiment.toLowerCase()}`}></span>
  );
};

export const ChatMessage: React.FC<ChatMessageProps> = ({ message, index }) => {
  const { author, country, countryCode, avatar, timestamp, sentiment, message: text } = message;

  return (
    <div className="flex items-start space-x-4 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
      <img src={avatar} alt={author} className="w-10 h-10 rounded-full border-2 border-gray-600" />
      <div className="flex-1">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-blue-300">{author}</span>
          <span className="text-sm text-gray-400">{getFlagEmoji(countryCode)} {country}</span>
          <SentimentIndicator sentiment={sentiment} />
          <span className="text-xs text-gray-500">{timestamp}</span>
        </div>
        <p className="text-gray-300 mt-1 whitespace-pre-wrap">{text}</p>
      </div>
    </div>
  );
};

// Add fade-in animation to tailwind config or a style tag if needed.
// For simplicity, let's add it in index.html, but a real app would use a config.
const style = document.createElement('style');
style.innerHTML = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in {
    animation: fadeIn 0.5s ease-out forwards;
    opacity: 0;
  }
`;
document.head.appendChild(style);
