const chatbotData = {
  mainOptions: [
    {
      id: 'career',
      text: 'Suggest a track based on my career goals',
      icon: '💼'
    },
    {
      id: 'learn',
      text: 'Help me find something to learn',
      icon: '🎓'
    },
    {
      id: 'course',
      text: 'I have a question about a course/track',
      icon: '❓'
    },
    {
      id: 'help',
      text: 'I have an issue / need some help',
      icon: '🔧'
    }
  ],

  qa: {
    gettingStarted: {
      "🔰 How do I sign up for a course?": "To sign up for a course: 1. Click the 'Login/Register' button 2. Create an account or log in 3. Browse courses 4. Click 'Enroll' on your chosen course. You'll get immediate access to start learning!",
      "What is the first course I should take as a beginner?": "For beginners, we recommend starting with our 'SQL Injection' track. It provides fundamental cybersecurity concepts and hands-on practice. This course will give you a solid foundation before moving to more advanced topics.",
      "Can you recommend courses based on my interests?": "Yes! Tell me what interests you: Offensive Security, Defensive Security, or Forensics? Each path has specialized courses tailored to your career goals.",
      "How do I reset my password?": "To reset your password: 1. Click 'Forgot Password' on the login page 2. Enter your email 3. Check your email for reset instructions 4. Create a new password.",
      "How do I update my profile or change my email?": "Go to your Profile settings (click your avatar in the top right), where you can update your personal information, email, and notification preferences."
    },

    courseNavigation: {
      "🎓 How do I access my enrolled courses?": "Access your enrolled courses through your Dashboard. Click your profile icon and select 'My Courses' to see all your active enrollments.",
      "Where can I find course materials and lectures?": "Course materials are available in each course's main page. You'll find video lectures, reading materials, and hands-on labs organized by modules.",
      "How do I download lecture slides or PDFs?": "Look for the download icon next to each lecture. Course materials marked with a download symbol can be saved for offline access.",
      "Can I take notes inside the platform?": "Yes! Each lecture has a built-in notes feature. Click the 'Notes' tab to take and save notes while watching lectures.",
      "How do I mark a lesson as complete?": "Click the 'Mark as Complete' button at the bottom of each lesson. Your progress is automatically saved and tracked."
    },

    courseRecommendations: {
      "🧭 What are the top-rated courses on this platform?": "Our highest-rated courses include: 1. SQL Injection Mastery 2. Network Security Fundamentals 3. Ethical Hacking Essentials 4. Digital Forensics Basics",
      "Which cybersecurity courses are best for beginners?": "For beginners, we recommend: 1. Introduction to Cybersecurity 2. Basic Network Security 3. Fundamentals of SQL Injection 4. Web Security Basics",
      "Are there any advanced AI in cybersecurity courses?": "Yes! Check out our advanced courses: 1. AI for Threat Detection 2. Machine Learning in Security 3. Automated Security Testing",
      "What certification courses are available?": "We offer preparation courses for: CompTIA Security+, CEH (Certified Ethical Hacker), CISSP, and our own platform certifications.",
      "Can you recommend a learning path for ethical hacking?": "Our recommended ethical hacking path: 1. Network Basics 2. SQL Injection 3. Web Security 4. Advanced Penetration Testing"
    },

    assessments: {
      "🧪 How do I take a quiz or exam?": "Access quizzes through your course dashboard. Click 'Start Quiz', answer all questions, and submit. Results are shown immediately.",
      "Where can I see my grades?": "View your grades in the 'Progress' section of your dashboard. You'll find detailed breakdowns of quiz scores and overall course progress.",
      "Can I retake a failed quiz?": "Yes! You can retake quizzes up to 3 times. Use the 'Retake Quiz' button after reviewing your previous attempts.",
      "What is the passing score for certifications?": "The passing score for most certification exams is 70%. Some advanced certifications require 80% or higher.",
      "How do I prepare for the final exam?": "Review course materials, practice with sample questions, and use the study guides provided in each course module."
    },

    technicalSupport: {
      "🛠️ The video won't play—what can I do?": "Try these steps: 1. Refresh the page 2. Clear browser cache 3. Try a different browser 4. Check your internet connection 5. Contact support if issues persist",
      "I'm getting an error message. Can you help?": "Please provide the error message or screenshot. Common fixes include clearing cache, updating browser, or checking system requirements.",
      "How do I report a bug in a course?": "Use the 'Report Issue' button in the course interface or contact support with details about the bug and steps to reproduce it.",
      "My progress isn't being saved—what should I do?": "First, check your internet connection. Then clear browser cache and cookies. If the issue persists, contact our technical support."
    },

    cybersecurityTopics: {
      "🛡️ What is a firewall and how does it work?": "A firewall is a security system that monitors and controls network traffic based on predetermined rules. It acts as a barrier between trusted and untrusted networks.",
      "What are common types of cyber attacks?": "Common attacks include: 1. Phishing 2. Malware 3. SQL Injection 4. DDoS 5. Man-in-the-Middle 6. Password Attacks",
      "Can you explain how phishing attacks work?": "Phishing attacks trick users into revealing sensitive information by posing as legitimate entities. They often use fake emails, websites, or messages.",
      "What is the difference between IDS and IPS?": "IDS (Intrusion Detection System) monitors and alerts about suspicious activity. IPS (Intrusion Prevention System) actively blocks or prevents detected threats.",
      "How do I secure my home Wi-Fi network?": "1. Use WPA3 encryption 2. Create a strong password 3. Change default SSID 4. Enable firewall 5. Keep router firmware updated"
    },

    labsAndSimulations: {
      "👩‍💻 How do I start a penetration testing lab?": "1. Set up a virtual environment 2. Install required tools 3. Configure target systems 4. Follow lab setup guides 5. Start with basic scenarios",
      "Can you guide me through a CTF challenge?": "Select a challenge from our CTF platform. Each challenge includes hints and step-by-step guidance if needed.",
      "How do I simulate a DDoS attack safely?": "Use our controlled lab environment for DDoS simulations. Never perform attacks outside of authorized testing environments.",
      "Where can I practice Linux terminal commands?": "Access our built-in terminal simulator or use the virtual lab environment for hands-on Linux practice.",
      "How do I use tools like Wireshark or Nmap?": "Our practical labs include guided tutorials for security tools. Start with basic usage and progress to advanced features."
    },

    aiAssistantHelp: {
      "🧠 Can you explain this code snippet?": "Share the code snippet, and I'll provide a detailed explanation of its functionality and security implications.",
      "What does this vulnerability mean?": "Provide the vulnerability details, and I'll explain its impact, risks, and recommended mitigation strategies.",
      "How can I fix this misconfiguration?": "Share the configuration details, and I'll guide you through the proper security settings and best practices.",
      "What is the output of this script?": "Share the script, and I'll explain its expected output and potential security considerations.",
      "How do I automate this security task with Python?": "I can help you with Python scripts for security automation. What specific task would you like to automate?"
    },

    certificationAndCareer: {
      "🧾 What certifications do you offer?": "We offer platform certifications in: 1. Ethical Hacking 2. Network Security 3. Web Security 4. Digital Forensics",
      "How can I prepare for the CompTIA Security+ exam?": "Follow our Security+ prep track: 1. Review course materials 2. Take practice tests 3. Join study groups 4. Use exam prep resources",
      "What are the career options in cybersecurity?": "Popular roles include: 1. Security Analyst 2. Penetration Tester 3. Security Engineer 4. Incident Responder 5. Security Consultant",
      "Can you help me build a cybersecurity resume?": "Check our career resources section for resume templates, tips, and examples specific to cybersecurity roles.",
      "How do I earn a certificate from this course?": "Complete all required modules, pass the final exam with 70% or higher, and submit any required projects."
    },

    learningAnalytics: {
      "📊 How much time did I spend on this course?": "Check your dashboard for detailed analytics on time spent per course, module completion rates, and learning patterns.",
      "What topics am I struggling with?": "Your performance analytics show areas needing improvement based on quiz scores and time spent on topics.",
      "Can you suggest areas to review?": "Based on your quiz results and progress, I can recommend specific topics and resources for review.",
      "Show my learning progress or dashboard": "Access your personalized dashboard to view comprehensive progress tracking and performance metrics.",
      "What's my average score across all courses?": "Your dashboard shows cumulative performance metrics, including average scores and completion rates."
    },

    collaboration: {
      "🤝 How can I join a study group?": "Access the 'Community' section to find and join study groups based on your interests and course enrollment.",
      "Can you connect me to a mentor?": "Check our mentorship program in the 'Community' section to connect with experienced professionals.",
      "Where can I discuss this topic with peers?": "Use our discussion forums, course-specific chat rooms, or community channels to engage with fellow learners.",
      "Can you review my project or code?": "Submit your project through the course interface for peer review or instructor feedback."
    },

    systemIntegration: {
      "🖥️ How do I integrate a VPN with this platform?": "Follow our VPN setup guide in the technical documentation. We support most major VPN providers.",
      "Can I deploy this lab using Docker?": "Yes! Check our Docker deployment guides for step-by-step instructions on setting up lab environments.",
      "How do I access the online shell or terminal?": "Click the 'Terminal' button in your lab interface. We provide both web-based and downloadable terminal options.",
      "Can I use xterm.js for this task?": "Yes, our platform supports xterm.js integration. Check the developer documentation for implementation details.",
      "How do I submit my project for evaluation?": "Use the 'Submit Project' button in your course interface. Include all required files and documentation."
    }
  },

  careerPaths: {
    "offensive": {
      title: "Offensive Security Specialist",
      recommendedTracks: ["SQL Injection", "Cross-Site Scripting", "User Enumeration"],
      description: "Focus on penetration testing and identifying security vulnerabilities."
    },
    "defensive": {
      title: "Defensive Security Engineer",
      recommendedTracks: ["Forensic Science", "DOS and DDOS Defense", "Network Security"],
      description: "Specialize in protecting systems and responding to security incidents."
    },
    "forensics": {
      title: "Digital Forensics Investigator",
      recommendedTracks: ["Forensic Science", "Network Analysis", "Incident Response"],
      description: "Learn to investigate security incidents and analyze digital evidence."
    }
  }
};

export default chatbotData;
