// src/Chatbot.js
import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (input.trim()) {
      // Add user message
      const userMessage = { text: input, fromUser: true };
      setMessages([...messages, userMessage]);
      setInput('');
      setLoading(true);

      try {
        // Call OpenAI API
        const response = await axios.post(
          'https://api.openai.com/v1/engines/gpt-3.5-turbo/completions',
          {
            prompt: input,
            max_tokens: 150,
            temperature: 0.7,
          },
          {
            headers: {
              'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
              'Content-Type': 'application/json',
            },
          }
        );

        // Add bot response
        const botMessage = { text: response.data.choices[0].text.trim(), fromUser: false };
        setMessages([...messages, userMessage, botMessage]);
      } catch (error) {
        console.error('Error fetching response:', error);
        const errorMessage = { text: 'Sorry, something went wrong.', fromUser: false };
        setMessages([...messages, userMessage, errorMessage]);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10 bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4 h-96 overflow-y-scroll">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 ${msg.fromUser ? 'text-right' : 'text-left'}`}>
            <div
              className={`inline-block px-4 py-2 rounded-lg ${
                msg.fromUser ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="text-center mt-2">
            <div className="inline-block px-4 py-2 bg-gray-300 text-gray-700 rounded-lg">...</div>
          </div>
        )}
      </div>
      <div className="flex items-center p-4 border-t border-gray-200">
        <input
          type="text"
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button
          onClick={handleSend}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
