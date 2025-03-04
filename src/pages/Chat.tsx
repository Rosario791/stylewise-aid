
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Bot, User, RefreshCw } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initial welcome message
  useEffect(() => {
    setMessages([
      {
        id: '1',
        text: "Hello! I'm your grooming assistant. Ask me anything about skincare, haircare, or grooming tips!",
        sender: 'ai',
        timestamp: new Date(),
      },
    ]);
  }, []);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    // Add user message
    const newUserMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, newUserMessage]);
    setInput('');
    setIsLoading(true);
    
    // Simulate AI response delay
    setTimeout(() => {
      const aiResponses: Record<string, string> = {
        hair: "For healthy hair, make sure to use sulfate-free shampoo and conditioner. Based on your profile, I recommend L'Oréal's Serie Expert line which is perfect for your hair type. Also, try to limit heat styling to prevent damage.",
        skin: "Skincare is all about consistency! For your skin type, use a gentle cleanser, toner, and moisturizer daily. L'Oréal Men Expert Hydra Energetic is great for daily hydration with a non-greasy finish.",
        beard: "For a well-maintained beard, invest in a quality trimmer, wash regularly with beard shampoo, and use L'Oréal Men Expert Barberclub Beard Oil to keep it soft and conditioned.",
        dandruff: "To combat dandruff, try L'Oréal's anti-dandruff shampoo with selenium sulfide or pyrithione zinc. Remember to let it sit for 3-5 minutes before rinsing.",
        sunscreen: "Absolutely essential! Even on cloudy days, UV rays can damage your skin. L'Oréal Men Expert UV Defender SPF 50 is lightweight and non-greasy, perfect for daily use.",
        routine: "A basic grooming routine should include: cleansing, moisturizing, SPF during the day, regular haircuts every 4-6 weeks, and proper shaving techniques to avoid irritation."
      };
      
      // Determine response based on keywords
      let aiResponseText = "I'm not sure about that. Could you ask about skincare, haircare, or grooming routines?";
      const lowercaseInput = newUserMessage.text.toLowerCase();
      
      for (const [keyword, response] of Object.entries(aiResponses)) {
        if (lowercaseInput.includes(keyword)) {
          aiResponseText = response;
          break;
        }
      }
      
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponseText,
        sender: 'ai',
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="pt-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-6"
      >
        <h1 className="text-2xl font-bold mb-2 text-smartgray-800">AI Grooming Assistant</h1>
        <p className="text-smartgray-500">
          Ask me anything about skincare, haircare, or grooming techniques
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="card-base p-6 h-[500px] flex flex-col"
        >
          <div className="flex-1 overflow-y-auto mb-4 pr-2">
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-4 flex ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div className="flex items-start max-w-[80%]">
                  {message.sender === 'ai' && (
                    <div className="bg-smartblue-100 p-2 rounded-full mr-2">
                      <Bot className="w-4 h-4 text-smartblue-600" />
                    </div>
                  )}
                  <div
                    className={`rounded-2xl py-3 px-4 ${
                      message.sender === 'user'
                        ? 'bg-smartblue-600 text-white'
                        : 'bg-smartgray-100 text-smartgray-800'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs mt-1 opacity-70">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>
                  {message.sender === 'user' && (
                    <div className="bg-smartgray-200 p-2 rounded-full ml-2">
                      <User className="w-4 h-4 text-smartgray-600" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
            {isLoading && (
              <div className="flex justify-start mb-4">
                <div className="flex items-center bg-smartgray-100 rounded-2xl py-3 px-4">
                  <RefreshCw className="w-4 h-4 text-smartgray-600 animate-spin mr-2" />
                  <p className="text-sm text-smartgray-600">Thinking...</p>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="mt-auto">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask about skincare, haircare, or grooming..."
                className="flex-1 rounded-xl border border-smartgray-300 py-3 px-4 focus:outline-none focus:border-smartblue-500"
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={!input.trim() || isLoading}
                className={`rounded-xl bg-smartblue-600 p-3 text-white ${
                  !input.trim() || isLoading
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:bg-smartblue-700'
                }`}
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-smartgray-500 mt-2">
              This AI assistant uses pre-defined responses. In a production app, it would connect to a real AI model.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Chat;
