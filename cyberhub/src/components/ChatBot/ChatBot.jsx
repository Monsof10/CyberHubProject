import React, { useState, useRef, useEffect } from 'react';
import './ChatBot.css';
import chatbotData from '../../data/chatbot.js';
import { getOllamaResponse } from '../../utils/ollamaUtils';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      setMessages([{
        type: 'bot',
        text: 'Hi! How can I help you today? Choose from these options or ask me anything:',
        options: chatbotData.mainOptions
      }]);
    }
  }, [isOpen]);

  // Find best matching predefined Q&A
  const findPredefinedAnswer = (question) => {
    const normalizedQuestion = question.toLowerCase();
    
    // Search through all Q&A categories
    for (const category in chatbotData.qa) {
      const qaSet = chatbotData.qa[category];
      for (const [q, a] of Object.entries(qaSet)) {
        // Remove emojis and trim for better matching
        const cleanQuestion = q.replace(/[🔰🎓🧭🧪🛠️🛡️👩‍💻🧠🧾📊🤝🖥️]/g, '').trim().toLowerCase();
        if (normalizedQuestion.includes(cleanQuestion) || 
            cleanQuestion.includes(normalizedQuestion)) {
          return a;
        }
      }
    }
    return null;
  };

  const handleCareerPathQuestion = (text) => {
    const paths = Object.entries(chatbotData.careerPaths).map(([key, path]) => ({
      id: key,
      text: path.title,
      description: path.description,
      tracks: path.recommendedTracks
    }));

    setMessages(prevMessages => [...prevMessages,
      {
        type: 'bot',
        text: 'Here are our available career paths. Click one to learn more:',
        options: paths.map(path => ({
          id: path.id,
          text: path.text,
          icon: '🎯'
        }))
      }
    ]);
  };

  const handleOptionClick = async (option) => {
    // Add user's selection to messages
    setMessages(prevMessages => [...prevMessages, 
      { type: 'user', text: option.text }
    ]);

    // Handle career paths
    if (option.id === 'career') {
      handleCareerPathQuestion();
      return;
    }

    // Handle career path selection
    const path = chatbotData.careerPaths[option.id];
    if (path) {
      setMessages(prevMessages => [...prevMessages, {
        type: 'bot',
        text: `${path.description}\n\nRecommended tracks:\n${path.recommendedTracks.map(track => `• ${track}`).join('\n')}`
      }]);
      return;
    }

    // Handle other predefined options
    const predefinedAnswer = findPredefinedAnswer(option.text);
    if (predefinedAnswer) {
      setMessages(prevMessages => [...prevMessages, {
        type: 'bot',
        text: predefinedAnswer
      }]);
      return;
    }

    // If no predefined answer, use AI
    try {
      setIsProcessing(true);
      const response = await getOllamaResponse(option.text);
      setMessages(prevMessages => [...prevMessages, {
        type: 'bot',
        text: response
      }]);
    } catch (error) {
      console.error('Error getting AI response:', error);
      setMessages(prevMessages => [...prevMessages, {
        type: 'bot',
        text: 'I apologize, but I encountered an error. Please try asking your question differently.'
      }]);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleSendMessage = async (e) => {
    e?.preventDefault();
    if (!inputText.trim() || isProcessing) return;

    const userQuestion = inputText.trim();
    setMessages(prevMessages => [...prevMessages, { type: 'user', text: userQuestion }]);
    setInputText('');
    setIsProcessing(true);

    try {
      // First check for career-related questions
      if (userQuestion.toLowerCase().includes('career') || 
          userQuestion.toLowerCase().includes('path')) {
        handleCareerPathQuestion(userQuestion);
        setIsProcessing(false);
        return;
      }

      // Then check for predefined answers
      const predefinedAnswer = findPredefinedAnswer(userQuestion);
      if (predefinedAnswer) {
        setMessages(prevMessages => [...prevMessages, {
          type: 'bot',
          text: predefinedAnswer
        }]);
      } else {
        // If no predefined answer, use Ollama
        console.log('Requesting AI response for:', userQuestion);
        const response = await getOllamaResponse(userQuestion);
        console.log('Received AI response:', response);
        
        setMessages(prevMessages => [...prevMessages, {
          type: 'bot',
          text: response
        }]);
      }
    } catch (error) {
      console.error('Error in handleSendMessage:', error);
      setMessages(prevMessages => [...prevMessages, {
        type: 'bot',
        text: error.message || 'I apologize, but I encountered an error. Please try asking your question differently.'
      }]);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chatbot-container">
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>✨ AI Learning Assistant</h3>
            <button className="close-button" onClick={toggleChat}>×</button>
          </div>
          <div className="chatbot-body">
            <div className="chat-messages">
              {messages.map((message, index) => (
                <div key={index} className={`chat-message ${message.type === 'user' ? 'user-message' : 'bot-message'}`}>
                  {message.text}
                  {message.options && (
                    <div className="chat-options">
                      {message.options.map((option) => (
                        <button
                          key={option.id}
                          className="chat-option-button"
                          onClick={() => handleOptionClick(option)}
                        >
                          {option.icon && <span className="option-icon">{option.icon}</span>}
                          {option.text}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {isProcessing && (
                <div className="chat-message bot-message">
                  <div className="typing-indicator">Thinking...</div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>
          
          <div className="chat-input">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={isProcessing ? "Please wait..." : "Type your question here..."}
              disabled={isProcessing}
            />
            <button 
              onClick={handleSendMessage}
              disabled={isProcessing || !inputText.trim()}
            >
              {isProcessing ? '...' : 'Send'}
            </button>
          </div>
        </div>
      )}
      <button className="chatbot-button" onClick={toggleChat}>
        {isOpen ? '×' : '✨'}
      </button>
    </div>
  );
};

export default ChatBot;
