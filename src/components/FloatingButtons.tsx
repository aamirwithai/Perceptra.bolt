import { useState } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

export default function FloatingButtons() {
  const [showChatbot, setShowChatbot] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { role: 'bot', message: 'Hello! How can I help you today?' }
  ]);
  const [chatInput, setChatInput] = useState('');

  const handleWhatsApp = () => {
    window.open('https://api.whatsapp.com/send/?phone=917977036723&text=Hi%2C+I+would+like+to+know+more+about+your+services&type=phone_number&app_absent=0', '_blank');
  };

  const handleSendMessage = () => {
    if (!chatInput.trim()) return;

    setChatMessages([...chatMessages, { role: 'user', message: chatInput }]);
    setChatInput('');

    setTimeout(() => {
      setChatMessages(prev => [
        ...prev,
        { role: 'bot', message: 'Thank you for your message! Our team will get back to you shortly. For immediate assistance, please use the contact form or WhatsApp.' }
      ]);
    }, 1000);
  };

  return (
    <>
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-6 left-6 z-40 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      <button
        onClick={() => setShowChatbot(!showChatbot)}
        className="fixed bottom-6 right-6 z-40 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110"
        aria-label="AI Assistant"
      >
        {showChatbot ? <X className="w-6 h-6" /> : <Bot className="w-6 h-6" />}
      </button>

      {showChatbot && (
        <div className="fixed bottom-24 right-6 z-40 w-96 max-w-[calc(100vw-3rem)] bg-gray-900 border border-white/10 rounded-lg shadow-2xl overflow-hidden">
          <div className="bg-red-600 p-4 flex items-center gap-3">
            <Bot className="w-6 h-6 text-white" />
            <div>
              <h3 className="text-white font-bold">AI Assistant</h3>
              <p className="text-white/80 text-sm">Ask us anything</p>
            </div>
          </div>

          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {chatMessages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    msg.role === 'user'
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-800 text-gray-200'
                  }`}
                >
                  {msg.message}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-white/10">
            <div className="flex gap-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 bg-gray-800 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-red-500"
              />
              <button
                onClick={handleSendMessage}
                className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
