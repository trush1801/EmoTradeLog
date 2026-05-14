import { useState } from 'react';
import { MessageSquare, Send, Sparkles } from 'lucide-react';

const ChatWithData = () => {
  const [input, setInput] = useState('');

  return (
    <div className="flex flex-col h-[calc(100vh-12rem)] space-y-4">
      <div className="flex items-center gap-3 mb-2">
        <MessageSquare className="text-yellow-500" size={32} />
        <h2 className="text-2xl font-bold text-white">Chat With Data</h2>
      </div>

      <div className="flex-1 glass-card p-6 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto space-y-4 pr-2">
          {/* Messages would go here */}
          <div className="flex justify-start">
            <div className="bg-white/10 rounded-2xl rounded-tl-none p-4 max-w-[80%] border border-white/5">
              <p className="text-gray-200">Hi! I'm your AI trading assistant. Ask me anything about your trading data.</p>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-white/10">
          <div className="flex gap-2 mb-4 overflow-x-auto pb-2 scrollbar-hide">
            {['What is my best performing pair?', 'Why did I lose on Friday?', 'Summarize my week'].map((prompt) => (
              <button key={prompt} className="whitespace-nowrap px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-xs text-gray-300 transition-colors flex items-center gap-1">
                <Sparkles size={12} className="text-yellow-500" />
                {prompt}
              </button>
            ))}
          </div>
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              className="w-full bg-black/40 border border-white/20 rounded-xl py-4 pl-4 pr-12 text-white focus:outline-none focus:border-yellow-500/50"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition-colors">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWithData;
