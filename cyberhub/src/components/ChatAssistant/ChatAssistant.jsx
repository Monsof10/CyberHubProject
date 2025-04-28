import React, { useState, useEffect, useRef } from 'react';

// src/components/Chatbot.jsx
import axios from 'axios';

const Chatbot = () => {
  const [messages, setMessages] = useState([]); // 📝 Stores conversation
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = { role: 'user', content: message };
    setMessages((prev) => [...prev, userMessage]);
    setMessage('');
    setLoading(true);

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [...messages, userMessage],
        },
        {
          headers: {
            Authorization: `Bearer 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`,
            'Content-Type': 'application/json',
          },
        }
      );

      const botMessage = {
        role: 'assistant',
        content: response.data.choices[0].message.content,
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      const errorBotMessage = {
        role: 'assistant',
        content: 'Failed to get a reply from AI.',
      };
      setMessages((prev) => [...prev, errorBotMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>🤖 AI Chatbot Assistant</h2>

      <div style={{
        border: '1px solid #ccc',
        padding: '10px',
        height: '300px',
        overflowY: 'auto',
        marginBottom: '10px',
        borderRadius: '8px',
      }}>
        {/* 📝 Display conversation */}
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              textAlign: msg.role === 'user' ? 'right' : 'left',
              marginBottom: '10px',
            }}
          >
            <strong>{msg.role === 'user' ? 'You' : 'Bot'}:</strong> {msg.content}
          </div>
        ))}
        
        {/* 🔵 Loading animation */}
        {loading && (
          <div style={{ textAlign: 'left', color: '#888' }}>
            <strong>Bot:</strong> <span className="typing">Thinking<span className="dot">.</span><span className="dot">.</span><span className="dot">.</span></span>
          </div>
        )}
      </div>

      <div style={{ display: 'flex' }}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          style={{
            flexGrow: 1,
            padding: '10px',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') sendMessage();
          }}
        />
        <button
          onClick={sendMessage}
          style={{
            marginLeft: '10px',
            padding: '10px 20px',
            borderRadius: '4px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Send
        </button>
      </div>

      {/* 🔵 Typing animation styles */}
      <style jsx="true">{`
        .typing .dot {
          animation: blink 1s infinite;
        }

        .typing .dot:nth-child(2) {
          animation-delay: 0.2s;
        }

        .typing .dot:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes blink {
          0% { opacity: 0; }
          50% { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default Chatbot;
