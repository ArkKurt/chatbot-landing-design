
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from 'lucide-react';

type Message = {
  text: string;
  isUser: boolean;
  isTyping?: boolean;
};

const botResponses = [
  "Hello! How can I assist you today?",
  "I can help with various tasks like answering questions, providing information, or assisting with problem-solving.",
  "That's an interesting question! Let me think about it...",
  "Based on my knowledge, AI chatbots use natural language processing to understand and respond to human queries.",
  "I'm designed to learn from interactions and improve over time.",
  "I can handle multiple languages and topics efficiently."
];

const ChatbotDemo = () => {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hi there! I'm AIChat, your AI assistant. How can I help you today?", isUser: false }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;
    
    // Add user message
    const userMessage = { text: inputValue, isUser: true };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    
    // Simulate bot typing and response
    setTimeout(() => {
      setMessages(prev => [...prev, { text: '', isUser: false, isTyping: true }]);
      
      setTimeout(() => {
        setMessages(prev => {
          const newMessages = [...prev];
          const typingIndex = newMessages.findIndex(msg => msg.isTyping);
          if (typingIndex !== -1) {
            // Replace typing message with actual response
            const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
            newMessages[typingIndex] = { text: randomResponse, isUser: false };
          }
          return newMessages;
        });
        setIsLoading(false);
      }, 1500);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  useEffect(() => {
    const chatContainer = document.getElementById("chat-messages");
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col h-[500px]">
      <div className="bg-gradient-to-r from-chatbot-blue to-chatbot-purple p-4 text-white">
        <h3 className="font-medium">AIChat Demo</h3>
      </div>
      
      <div 
        id="chat-messages"
        className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50"
      >
        {messages.map((message, index) => (
          <div key={index} className={message.isUser ? "chat-bubble-user" : "chat-bubble-bot"}>
            {message.isTyping ? (
              <div className="flex space-x-1 items-center h-6">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
            ) : (
              message.text
            )}
          </div>
        ))}
      </div>
      
      <div className="p-4 border-t flex items-center">
        <Input
          placeholder="Type a message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
          className="flex-1 mr-2"
          disabled={isLoading}
        />
        <Button 
          onClick={handleSendMessage}
          disabled={isLoading || inputValue.trim() === ''}
          size="icon" 
          className="bg-chatbot-blue hover:bg-chatbot-blue/90"
        >
          <Send size={18} />
        </Button>
      </div>
    </div>
  );
};

export default ChatbotDemo;
