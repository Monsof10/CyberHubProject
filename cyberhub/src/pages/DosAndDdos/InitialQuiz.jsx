import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { getUserProgress, updateUserProgress } from '../../supabase/progress';
import AttackPagesHeader from '../../components/AttackPagesHeader/AttackPagesHeader';

const InitialQuiz = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [progress, setProgress] = useState(null);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    const fetchProgress = async () => {
      try {
        const userProgress = await getUserProgress(user.id);
        if (!userProgress?.progress?.dosddos) {
          const initialProgress = {
            ...userProgress?.progress,
            dosddos: {
              article: { completed: false, progress: 0 },
              initialQuiz: { completed: false, score: 0 },
              labs: { completed: false },
              finalQuiz: { completed: false }
            }
          };
          await updateUserProgress(user.id, initialProgress);
          setProgress(initialProgress);
        } else {
          setProgress(userProgress.progress);
        }
      } catch (error) {
        console.error('Error fetching progress:', error);
      }
    };
    fetchProgress();
  }, [user, navigate]);

  const updateQuizProgress = async (finalScore) => {
    if (!user || !progress) return;

    const updatedProgress = {
      ...progress,
      dosddos: {
        ...progress.dosddos,
        initialQuiz: {
          completed: true,
          score: finalScore
        }
      }
    };

    try {
      await updateUserProgress(user.id, updatedProgress);
      setProgress(updatedProgress);
    } catch (error) {
      console.error('Error updating progress:', error);
    }
  };

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const questions = [
    {
      questionText: "What is the primary characteristic of a DDoS attack compared to a DoS attack?",
      answerOptions: [
        { text: "Uses multiple compromised systems (botnet)", isCorrect: true },
        { text: "Only targets web servers", isCorrect: false },
        { text: "Always uses HTTP requests", isCorrect: false },
        { text: "Takes longer to execute", isCorrect: false },
      ],
    },
    {
      questionText: "Which statement about DoS attacks is true?",
      answerOptions: [
        { text: "They always require multiple attackers", isCorrect: false },
        { text: "They aim to make services unavailable to legitimate users", isCorrect: true },
        { text: "They only work on small networks", isCorrect: false },
        { text: "They primarily steal data", isCorrect: false },
      ],
    },
    {
      questionText: "What is a key feature of HTTP flood attacks?",
      answerOptions: [
        { text: "They only use invalid requests", isCorrect: false },
        { text: "They target database servers exclusively", isCorrect: false },
        { text: "They send legitimate-looking requests in high volume", isCorrect: true },
        { text: "They modify server configurations", isCorrect: false },
      ],
    },
    {
      questionText: "Which protection method is most effective against DoS attacks?",
      answerOptions: [
        { text: "Rate limiting and traffic filtering", isCorrect: true },
        { text: "Changing server passwords regularly", isCorrect: false },
        { text: "Disabling all network ports", isCorrect: false },
        { text: "Using only HTTP/2", isCorrect: false },
      ],
    },
    {
      questionText: "What makes DDoS attacks harder to defend against?",
      answerOptions: [
        { text: "They only use encrypted traffic", isCorrect: false },
        { text: "They come from multiple sources simultaneously", isCorrect: true },
        { text: "They only target specific ports", isCorrect: false },
        { text: "They require special software", isCorrect: false },
      ],
    },
    {
      questionText: "Which is a recommended mitigation strategy for DoS/DDoS attacks?",
      answerOptions: [
        { text: "Removing all security measures", isCorrect: false },
        { text: "Using Content Delivery Networks (CDNs)", isCorrect: true },
        { text: "Disabling all network monitoring", isCorrect: false },
        { text: "Reducing server capacity", isCorrect: false },
      ],
    }
  ];

  const handleAnswerClick = async (isCorrect, index) => {
    setSelectedAnswer(index);
    setIsCorrect(isCorrect);
    
    if (isCorrect) {
      setScore(score + 1);
    }
    
    setTimeout(async () => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowScore(true);
        const finalScore = ((score + (isCorrect ? 1 : 0)) / questions.length) * 100;
        await updateQuizProgress(finalScore);
      }
      setSelectedAnswer(null);
      setIsCorrect(null);
    }, 1000);
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      const prevQuestion = questions[currentQuestion - 1];
      const prevAnswer = prevQuestion.answerOptions.find(option => option.isCorrect);
      if (prevAnswer) {
        setScore(score - 1);
      }
    }
  };

  const calculatePercentage = () => {
    return Math.round((score / questions.length) * 100);
  };

  const getScoreMessage = () => {
    const percentage = calculatePercentage();
    if (percentage >= 80) {
      return "Excellent! You have a strong understanding of DoS/DDoS attacks.";
    } else if (percentage >= 60) {
      return "Good job! You grasp the basics but might want to review some concepts.";
    } else {
      return "You might want to review the material and try again.";
    }
  };

  return (
    <div style={{
      backgroundColor: '#151B3B',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <AttackPagesHeader pageType="dos" />
      <div style={{
        flex: 1,
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
              <h2 style={{ color: '#5DADE2', marginBottom: '20px' }}>Quiz Complete!</h2>
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
                    to="/DosAndDdos/AttackPages/DosNormal"
                    style={{
                      backgroundColor: '#F1C40F',
                      color: '#000',
                      padding: '10px 20px',
                      borderRadius: '5px',
                      textDecoration: 'none'
                    }}
                  >
                    Continue to Dos Attack
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
                      onClick={() => {
                        handleAnswerClick(option.isCorrect);
                        if (currentQuestion < questions.length - 1) {
                          setTimeout(() => handleNextQuestion(), 500);
                        } else {
                          setTimeout(() => setShowScore(true), 500);
                        }
                      }}
                      style={{
                        backgroundColor: '#2C3E50',
                        border: 'none',
                        padding: '15px',
                        borderRadius: '5px',
                        color: '#fff',
                        cursor: 'pointer',
                        textAlign: 'left',
                        transition: 'all 0.3s',
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#34495E';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#2C3E50';
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
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
              to="/DosAndDdos/Article"
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
    </div>
  );
};

export default InitialQuiz;
