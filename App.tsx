
import React, { useRef, useEffect } from 'react';
import { Header } from './components/Header';
import { PinnedMessage } from './components/PinnedMessage';
import { ChatMessage } from './components/ChatMessage';
import { MessageInput } from './components/MessageInput';
import { MOCK_MESSAGES } from './constants';
import type { Message } from './types';

const App: React.FC = () => {
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-gray-900 text-gray-200 h-screen flex flex-col font-sans">
      <Header />
      <PinnedMessage />
      <main className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
        {MOCK_MESSAGES.map((msg: Message, index: number) => (
          <ChatMessage key={msg.id} message={msg} index={index} />
        ))}
        <div ref={chatEndRef} />
      </main>
      <MessageInput />
    </div>
  );
};

export default App;
