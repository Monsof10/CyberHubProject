import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FinalQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const questions = [
    {
      questionText: "What is the primary goal of DNS spoofing?",
      answerOptions: [
        { text: "To redirect users to malicious websites", isCorrect: true },
        { text: "To encrypt DNS traffic", isCorrect: false },
        { text: "To speed up DNS resolution", isCorrect: false },
        { text: "To backup DNS records", isCorrect: false },
      ],
    },
    {
      questionText: "Which technique is commonly used in email spoofing?",
      answerOptions: [
        { text: "Encrypting email content", isCorrect: false },
        { text: "Modifying the sender's address to appear legitimate", isCorrect: true },
        { text: "Deleting email headers", isCorrect: false },
        { text: "Compressing attachments", isCorrect: false },
      ],
    },
    {
      questionText: "How does IP spoofing work?",
      answerOptions: [
        { text: "By encrypting IP addresses", isCorrect: false },
        { text: "By changing network cables", isCorrect: false },
        { text: "By forging the source IP address in packet headers", isCorrect: true },
        { text: "By disabling IP routing", isCorrect: false },
      ],
    },
    {
      questionText: "Which is an effective defense against DNS spoofing?",
      answerOptions: [
        { text: "Using DNSSEC", isCorrect: true },
        { text: "Disabling DNS", isCorrect: false },
        { text: "Using plain text passwords", isCorrect: false },
        { text: "Removing all DNS records", isCorrect: false },
      ],
    },
    {
      questionText: "What makes MAC address spoofing possible?",
      answerOptions: [
        { text: "Hardware limitations", isCorrect: false },
        { text: "Software ability to modify MAC addresses", isCorrect: true },
        { text: "Network encryption", isCorrect: false },
        { text: "Physical access requirements", isCorrect: false },
      ],
    },
    {
      questionText: "Which protection method is most effective against email spoofing?",
      answerOptions: [
        { text: "Implementing SPF, DKIM, and DMARC", isCorrect: true },
        { text: "Blocking all emails", isCorrect: false },
        { text: "Using plain text only", isCorrect: false },
        { text: "Disabling email servers", isCorrect: false },
      ],
    },
    {
      questionText: "What is ARP spoofing used for?",
      answerOptions: [
        { text: "Man-in-the-middle attacks", isCorrect: true },
        { text: "Improving network speed", isCorrect: false },
        { text: "Backing up data", isCorrect: false },
        { text: "Updating software", isCorrect: false },
      ],
    },
    {
      questionText: "How can organizations detect MAC address spoofing?",
      answerOptions: [
        { text: "Network monitoring and MAC address tracking", isCorrect: true },
        { text: "Disabling all network access", isCorrect: false },
        { text: "Using older network cards", isCorrect: false },
        { text: "Removing security measures", isCorrect: false },
      ],
    },
    {
      questionText: "What is a common use of GPS spoofing?",
      answerOptions: [
        { text: "To falsify location data", isCorrect: true },
        { text: "To improve GPS accuracy", isCorrect: false },
        { text: "To save battery life", isCorrect: false },
        { text: "To update maps", isCorrect: false },
      ],
    },
    {
      questionText: "Which protocol is vulnerable to caller ID spoofing?",
      answerOptions: [
        { text: "VoIP protocols", isCorrect: true },
        { text: "HTTP", isCorrect: false },
        { text: "FTP", isCorrect: false },
        { text: "SSH", isCorrect: false },
      ],
    },
    {
      questionText: "What makes website spoofing attacks successful?",
      answerOptions: [
        { text: "Social engineering and visual mimicry", isCorrect: true },
        { text: "Network speed", isCorrect: false },
        { text: "Server location", isCorrect: false },
        { text: "Database size", isCorrect: false },
      ],
    },
    {
      questionText: "How can users protect against spoofing attacks?",
      answerOptions: [
        { text: "Using multi-factor authentication and verification", isCorrect: true },
        { text: "Disabling all security", isCorrect: false },
        { text: "Sharing passwords", isCorrect: false },
        { text: "Using public networks", isCorrect: false },
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
      return "Excellent! You have mastered spoofing attack concepts and protections!";
    } else if (percentage >= 60) {
      return "Good job! You understand most concepts but might want to review some topics.";
    } else {
      return "You might want to review the material and labs before proceeding.";
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
            <h2 style={{ color: '#5DADE2', marginBottom: '20px' }}>Final Quiz Complete!</h2>
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
                  to="/Sql-Injection/AttackPages/HomePage"
                  style={{
                    backgroundColor: '#F1C40F',
                    color: '#000',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    textDecoration: 'none'
                  }}
                >
                  Next Module: Sql-Injection 
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
            to="/Spoofing/AttackPages/IpSpoofing"
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
            Return to IP Spoofing
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FinalQuiz;
