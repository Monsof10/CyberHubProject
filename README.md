# CyberHub - Cybersecurity Learning Platform

## Project Overview
CyberHub is an interactive cybersecurity learning platform designed to educate users on various cybersecurity concepts, attacks, and defenses through hands-on labs and simulations. The platform provides a rich user experience with detailed explanations, interactive terminals, and real-time monitoring to help users understand complex cybersecurity topics effectively.

## Technologies Used

### Frontend
- **React.js**: The entire frontend is built using React.js, providing a dynamic and responsive user interface.
- **React Router**: For client-side routing and navigation between different pages and labs.
- **Context API**: Used for managing authentication state and translations across the app.
- **CSS and Inline Styles**: Styling is done using a combination of CSS and inline styles for component-level customization.
- **Supabase**: Used for backend-as-a-service features such as user authentication and progress tracking.
- **Custom Components**: Includes reusable components like terminals, headers, progress circles, and attack page headers to maintain consistency and modularity.

### Backend
- The project primarily uses **Supabase** as a backend service for:
  - User authentication and authorization.
  - Storing and retrieving user progress data.
- No custom backend server is included; the platform relies on Supabase's managed services.

## How It Works

### User Authentication
Users can sign up and log in to the platform. Authentication state is managed globally using React Context.

### Learning Modules and Labs
- The platform is organized into multiple cybersecurity topics such as DoS/DDoS attacks, SQL Injection, Spoofing, Privilege Escalation, Buffer Overflows, and more.
- Each topic contains articles, quizzes, and interactive attack labs.
- Labs simulate real-world attack scenarios using premade scripts and commands that users can run in an embedded terminal.
- Monitoring terminals display simulated network traffic and attack progress in real-time.
- Users can interact with the target websites to observe the effects of attacks.

### Progress Tracking
- User progress is tracked and saved in Supabase.
- Progress includes completion status of articles, quizzes, and labs.
- Users can resume their learning from where they left off.

### Attack Simulations
- Attack pages simulate various cyber attacks such as Slowloris, HTTP Flood, DNS Spoofing, IP Spoofing, and more.
- Each attack lab provides step-by-step instructions, commands to launch and stop attacks, and monitoring terminals to visualize the attack.
- The platform uses premade attack files and scripts to demonstrate attacks and mitigation techniques.

## Features and Functionalities
- **Interactive Terminals**: Users can type commands to launch and stop attacks.
- **Real-time Monitoring**: Simulated network traffic and attack logs update dynamically.
- **Detailed Instructions**: Each lab includes comprehensive instructions and explanations.
- **Network Architecture Explanations**: Visual and textual explanations of attack architectures.
- **User Progress Management**: Tracks and saves user progress across modules.
- **Responsive UI**: Designed to work well on various screen sizes.
- **Navigation and Routing**: Easy navigation between topics and labs.
- **Educational Notes**: Informative notes on attack files and real-world relevance.

## Project Structure
- `src/pages`: Contains all the main pages and attack labs organized by topic.
- `src/components`: Reusable UI components like terminals, headers, progress indicators.
- `src/context`: React Context providers for authentication and translations.
- `src/supabase`: API wrappers for interacting with Supabase backend.
- `public/assets`: Static assets like images and icons.

## Getting Started
To run the project locally:
1. Clone the repository.
2. Install dependencies using `npm install` or `yarn`.
3. Configure Supabase credentials in the environment variables.
4. Run the development server using `npm start` or `yarn start`.
5. Access the app at `http://localhost:5173`.

## Contribution
Contributions are welcome! Please fork the repository and submit pull requests for improvements, bug fixes, or new features.

## License
This project is for educational purposes and does not include any malicious code. Use responsibly.

---

This README provides a comprehensive overview of the CyberHub project, its technologies, features, and usage.
