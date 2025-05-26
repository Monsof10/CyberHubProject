import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { getUserProgress, updateUserProgress } from '../../supabase/progress';
import AttackPagesHeader from '../../components/AttackPagesHeader/AttackPagesHeader';

const FinalQuiz = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [isSaving, setIsSaving] = useState(false);

  // Quiz questions array remains unchanged
  const questions = [
    {
      questionText: "What is the main purpose of a Slowloris attack?",
      answerOptions: [
        { text: "To exhaust server resources by keeping connections open", isCorrect: true },
        { text: "To flood the server with rapid requests", isCorrect: false },
        { text: "To encrypt server data", isCorrect: false },
        { text: "To steal user credentials", isCorrect: false },
      ],
    },
    {
      questionText: "How does an ICMP flood attack work?",
      answerOptions: [
        { text: "By sending malformed packets", isCorrect: false },
        { text: "By overwhelming with ping requests", isCorrect: true },
        { text: "By encrypting network traffic", isCorrect: false },
        { text: "By modifying routing tables", isCorrect: false },
      ],
    },
    {
      questionText: "What makes SYN flood attacks effective?",
      answerOptions: [
        { text: "They encrypt all traffic", isCorrect: false },
        { text: "They modify server configurations", isCorrect: false },
        { text: "They exhaust connection resources with half-open connections", isCorrect: true },
        { text: "They delete server files", isCorrect: false },
      ],
    },
    {
      questionText: "Which mitigation technique is effective against UDP floods?",
      answerOptions: [
        { text: "Rate limiting specific UDP ports", isCorrect: true },
        { text: "Disabling all ports", isCorrect: false },
        { text: "Removing firewall rules", isCorrect: false },
        { text: "Increasing server memory", isCorrect: false },
      ],
    },
    {
      questionText: "What is a key characteristic of HTTP flood attacks?",
      answerOptions: [
        { text: "They only use invalid requests", isCorrect: false },
        { text: "They generate legitimate-looking requests", isCorrect: true },
        { text: "They modify server files", isCorrect: false },
        { text: "They only work on specific ports", isCorrect: false },
      ],
    },
    {
      questionText: "Which is the most effective DDoS protection strategy?",
      answerOptions: [
        { text: "Disabling all network services", isCorrect: false },
        { text: "Using multiple layers of protection (CDN, WAF, rate limiting)", isCorrect: true },
        { text: "Blocking all international traffic", isCorrect: false },
        { text: "Reducing server capacity", isCorrect: false },
      ],
    },
    {
      questionText: "What is the primary difference between application-layer and network-layer DDoS attacks?",
      answerOptions: [
        { text: "Target layer in the OSI model", isCorrect: true },
        { text: "Attack duration", isCorrect: false },
        { text: "Number of attackers", isCorrect: false },
        { text: "Traffic encryption", isCorrect: false },
      ],
    },
    {
      questionText: "How do volumetric DDoS attacks work?",
      answerOptions: [
        { text: "By consuming bandwidth with massive traffic", isCorrect: true },
        { text: "By targeting specific applications", isCorrect: false },
        { text: "By modifying server configurations", isCorrect: false },
        { text: "By exploiting software vulnerabilities", isCorrect: false },
      ],
    },
    {
      questionText: "What role does traffic analysis play in DDoS mitigation?",
      answerOptions: [
        { text: "Identifying attack patterns and sources", isCorrect: true },
        { text: "Increasing server capacity", isCorrect: false },
        { text: "Encrypting network traffic", isCorrect: false },
        { text: "Managing user accounts", isCorrect: false },
      ],
    },
    {
      questionText: "Which tool is commonly used for DDoS protection?",
      answerOptions: [
        { text: "Web Application Firewall (WAF)", isCorrect: true },
        { text: "Text editor", isCorrect: false },
        { text: "Email client", isCorrect: false },
        { text: "File compression software", isCorrect: false },
      ],
    },
    {
      questionText: "What is the purpose of DDoS scrubbing centers?",
      answerOptions: [
        { text: "To filter and clean malicious traffic", isCorrect: true },
        { text: "To store backup data", isCorrect: false },
        { text: "To host websites", isCorrect: false },
        { text: "To manage user accounts", isCorrect: false },
      ],
    },
    {
      questionText: "How can organizations prepare for DDoS attacks?",
      answerOptions: [
        { text: "Implementing a comprehensive DDoS response plan", isCorrect: true },
        { text: "Removing all online services", isCorrect: false },
        { text: "Using only local networks", isCorrect: false },
        { text: "Disabling security measures", isCorrect: false },
      ],
    },
    // Practical command questions added
    {
      questionText: "Which command is used to launch a Slowloris attack using slowhttptest?",
      answerOptions: [
        { text: "slowhttptest -c 1000 -H -i 10 -r 200 -t GET -u http://target.com", isCorrect: true },
        { text: "hping3 -S 192.168.1.1 -p 80", isCorrect: false },
        { text: "nmap -sS 192.168.1.1", isCorrect: false },
        { text: "ping 192.168.1.1", isCorrect: false },
      ],
    },
    {
      questionText: "What tool is commonly used for DDoS testing and simulation?",
      answerOptions: [
        { text: "slowhttptest", isCorrect: true },
        { text: "wireshark", isCorrect: false },
        { text: "tcpdump", isCorrect: false },
        { text: "curl", isCorrect: false },
      ],
    },
    {
      questionText: "Which command can be used to simulate a UDP flood attack?",
      answerOptions: [
        { text: "hping3 --udp -p 80 --flood 192.168.1.1", isCorrect: true },
        { text: "ping 192.168.1.1", isCorrect: false },
        { text: "nmap -sU 192.168.1.1", isCorrect: false },
        { text: "curl http://example.com", isCorrect: false },
      ],
    },// ... rest of the questions remain unchanged
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
              initialQuiz: { completed: false },
              labs: { completed: false },
              finalQuiz: { completed: false, score: 0 }
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

  const saveProgress = async () => {
    if (!user || !progress) return;
    
    setIsSaving(true);
    try {
      const updatedProgress = {
        ...progress,
        dosddos: {
          ...progress.dosddos,
          finalQuiz: {
            completed: true,
            score: calculatePercentage()
          }
        }
      };

      await updateUserProgress(user.id, updatedProgress);
      setProgress(updatedProgress);
    } catch (error) {
      console.error('Error saving progress:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const getScoreMessage = () => {
    const percentage = calculatePercentage();
    if (percentage >= 80) {
      return "Excellent! You have mastered DoS/DDoS attack concepts and protections!";
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
      display: 'flex',
      flexDirection: 'column'
    }}>
      <AttackPagesHeader pageType="dos" />
      <div style={{
        padding: '40px',
        fontFamily: 'Georgia, serif',
        color: '#fff',
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          backgroundColor: '#1a2147',
          padding: '30px',
          borderRadius: '10px',
          boxShadow: '0 0 20px rgba(0,0,0,0.3)',
          flex: 1
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
                    to="/DosAndDdos/HomePage"
                    style={{
                      backgroundColor: '#F1C40F',
                      color: '#000',
                      padding: '10px 20px',
                      borderRadius: '5px',
                      textDecoration: 'none'
                    }}
                    onClick={saveProgress}
                  >
                    Complete Level 1 
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
              to="/DosAndDdos/AttackPages/CommonAttacks"
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
              Return to Common Attacks
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalQuiz;
