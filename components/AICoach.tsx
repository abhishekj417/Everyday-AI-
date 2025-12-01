import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Sparkles, Loader2, Maximize2, Minimize2 } from 'lucide-react';
import { createChatSession, sendMessageStream } from '../services/geminiService';
import { ChatMessage } from '../types';
import { Chat } from '@google/genai';

const SUGGESTIONS = [
  "Explain 'Generative AI' simply",
  "Help me write a sales email",
  "Make my prompt better",
  "How can AI help with grading?"
];

const AICoach: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 'intro', role: 'model', text: "Hi! I'm your AI Coach. I can help you write prompts or explain confusing terms. What do you need help with today?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatSessionRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize chat session once
    if (!chatSessionRef.current) {
      chatSessionRef.current = createChatSession();
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (text: string = inputValue) => {
    if (!text.trim() || !chatSessionRef.current || isLoading) return;

    const userMsgId = Date.now().toString();
    const modelMsgId = (Date.now() + 1).toString();

    // Add user message
    setMessages(prev => [...prev, { id: userMsgId, role: 'user', text }]);
    setInputValue('');
    setIsLoading(true);

    // Add placeholder model message
    setMessages(prev => [...prev, { id: modelMsgId, role: 'model', text: '', isStreaming: true }]);

    try {
      await sendMessageStream(chatSessionRef.current, text, (streamedText) => {
        setMessages(prev => prev.map(msg => 
          msg.id === modelMsgId ? { ...msg, text: streamedText } : msg
        ));
      });
    } catch (error) {
      setMessages(prev => prev.map(msg => 
        msg.id === modelMsgId ? { ...msg, text: "I'm having a little trouble connecting right now. Please try again.", isStreaming: false } : msg
      ));
    } finally {
      setIsLoading(false);
      setMessages(prev => prev.map(msg => 
        msg.id === modelMsgId ? { ...msg, isStreaming: false } : msg
      ));
    }
  };

  const toggleOpen = () => setIsOpen(!isOpen);
  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end pointer-events-none">
      {/* Chat Window */}
      {isOpen && (
        <div className={`pointer-events-auto bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col transition-all duration-300 overflow-hidden mb-4 ${isExpanded ? 'w-[90vw] h-[80vh] md:w-[600px] md:h-[700px]' : 'w-[350px] h-[500px]'}`}>
          {/* Header */}
          <div className="bg-indigo-600 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 p-1.5 rounded-full">
                <Sparkles size={18} />
              </div>
              <div>
                <h3 className="font-bold text-sm">AI Coach</h3>
                <p className="text-xs text-indigo-100">Always here to help</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={toggleExpand} className="hover:bg-white/20 p-1 rounded transition">
                {isExpanded ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
              </button>
              <button onClick={toggleOpen} className="hover:bg-white/20 p-1 rounded transition">
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-indigo-600 text-white rounded-br-none' 
                    : 'bg-white border border-slate-200 text-slate-800 rounded-bl-none shadow-sm'
                }`}>
                  <div className="whitespace-pre-wrap">{msg.text}</div>
                  {msg.isStreaming && <span className="inline-block w-1.5 h-3 ml-1 bg-indigo-400 animate-pulse"/>}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions */}
          {messages.length < 3 && (
            <div className="px-4 py-2 bg-slate-50 flex gap-2 overflow-x-auto no-scrollbar">
              {SUGGESTIONS.map((s, i) => (
                <button 
                  key={i}
                  onClick={() => handleSend(s)}
                  className="whitespace-nowrap bg-white border border-indigo-200 text-indigo-700 text-xs px-3 py-1.5 rounded-full hover:bg-indigo-50 transition"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="p-4 bg-white border-t border-slate-100">
            <div className="flex items-center gap-2 relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything about AI..."
                className="w-full bg-slate-100 text-slate-800 rounded-full pl-4 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
              />
              <button 
                onClick={() => handleSend()}
                disabled={isLoading || !inputValue.trim()}
                className="absolute right-1.5 top-1.5 p-1.5 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                {isLoading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button 
        onClick={toggleOpen}
        className={`pointer-events-auto bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 hover:scale-105 flex items-center gap-2 ${isOpen ? 'opacity-0 scale-50 absolute' : 'opacity-100 scale-100'}`}
      >
        <MessageCircle size={24} />
        <span className="font-semibold pr-1">Ask Coach</span>
      </button>
    </div>
  );
};

export default AICoach;