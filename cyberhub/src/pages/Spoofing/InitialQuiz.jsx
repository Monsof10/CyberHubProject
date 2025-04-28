import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const InitialQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const questions = [
    {
      questionText: "What is spoofing in cybersecurity?",
      answerOptions: [
        { text: "Making legitimate services faster", isCorrect: false },
        { text: "Impersonating trusted entities or devices", isCorrect: true },
        { text: "Encrypting network traffic", isCorrect: false },
        { text: "Creating network backups", isCorrect: false },
      ],
    },
    {
      questionText: "Which of these is a common type of spoofing attack?",
      answerOptions: [
        { text: "File compression", isCorrect: false },
        { text: "DNS spoofing", isCorrect: true },
        { text: "Data backup", isCorrect: false },
        { text: "System updates", isCorrect: false },
      ],
    },
    {
      questionText: "Why are spoofing attacks dangerous?",
      answerOptions: [
        { text: "They can trick users into trusting malicious sources", isCorrect: true },
        { text: "They make networks faster", isCorrect: false },
        { text: "They improve security", isCorrect: false },
        { text: "They update software automatically", isCorrect: false },
      ],
    },
    {
      questionText: "What is a common goal of email spoofing?",
      answerOptions: [
        { text: "To improve email delivery", isCorrect: false },
        { text: "To conduct phishing attacks", isCorrect: true },
        { text: "To speed up email servers", isCorrect: false },
        { text: "To backup email data", isCorrect: false },
      ],
    },
    {
      questionText: "Which protocol can be vulnerable to spoofing?",
      answerOptions: [
        { text: "All of the mentioned", isCorrect: true },
        { text: "DNS", isCorrect: false },
        { text: "ARP", isCorrect: false },
        { text: "IP", isCorrect: false },
      ],
    },
    {
      questionText: "What is a basic defense against spoofing attacks?",
      answerOptions: [
        { text: "Authentication and verification mechanisms", isCorrect: true },
        { text: "Disabling all network services", isCorrect: false },
        { text: "Using older software versions", isCorrect: false },
        { text: "Removing security measures", isCorrect: false },
      ],
    }
  ];

  const handleAnswerClick = (isCorrect, index) => {
    setSelectedAnswer(index);
    setIsCorrect(isCorrect);
    
    if (isCorrect) {
      setScore(score + 1);
    }
    
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowScore(true);
      }
      setSelectedAnswer(null);
      setIsCorrect(null);
    }, 1000);
  };

  const calculatePercentage = () => {
    return Math.round((score / questions.length) * 100);
  };

  const getScoreMessage = () => {
    const percentage = calculatePercentage();
    if (percentage >= 80) {
      return "Excellent! You have a strong foundation in spoofing concepts!";
    } else if (percentage >= 60) {
      return "Good job! You understand the basics but might want to review some concepts.";
    } else {
      return "You might want to review the material before proceeding.";
    }
  };

  return (
    <div style={{
      backgroundColor: '#151B3B',
      minHeight: '100vh',
      color: '#fff',
      padding: '40px',
      fontFamily: 'Georgia, serif'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: '#1a2147',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 0 20px rgba(0,0,0,0.3)'
      }}>
        {showScore ? (
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ color: '#5DADE2', marginBottom: '20px' }}>Initial Quiz Complete!</h2>
            <div style={{ 
              fontSize: '24px', 
              marginBottom: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              alignItems: 'center'
            }}>
              <p>You scored {score} out of {questions.length}</p>
              <p style={{ color: '#F1C40F' }}>
                Percentage: {calculatePercentage()}%
              </p>
            </div>
            <p style={{ fontSize: '18px', marginBottom: '30px', color: '#F1C40F' }}>
              {getScoreMessage()}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button
                  onClick={() => {
                    setShowScore(false);
                    setCurrentQuestion(0);
                    setScore(0);
                  }}
                  style={{
                    backgroundColor: '#5DADE2',
                    color: '#fff',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}
                >
                  <span style={{ fontSize: '20px' }}>←</span>
                  Retake Quiz
                </button>
                <Link
                  to="/Spoofing/AttackPages/DnsSpoofing"
                  style={{
                    backgroundColor: '#F1C40F',
                    color: '#000',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    textDecoration: 'none'
                  }}
                >
                  Continue to DNS Spoofing
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ color: '#5DADE2', marginBottom: '10px' }}>
                Question {currentQuestion + 1}/{questions.length}
              </h3>
              <div style={{ 
                height: '10px', 
                backgroundColor: '#2C3E50',
                borderRadius: '5px',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                  height: '100%',
                  backgroundColor: '#5DADE2',
                  transition: 'width 0.3s ease'
                }} />
              </div>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h2 style={{ color: '#F1C40F', marginBottom: '20px' }}>
                {questions[currentQuestion].questionText}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {questions[currentQuestion].answerOptions.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerClick(option.isCorrect, index)}
                    disabled={selectedAnswer !== null}
                    style={{
                      backgroundColor: selectedAnswer === index 
                        ? (isCorrect ? '#2ecc71' : '#e74c3c') 
                        : '#2C3E50',
                      border: 'none',
                      padding: '15px',
                      borderRadius: '5px',
                      color: '#fff',
                      cursor: selectedAnswer === null ? 'pointer' : 'default',
                      textAlign: 'left',
                      transition: 'all 0.3s',
                      transform: selectedAnswer === index ? 'scale(1.02)' : 'scale(1)',
                      boxShadow: selectedAnswer === index ? '0 4px 8px rgba(0,0,0,0.2)' : 'none'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ 
                        width: '25px',
                        height: '25px',
                        borderRadius: '50%',
                        backgroundColor: '#5DADE2',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '14px',
                        fontWeight: 'bold'
                      }}>
                        {String.fromCharCode(65 + index)}
                      </span>
                      {option.text}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Question Navigation Dots */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center',
              gap: '10px',
              marginTop: '30px'
            }}>
              {questions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuestion(index)}
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: currentQuestion === index ? '#F1C40F' : '#2C3E50',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}
                  onMouseEnter={(e) => {
                    if (currentQuestion !== index) {
                      e.currentTarget.style.backgroundColor = '#34495E';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (currentQuestion !== index) {
                      e.currentTarget.style.backgroundColor = '#2C3E50';
                    }
                  }}
                />
              ))}
            </div>
          </>
        )}
      </div>
      {/* Bottom navigation */}
      <div style={{
        maxWidth: '800px',
        margin: '20px auto 0',
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Link
            to="/"
            style={{
              backgroundColor: '#5DADE2',
              color: '#fff',
              padding: '10px 20px',
              borderRadius: '5px',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            <span style={{ fontSize: '20px' }}>🏠</span>
            Home
          </Link>
          <Link
            to="/Spoofing/Article"
            style={{
              backgroundColor: '#34495E',
              color: '#fff',
              padding: '10px 20px',
              borderRadius: '5px',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            <span style={{ fontSize: '20px' }}>←</span>
            Return to Article
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InitialQuiz;
