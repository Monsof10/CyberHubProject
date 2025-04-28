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
      questionText: "What is the main purpose of UNION in SQL injection attacks?",
      answerOptions: [
        { text: "To combine results from multiple queries", isCorrect: true },
        { text: "To encrypt database traffic", isCorrect: false },
        { text: "To delete database records", isCorrect: false },
        { text: "To create new tables", isCorrect: false },
      ],
    },
    {
      questionText: "How does Error-based (Classic) SQL injection work?",
      answerOptions: [
        { text: "By causing random errors", isCorrect: false },
        { text: "By exploiting error messages to extract data", isCorrect: true },
        { text: "By crashing the database", isCorrect: false },
        { text: "By modifying error logs", isCorrect: false },
      ],
    },
    {
      questionText: "What characterizes a blind SQL injection attack?",
      answerOptions: [
        { text: "Attacker can't see the database", isCorrect: false },
        { text: "Database is offline", isCorrect: false },
        { text: "No direct output of query results is visible", isCorrect: true },
        { text: "All queries fail", isCorrect: false },
      ],
    },
    {
      questionText: "Which is an effective defense against SQL injection?",
      answerOptions: [
        { text: "Using parameterized queries", isCorrect: true },
        { text: "Removing all user input", isCorrect: false },
        { text: "Disabling the database", isCorrect: false },
        { text: "Using plain text passwords", isCorrect: false },
      ],
    },
    {
      questionText: "What makes time-based blind SQL injection possible?",
      answerOptions: [
        { text: "Server response timing differences", isCorrect: true },
        { text: "Database encryption", isCorrect: false },
        { text: "Network latency", isCorrect: false },
        { text: "User permissions", isCorrect: false },
      ],
    },
    {
      questionText: "Which practice helps prevent SQL injection attacks?",
      answerOptions: [
        { text: "Input validation and sanitization", isCorrect: true },
        { text: "Storing passwords in plain text", isCorrect: false },
        { text: "Disabling database security", isCorrect: false },
        { text: "Using default credentials", isCorrect: false },
      ],
    },
    {
      questionText: "What is the purpose of the ORDER BY clause in SQL injection?",
      answerOptions: [
        { text: "To determine number of columns in result set", isCorrect: true },
        { text: "To encrypt data", isCorrect: false },
        { text: "To delete records", isCorrect: false },
        { text: "To create users", isCorrect: false },
      ],
    },
    {
      questionText: "How can WAF (Web Application Firewall) prevent SQL injection?",
      answerOptions: [
        { text: "By filtering malicious SQL patterns", isCorrect: true },
        { text: "By slowing down the database", isCorrect: false },
        { text: "By encrypting all data", isCorrect: false },
        { text: "By blocking all traffic", isCorrect: false },
      ],
    },
    {
      questionText: "What role does input escaping play in preventing SQL injection?",
      answerOptions: [
        { text: "Neutralizing special characters in user input", isCorrect: true },
        { text: "Blocking all user input", isCorrect: false },
        { text: "Encrypting the database", isCorrect: false },
        { text: "Disabling SQL queries", isCorrect: false },
      ],
    },
    {
      questionText: "Which database feature can help prevent SQL injection?",
      answerOptions: [
        { text: "Stored procedures with proper parameters", isCorrect: true },
        { text: "Disabling all security", isCorrect: false },
        { text: "Using plain text storage", isCorrect: false },
        { text: "Removing user authentication", isCorrect: false },
      ],
    },
    {
      questionText: "What makes second-order SQL injection different?",
      answerOptions: [
        { text: "It uses stored malicious data from a previous operation", isCorrect: true },
        { text: "It only works on secondary servers", isCorrect: false },
        { text: "It requires two databases", isCorrect: false },
        { text: "It needs two users", isCorrect: false },
      ],
    },
    {
      questionText: "How does ORM (Object-Relational Mapping) help prevent SQL injection?",
      answerOptions: [
        { text: "By automatically handling query parameterization", isCorrect: true },
        { text: "By removing database access", isCorrect: false },
        { text: "By encrypting all queries", isCorrect: false },
        { text: "By limiting database size", isCorrect: false },
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
      return "Excellent! You have mastered SQL injection concepts and protections!";
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
                  to="/"
                  style={{
                    backgroundColor: '#F1C40F',
                    color: '#000',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    textDecoration: 'none'
                  }}
                >
                  Complete Course
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
            to="/Sql-Injection/AttackPages/BlindSqlInjection"
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
            Return to Blind SQL Injection
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FinalQuiz;
